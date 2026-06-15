'use client';
import { SignupForm } from '@/components/signup-form';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function SignupPage() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden pt-3">
      <div className="absolute -left-96 -top-64 h-[800px] w-[800px] rounded-full border border-blue-500/30" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="absolute -left-96 -top-80 h-[900px] w-[900px] rounded-full border border-blue-500/30"
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
        className="absolute -right-96 bottom-[-300px] h-[900px] w-[900px] rounded-full border border-blue-500/20"
      />

      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center rounded-2xl">
          <Image src="/orbitzen.svg" alt="orbitzen" width={72} height={72} />
        </div>

        <h1 className="text-5xl font-semibold text-white">Orbitzen</h1>

        <p className="mt-2 text-xs uppercase tracking-[0.35em] text-zinc-500">
          AI Scheduling. Smarter Workdays.
        </p>
      </div>

      <div className="flex min-h-screen items-center justify-center mt-[-60]">
        <SignupForm />
      </div>
    </main>
  );
}
