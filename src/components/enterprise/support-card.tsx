'use client';

import { motion } from 'motion/react';
import { BadgeCheck } from 'lucide-react';
import { enterpriseCards } from '@/data/enterprise';

export default function SupportCard() {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-blue-500/20
        bg-linear-to-br
        from-blue-600/20
        via-blue-500/10
        to-transparent
        backdrop-blur-xl
        p-8
        h-full
        min-h-105
      "
    >
      {/* Animated Glow */}
      <motion.div
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          -top-24
          -right-24
          h-64
          w-64
          rounded-full
          bg-blue-500/20
          blur-[80px]
        "
      />

      {/* Hover Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-linear-to-br
          from-blue-500/10
          to-cyan-500/10
        "
      />

      <div className="relative z-10 flex h-full flex-col">
        {/* Icon */}
        <div
          className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-2xl
            border
            border-blue-400/20
            bg-blue-500/10
          "
        >
          <BadgeCheck className="h-7 w-7 text-[#2E62FF]" />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">
            {enterpriseCards.support.title}
          </h3>

          <p className="mt-4 text-zinc-300 leading-relaxed">
            {enterpriseCards.support.description}
          </p>
        </div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* SLA Metric */}
        <div className="mt-10">
          <motion.div
            animate={{
              textShadow: [
                '0 0 0px rgba(59,130,246,0.4)',
                '0 0 20px rgba(59,130,246,0.7)',
                '0 0 0px rgba(59,130,246,0.4)',
              ],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            className="
              text-6xl
              font-bold
              tracking-tight
              text-[#2E62FF]
            "
          >
            99.99%
          </motion.div>

          <div className="mt-3 flex items-center gap-2">
            <div className="relative">
              <motion.div
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-emerald-400
                "
              />

              <div className="relative h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <span className="text-sm font-medium text-zinc-300">
              Guaranteed SLA
            </span>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div
          className="
            mt-8
            h-px
            w-full
            bg-linear-to-r
            from-transparent
            via-[#2E62FF]/40
            to-transparent
          "
        />
      </div>
    </motion.div>
  );
}
