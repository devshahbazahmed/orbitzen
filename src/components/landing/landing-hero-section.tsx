'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import DashboardPreview from '@/components/landing/landing-dashboard-preview';
import { useState } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section
      className="relative"
      onMouseMove={(e) => {
        setPosition({
          x: e.clientX,
          y: e.clientY,
        });
      }}
    >
      <motion.div
        animate={{
          x: position.x - 250,
          y: position.y - 250,
        }}
        className="
    pointer-events-none
    absolute
    h-125
    w-125
    rounded-full
    bg-blue-500/10
    blur-[120px]
  "
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_60%)]" />

      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-175 w-175 -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-125 w-125 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 pt-28">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="flex justify-center items-center w-full">
            <motion.div
              className="px-5 py-2 rounded-xl flex items-center justify-center gap-4"
              animate={{
                boxShadow: [
                  '0 0 0px #2563eb',
                  '0 0 20px #2563eb',
                  '0 0 0px #2563eb',
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
              }}
            >
              <Image src="/bolt.svg" alt="bolt" width={20} height={20} />
              <p>POWERED BY CORSAIR MCP</p>
            </motion.div>
          </div>

          <h1 className="mt-8 text-6xl md:text-7xl lg:text-8xl xl:text-[92px] font-bold leading-tight tracking-tighter">
            Email at the speed of
            <span className="block text-[#2E62FF]">thought.</span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto text-lg">
            The clinical command center for professionals. High-velocity
            communication powered by real-time AI agents and keyboard-first
            interactions.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Button size="lg" className="bg-[#2E62FF] text-white p-5">
              Claim Your Invite
            </Button>

            <Button size="lg" variant="outline" className="p-5">
              View Demo
            </Button>
          </div>
        </motion.div>

        <DashboardPreview />
      </div>
    </section>
  );
}
