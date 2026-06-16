'use client';

import { motion } from 'motion/react';
import { Shield } from 'lucide-react';
import { enterpriseCards, securityMetrics } from '@/data/enterprise';

export default function SecurityCard() {
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
          bg-linear-to-r
          from-blue-500/5
          via-cyan-500/5
          to-blue-500/5
        "
      />

      {/* Top Row */}
      <div className="relative z-10 flex items-start justify-between">
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
          <Shield className="h-7 w-7 text-[#2E62FF]" />
        </div>

        <div
          className="
            rounded-full
            border
            border-emerald-500/20
            bg-emerald-500/10
            px-3
            py-1
            text-xs
            font-medium
            text-emerald-400
          "
        >
          Zero Trust
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-8">
        <h3 className="text-3xl font-semibold tracking-tight">
          {enterpriseCards.security.title}
        </h3>

        <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
          {enterpriseCards.security.description}
        </p>
      </div>

      {/* Metrics */}
      <div className="relative z-10 mt-10 grid gap-4 md:grid-cols-3">
        {securityMetrics.map((metric) => (
          <div
            key={metric.title}
            className="
              rounded-2xl
              border
              border-white/10
              bg-black/20
              p-5
            "
          >
            <h4 className="text-xl font-semibold">{metric.title}</h4>

            <p className="mt-1 text-sm text-zinc-500">{metric.subtitle}</p>
          </div>
        ))}
      </div>

      {/* Decorative Grid */}
      <div
        className="
          absolute
          right-0
          bottom-0
          h-40
          w-40
          opacity-20
          bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)]
          bg-size-[20px_20px]
          mask-[radial-gradient(circle,black,transparent)]
        "
      />
    </motion.div>
  );
}
