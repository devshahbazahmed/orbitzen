'use client';

import { Button } from '@/components/ui/button';

export default function DeepWorkCard() {
  return (
    <div
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/3
      p-5
    "
    >
      <p className="text-zinc-300">You have a gap between 15:00 and 17:00.</p>

      <div className="mt-5 flex gap-3">
        <Button size="sm">Schedule</Button>

        <Button size="sm" variant="ghost">
          Dismiss
        </Button>
      </div>
    </div>
  );
}
