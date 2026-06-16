'use client';

import { motion } from 'motion/react';
import { complianceItems } from '@/data/enterprise';

export default function ComplianceStrip() {
  return (
    <section className="pb-24">
      <div className="container mx-auto px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-white/3
            backdrop-blur-xl
            p-8
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-r
              from-blue-500/5
              via-transparent
              to-cyan-500/5
            "
          />

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.3,
            }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.12,
                },
              },
            }}
            className="
              relative
              z-10
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              lg:gap-8
            "
          >
            {complianceItems.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 20,
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                    },
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                  }}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/10
                    bg-black/20
                    px-5
                    py-3
                  "
                >
                  <Icon className="h-4 w-4 text-[#2E62FF]" />

                  <span
                    className="
                      text-xs
                      font-medium
                      tracking-[0.18em]
                      uppercase
                      text-zinc-300
                    "
                  >
                    {item.label}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Bottom Accent Line */}
          <div
            className="
              absolute
              bottom-0
              left-1/2
              h-px
              w-1/2
              -translate-x-1/2
              bg-linear-to-r
              from-transparent
              via-[#2E62FF]/40
              to-transparent
            "
          />
        </div>
      </div>
    </section>
  );
}
