'use client';

import { Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function InboxHeader() {
  return (
    <div className="border-b border-white/10">
      <div className="flex h-16 items-center justify-between px-8">
        <div className="flex items-center gap-10">
          <button className="text-lg font-medium">Orbitzen Inbox</button>

          <button className="border-b-2 border-[#3563FF] pb-4 text-lg">
            Priority
          </button>

          <button className="text-zinc-400">All Mail</button>
        </div>

        <div className="flex items-center gap-5">
          <motion.div whileHover={{ scale: 1.1 }}>
            <Bell className="h-5 w-5" />
          </motion.div>

          <button
            className="
            rounded-lg
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            text-sm
          "
          >
            ⌘ K Search
          </button>
        </div>
      </div>
    </div>
  );
}
