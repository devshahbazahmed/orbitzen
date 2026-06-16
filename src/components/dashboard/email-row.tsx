'use client';

import { motion } from 'motion/react';

interface Props {
  sender: string;
  subject: string;
  preview: string;
  time: string;
  priority?: boolean;
}

export default function EmailRow({
  sender,
  subject,
  preview,
  time,
  priority,
}: Props) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: 'rgba(255,255,255,.04)',
      }}
      className="
        grid
        grid-cols-[220px_1fr_120px]
        items-center
        border-b
        border-white/10
        px-8
        py-6
      "
    >
      <div className="font-semibold">{sender}</div>

      <div className="flex items-center gap-3">
        {priority && (
          <span
            className="
              rounded
              bg-[#3563FF]/20
              px-2
              py-1
              text-xs
              text-[#3563FF]
            "
          >
            PRIORITY
          </span>
        )}

        <span>{subject}</span>

        <span className="text-zinc-500">— {preview}</span>
      </div>

      <div className="text-right text-zinc-400">{time}</div>
    </motion.div>
  );
}
