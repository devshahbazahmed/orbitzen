'use client';

import { motion } from 'motion/react';

export default function PricingHero() {
  return (
    <section className="py-24 text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <div className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-xs tracking-[0.3em] text-blue-400">
          PLANS FOR PERFORMANCE
        </div>

        <h1 className="mt-8 text-6xl font-bold">Command your workflow.</h1>

        <p className="mt-6 max-w-3xl mx-auto text-zinc-400">
          Choose the layer of Orbitzen that matches your intensity.
        </p>
      </motion.div>
    </section>
  );
}
