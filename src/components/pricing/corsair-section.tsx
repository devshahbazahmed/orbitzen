'use client';

import { Cpu } from 'lucide-react';
import { motion } from 'motion/react';

export default function CorsairSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="rounded-2xl border border-white/10 bg-white/3 p-10"
    >
      <div className="grid lg:grid-cols-2 gap-10">
        <div>
          <div className="text-xs tracking-[0.3em] text-[#2E62FF]">
            CORE TECHNOLOGY
          </div>

          <h2 className="mt-5 text-4xl font-semibold">
            Corsair MCP: The Intelligence Engine
          </h2>

          <p className="mt-5 text-zinc-400">
            Our proprietary Model Control Protocol allows Orbitzen to interface
            directly with local and cloud data sources.
          </p>

          <div className="flex gap-12 mt-10">
            <div>
              <div className="text-3xl font-bold">200ms</div>
              <p className="text-sm text-zinc-500">Retrieval speed</p>
            </div>

            <div>
              <div className="text-3xl font-bold">Zero</div>
              <p className="text-sm text-zinc-500">Context switching</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center rounded-xl border border-white/10 bg-black">
          <Cpu className="h-20 w-20 text-[#2E62FF]" />
        </div>
      </div>
    </motion.section>
  );
}
