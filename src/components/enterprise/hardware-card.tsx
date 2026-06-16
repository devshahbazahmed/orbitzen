'use client';

import { motion } from 'motion/react';
import { Cpu } from 'lucide-react';

export default function HardwareCard() {
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
        border-white/10
        bg-white/3
        backdrop-blur-xl
        p-8
        h-full
        min-h-85
      "
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-64
          w-64
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-blue-500/20
          blur-[100px]
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
          from-blue-500/5
          via-cyan-500/5
          to-transparent
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
            border-blue-500/20
            bg-blue-500/10
          "
        >
          <Cpu className="h-7 w-7 text-[#2E62FF]" />
        </div>

        {/* Title */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">Dedicated Infrastructure</h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Deploy Orbit on isolated enterprise-grade infrastructure with
            complete control over networking, compute, and data residency.
          </p>
        </div>

        {/* Server Visualization */}
        <div className="relative mt-8 flex flex-1 items-center justify-center">
          <motion.div
            whileHover={{
              scale: 1.03,
            }}
            className="relative"
          >
            {/* Main Server Stack */}
            <div className="space-y-4">
              {[1, 2, 3].map((server) => (
                <motion.div
                  key={server}
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 4 + server,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="
                    relative
                    h-16
                    w-52
                    rounded-2xl
                    border
                    border-blue-500/20
                    bg-linear-to-r
                    from-[#0B1020]
                    via-[#111827]
                    to-[#0B1020]
                    shadow-[0_0_40px_rgba(37,99,235,0.08)]
                  "
                >
                  {/* Server LEDs */}
                  <div className="absolute left-4 top-1/2 flex -translate-y-1/2 gap-2">
                    <motion.div
                      animate={{
                        opacity: [0.4, 1, 0.4],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                      className="h-2 w-2 rounded-full bg-[#2E62FF]"
                    />

                    <motion.div
                      animate={{
                        opacity: [1, 0.3, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="h-2 w-2 rounded-full bg-[#2E62FF]"
                    />
                  </div>

                  {/* Server Lines */}
                  <div className="absolute left-14 top-1/2 flex w-28 -translate-y-1/2 flex-col gap-2">
                    <div className="h-1 rounded-full bg-white/20" />
                    <div className="h-1 w-3/4 rounded-full bg-white/10" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Orbiting Nodes */}
            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="
                absolute
                inset-0
                flex
                items-center
                justify-center
              "
            >
              <div className="relative h-72 w-72">
                <div
                  className="
                    absolute
                    left-1/2
                    top-0
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-400
                  "
                />

                <div
                  className="
                    absolute
                    bottom-0
                    left-1/2
                    h-3
                    w-3
                    -translate-x-1/2
                    rounded-full
                    bg-blue-400
                  "
                />

                <div
                  className="
                    absolute
                    left-0
                    top-1/2
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    bg-indigo-400
                  "
                />

                <div
                  className="
                    absolute
                    right-0
                    top-1/2
                    h-3
                    w-3
                    -translate-y-1/2
                    rounded-full
                    bg-sky-400
                  "
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Infrastructure
          </span>

          <span className="text-xs text-[#2E62FF]">Enterprise Ready</span>
        </div>
      </div>
    </motion.div>
  );
}
