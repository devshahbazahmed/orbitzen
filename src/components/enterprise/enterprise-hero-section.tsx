'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { heroData } from '@/data/enterprise';
import { useState } from 'react';

export default function EnterpriseHero() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <section
      className="relative overflow-hidden"
      onMouseMove={(e) =>
        setPosition({
          x: e.clientX,
          y: e.clientY,
        })
      }
    >
      {/* Mouse Spotlight */}
      <motion.div
        animate={{
          x: position.x - 250,
          y: position.y - 250,
        }}
        transition={{
          type: 'spring',
          stiffness: 120,
          damping: 30,
        }}
        className="
          pointer-events-none
          absolute
          z-0
          h-125
          w-125
          rounded-full
          bg-blue-500/10
          blur-[120px]
        "
      />

      {/* Top Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2563eb20,transparent_65%)]" />

      <div className="container relative z-10 mx-auto px-6 pt-36 pb-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mx-auto max-w-5xl text-center"
        >
          {/* Badge */}
          <motion.div
            className="
              mx-auto
              flex
              w-fit
              items-center
              gap-2
              rounded-full
              border
              border-blue-500/20
              bg-blue-500/5
              px-4
              py-2
              backdrop-blur-md
            "
            animate={{
              boxShadow: [
                '0 0 0px rgba(37,99,235,.3)',
                '0 0 20px rgba(37,99,235,.45)',
                '0 0 0px rgba(37,99,235,.3)',
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
            }}
          >
            <div className="h-2 w-2 rounded-full bg-[#2E62FF]" />

            <span className="text-[10px] font-medium tracking-[0.25em] text-zinc-300 uppercase">
              {heroData.badge}
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="mt-10 text-6xl font-bold tracking-tighter leading-[0.95] md:text-7xl lg:text-8xl xl:text-[96px]">
            {heroData.title}{' '}
            <span className="text-[#3366ff]">{heroData.highlightedWord}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-zinc-400 md:text-xl">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="
                min-w-55
                rounded-md
                bg-[#3366ff]
                text-white
                hover:bg-[#2954d6]
                p-5
              "
            >
              {heroData.primaryCTA}

              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="
                min-w-55
                rounded-md
                border-zinc-700
                bg-transparent
                text-zinc-200
                hover:bg-zinc-900
                p-5
              "
            >
              {heroData.secondaryCTA}
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
