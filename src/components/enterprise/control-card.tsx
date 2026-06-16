'use client';

import { motion } from 'motion/react';
import { Database } from 'lucide-react';
import { controlItems, enterpriseCards } from '@/data/enterprise';

export default function ControlCard() {
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
          from-violet-500/5
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
            border-violet-500/20
            bg-violet-500/10
          "
        >
          <Database className="h-7 w-7 text-[#2E62FF]" />
        </div>

        {/* Content */}
        <div className="mt-8">
          <h3 className="text-2xl font-semibold">
            {enterpriseCards.control.title}
          </h3>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            {enterpriseCards.control.description}
          </p>
        </div>

        {/* Enterprise Console */}
        <div
          className="
            mt-8
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/30
          "
        >
          {/* Terminal Header */}
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-white/10
              px-4
              py-3
            "
          >
            <div className="h-2 w-2 rounded-full bg-red-500" />
            <div className="h-2 w-2 rounded-full bg-yellow-500" />
            <div className="h-2 w-2 rounded-full bg-green-500" />

            <span className="ml-2 text-xs text-zinc-500">
              enterprise-control
            </span>
          </div>

          {/* Controls */}
          <div className="space-y-4 p-4">
            {controlItems.map((item) => (
              <div
                key={item.label}
                className="
                  flex
                  items-center
                  justify-between
                  rounded-xl
                  border
                  border-white/10
                  bg-white/2
                  px-4
                  py-3
                "
              >
                <span className="text-sm text-zinc-300">{item.label}</span>

                <motion.div
                  animate={{
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-500/20
                    bg-emerald-500/10
                    px-3
                    py-1
                  "
                >
                  <div className="relative">
                    <motion.div
                      animate={{
                        scale: [1, 1.6, 1],
                        opacity: [1, 0, 1],
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

                    <div className="relative h-2 w-2 rounded-full bg-emerald-400" />
                  </div>

                  <span className="text-xs font-medium text-emerald-400">
                    {item.status}
                  </span>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Status */}
        <div className="mt-6 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Governance Layer
          </span>

          <span className="text-xs text-zinc-400">100% Visibility</span>
        </div>
      </div>

      {/* Decorative Grid */}
      <div
        className="
          absolute
          bottom-0
          right-0
          h-32
          w-32
          opacity-10
          bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)]
          bg-size-[16px_16px]
          mask-[radial-gradient(circle,black,transparent)]
        "
      />
    </motion.div>
  );
}
