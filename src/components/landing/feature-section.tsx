'use client';
import { motion } from 'motion/react';
import { features } from '@/data/landing';
import FeatureCard from '@/components/landing/feature-card';

export default function FeatureSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-lg">
          <h2 className="text-6xl font-bold">
            Designed for the clinical high-performer.
          </h2>

          <p className="mt-6 text-zinc-400">
            We&apos;ve stripped away everything that slows you down.
          </p>
        </div>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid lg:grid-cols-3 gap-6 mt-16"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
