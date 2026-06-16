'use client';

import { motion } from 'motion/react';

export default function ScheduleCard() {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="
        rounded-2xl
        border
        border-white/10
        bg-white/3
        p-5
      "
    >
      <h3 className="mb-4 font-semibold">Schedule</h3>

      <div className="space-y-4 border-l border-white/20 pl-4">
        <div>
          <p className="text-sm">11:00</p>
          <p>Design Sync</p>
        </div>

        <div>
          <p className="text-sm">14:00</p>
          <p>Board Deck Review</p>
        </div>
      </div>
    </motion.div>
  );
}
