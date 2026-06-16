'use client';

import { motion } from 'motion/react';
import { CheckCircle2, Network } from 'lucide-react';
import { enterpriseCards, integrationItems } from '@/data/enterprise';

export default function IntegrationCard() {
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
      {/* Hover Glow */}
      <div
        className="
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
          bg-linear-to-br
          from-cyan-500/5
          via-blue-500/5
          to-transparent
        "
      />

      <div className="relative z-10">
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
            border-cyan-500/20
            bg-cyan-500/10
          "
        >
          <Network className="h-7 w-7 text-[#2E62FF]" />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">
            {enterpriseCards.integration.title}
          </h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            {enterpriseCards.integration.description}
          </p>
        </div>

        {/* Integrations */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-8 space-y-4"
        >
          {integrationItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },
                show: {
                  opacity: 1,
                  x: 0,
                },
              }}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-white/10
                bg-black/20
                px-4
                py-3
              "
            >
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-4 w-4 text-[#2E62FF]" />

                <span className="text-sm text-zinc-200">{item.label}</span>
              </div>

              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="h-2 w-2 rounded-full bg-emerald-400"
                />

                <span className="text-xs text-zinc-500">Active</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Decorative Gradient */}
      <div
        className="
          absolute
          bottom-0
          left-0
          h-24
          w-full
          bg-linear-to-t
          from-cyan-500/5
          to-transparent
        "
      />
    </motion.div>
  );
}
