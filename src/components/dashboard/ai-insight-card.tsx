'use client';

import { Sparkles } from 'lucide-react';

export default function AIInsightCard() {
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
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-blue-400" />

        <span className="text-xs uppercase tracking-widest">AI Insight</span>
      </div>

      <p className="mt-4 text-zinc-300">
        Sarah Jenkins mentioned &quot;board deck&quot; in 3 recent emails.
      </p>
    </div>
  );
}
