import * as React from 'react';
import { cn } from '@/lib/utils';
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
import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import { Eye, EyeOff } from 'lucide-react';

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    console.log({ email, password });
  };
  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card
        {...props}
        className="w-[480px] bg-white/[0.02] backdrop-blur-2xl border border-blue-500/20 shadow-[0_0_80px_rgba(37,99,235,0.15)]"
      >
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold">
            Login to your account
          </CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e)}>
            <Button variant="outline" type="button" className="w-full py-6">
              <Image src="/google.svg" alt="Google" width={16} height={16} />
              Login with Google
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
                  htmlFor="email"
                  className="text-[11px] tracking-[0.2em] font-medium text-zinc-300"
                >
                  Email
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
              <Field>
                <Button
                  type="submit"
                  className="w-full bg-[#3461FF] hover:bg-[#2853f0] shadow-[0_0_30px_rgba(52,97,255,0.4)] text-white font-medium py-5 hover:cursor-pointer"
                >
                  Login
                </Button>

                <p className="text-center text-md text-muted-foreground">
                  New to Orbitzen?
                  <Link
                    href="/signup"
                    className="font-medium text-[#2E62FF] hover:underline ml-2"
                  >
                    Create an account
                  </Link>
                </p>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
