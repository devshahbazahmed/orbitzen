'use client';

import { ArrowRight } from 'lucide-react';

export default function CommandCard() {
  return (
    <div
      className="
        mt-auto
        rounded-2xl
        border
        border-white/10
        bg-white/3
        p-5
      "
    >
      <h3 className="mb-4 font-semibold">Command</h3>

      <input
        placeholder="Send invite to Sarah..."
        className="
          mb-4
          w-full
          bg-transparent
          outline-none
        "
      />

      <div className="flex gap-2">
        <button className="rounded border border-white/10 px-3 py-1 text-sm">
          Summarize
        </button>

        <button className="rounded border border-white/10 px-3 py-1 text-sm">
          Propose Times
        </button>
      </div>

      <div className="mt-5 flex justify-end">
        <ArrowRight className="h-5 w-5" />
      </div>
    </div>
  );
}
