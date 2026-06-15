'use client';

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { PricingPlan } from '@/types';
import { Button } from '@/components/ui/button';

export default function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      className={cn(
        'relative rounded-xl border bg-white/3 p-8 backdrop-blur',
        plan.popular
          ? 'border-[#2E62FF] shadow-[0_0_60px_rgba(59,130,246,.2)]'
          : 'border-white/10'
      )}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#2E62FF] px-4 py-1 text-xs">
          MOST POPULAR
        </div>
      )}

      <div className="text-xs tracking-[0.25em] text-[#2E62FF]">
        {plan.label}
      </div>

      <h3 className="mt-4 text-3xl">{plan.name}</h3>

      <div className="mt-4">
        <span className="text-5xl font-bold">{plan.price}</span>
        {plan.price !== 'Custom' && (
          <span className="text-zinc-500"> /month</span>
        )}
      </div>

      <p className="mt-5 text-zinc-400">{plan.description}</p>

      <ul className="mt-8 space-y-4">
        {plan.features.map((item: string) => (
          <li key={item} className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-[#2E62FF]" />
            {item}
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          'mt-8 w-full rounded-md py-3',
          plan.popular
            ? 'bg-[#2E62FF] text-white hover:bg-blue-600/60'
            : 'border border-white/10'
        )}
      >
        {plan.button}
      </Button>
    </motion.div>
  );
}
