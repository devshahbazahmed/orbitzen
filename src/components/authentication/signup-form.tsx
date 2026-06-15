'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { motion } from 'motion/react';
import { signupSchema } from '@/lib/validations/auth-validations';

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [showPassword, setShowPassword] = React.useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await signupSchema.safeParse({
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      password: formData.get('password'),
    });
    if (!result.success) {
      console.log(result.error.flatten().fieldErrors);
      return;
    }

    const { fullName, email, password } = result.data;

    const { error } = await authClient.signUp.email({
      name: fullName,
      email,
      password,
    });

    if (!error) {
      router.push('/dashboard');
    }
  };

  return (
    <main className="relative min-h-screen bg-black overflow-hidden pt-3">
      <div className="absolute -left-96 -top-64 h-200 w-200 rounded-full border border-blue-500/30" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -left-96 -top-80 h-225 w-225 rounded-full border border-blue-500/30"
      />

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -right-96 -bottom-75 h-225 w-225 rounded-full border border-blue-500/20"
      />

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center rounded-2xl">
          <Image src="/orbitzen.svg" alt="orbitzen" width={72} height={72} />
        </div>

        <h1 className="text-5xl font-semibold text-white">Orbitzen</h1>

        <p className="mt-2 text-xs tracking-[0.35em] text-zinc-200">
          AI Scheduling. Smarter Workdays.
        </p>
      </div>

      <div className="flex min-h-screen items-center justify-center mt-[-60]">
        <Card
          {...props}
          className="w-120 bg-white/2 backdrop-blur-2xl border border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.15)]"
        >
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">
              Create your account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
              <Button type="button" variant="outline" className="w-full py-6">
                <Image src="/google.svg" alt="Google" width={16} height={16} />
                Continue with Google
              </Button>

              <div className="relative">
                <Separator />
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center">
                  <span className="bg-background px-4 text-[10px] tracking-[0.2em] text-zinc-500">
                    OR
                  </span>
                </div>
              </div>

              <FieldGroup className="space-y-4">
                <Field>
                  <FieldLabel
                    htmlFor="name"
                    className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
                  >
                    Full-Name
                  </FieldLabel>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="John Doe"
                    required
                    className="bg-transparent border-white/10 text-white placeholder:text-zinc-500 py-5"
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="email"
                    className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
                  >
                    Email
                  </FieldLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="johndoe@example.com"
                    required
                    className="bg-transparent border-white/10 text-white placeholder:text-zinc-500 py-5"
                  />
                </Field>
                <Field>
                  <FieldLabel
                    htmlFor="password"
                    className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
                  >
                    Password
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="bg-transparent border-white/10 text-white placeholder:text-zinc-500 py-5"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </Field>
              </FieldGroup>

              <Button
                type="submit"
                className="w-full bg-[#3461FF] hover:bg-[#2853f0] shadow-[0_0_30px_rgba(52,97,255,0.4)] text-white font-medium py-5 hover:cursor-pointer"
              >
                Create Account <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-md text-muted-foreground">
                Already have an account?{' '}
                <Link
                  href="/login"
                  className="font-medium text-[#2E62FF] hover:underline"
                >
                  Sign in instead
                </Link>
              </p>

              <p className="text-center text-xs text-zinc-500">
                By signing up, you agree to our{' '}
                <Link href="#" className="hover:underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
