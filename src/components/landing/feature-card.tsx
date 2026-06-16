'use client';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Feature } from '@/types';

interface Props {
  feature: Feature;
}

export default function FeatureCard({ feature }: Props) {
  const Icon = feature.icon;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        show: {
          opacity: 1,
          y: 0,
        },
      }}
      whileHover={{
        y: -6,
      }}
      className="rounded-xl border border-white/10 bg-white/3 p-8"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />
      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-[#2E62FF]" />
      </div>

      <h3 className="mt-6 text-xl">{feature.title}</h3>

      <p className="mt-3 text-zinc-400">{feature.description}</p>

      <ul className="mt-6 space-y-3">
        {feature.bullets.map((item: string) => (
          <li key={item} className="flex gap-2 text-sm">
            <Check className="h-4 w-4 text-[#2E62FF]" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
