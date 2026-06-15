'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username');
    const email = formData.get('email');
    const password = formData.get('password');

    console.log({ username, email, password });
  };

  return (
    <Card
      {...props}
      className="w-[480px] bg-white/[0.02] backdrop-blur-2xl border border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.15)]"
    >
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold">
          Create your account
        </CardTitle>
        <CardDescription>Start your 14-day free trial</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <Button type="button" variant="outline" className="w-full">
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
                USER-NAME
              </FieldLabel>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="johndoe123"
                required
                className="bg-transparent border-white/10 text-white placeholder:text-zinc-500 py-5"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="email"
                className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
              >
                WORK EMAIL
              </FieldLabel>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="name@company.com"
                required
                className="bg-transparent border-white/10 text-white placeholder:text-zinc-500 py-5"
              />
            </Field>
            <Field>
              <FieldLabel
                htmlFor="password"
                className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
              >
                PASSWORD
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
  );
}
