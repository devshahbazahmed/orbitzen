'use client';
import { DotIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';

export default function FeaturesHero() {
  return (
    <section className="relative px-6 pt-32 pb-24">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div animate="visible" variants={fadeUp}>
          <div className="flex justify-center items-center w-full">
            <motion.div
              className="px-5 py-2 rounded-xl flex items-center justify-center gap-3"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <DotIcon className="text-xl text-green-400" />
              <p className="uppercase text-green-400">System Version - 1.0.0</p>
            </motion.div>
          </div>

          <h1 className="mt-8 text-5xl font-bold tracking-tight md:text-7xl">
            Orbitzen Features
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-400">
            AI-powered workflow automation for modern engineering teams. Connect
            your tools, automate repetitive work, and execute faster with
            context-aware intelligence.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {[
            '10+ Integrations',
            '<100ms Commands',
            '99.9% Uptime',
            '24/7 AI Processing',
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl border border-white/10 bg-white/2 p-6 backdrop-blur"
            >
              <p className="font-medium text-slate-300">{item}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
