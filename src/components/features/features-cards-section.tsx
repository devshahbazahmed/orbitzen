'use client';
import { motion } from 'motion/react';
import { features } from '../../data/features';
import { Check } from 'lucide-react';

export default function FeaturesCardSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                whileHover={{ y: -5 }}
                className="rounded-3xl border border-white/10 bg-white/2 p-8"
              >
                <Icon className="h-8 w-8 text-[#2E62FF]" />

                <h3 className="mt-5 text-2xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-slate-400">{feature.description}</p>

                <ul className="mt-6 space-y-3">
                  {feature.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-[#2E62FF]" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
