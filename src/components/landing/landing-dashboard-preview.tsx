'use client';

import { motion } from 'motion/react';
import { Mail, MessageCircle, Cloud, Terminal, Database } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      className="mt-20 pb-20"
    >
      <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
        {/* Left: Email/Chat Interface */}
        <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 overflow-hidden">
          <div className="p-6 space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#2E62FF]" />
                <span className="text-sm font-medium text-zinc-300">
                  EMAIL • COMMAND CENTER
                </span>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 max-h-80 overflow-y-auto">
              {/* Jane Doe */}
              <div className="flex justify-between items-start gap-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">
                      Jane Doe
                    </span>
                    <span className="text-xs text-zinc-500">16 ago</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Quarterly Strategy Alignment
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Align company agents from strategy-level insights...
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition">
                    <MessageCircle className="w-4 h-4 text-zinc-500" />
                  </button>
                </div>
              </div>

              {/* Sam Miller */}
              <div className="flex justify-between items-start gap-3 pt-2 border-t border-white/10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">
                      Sam Miller
                    </span>
                    <span className="text-xs text-zinc-500">12 ago</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    BI: Infrastructure Update
                  </p>
                  <p className="text-xs text-zinc-500 mt-1">
                    Get any update on CTO-led infrastructure...
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition">
                    <MessageCircle className="w-4 h-4 text-zinc-500" />
                  </button>
                </div>
              </div>

              {/* Corsair Intelligence */}
              <div className="flex justify-between items-start gap-3 pt-2 border-t border-white/10">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-white">
                      Corsair Intelligence
                    </span>
                    <span className="text-xs text-zinc-500">just now</span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Drafting response for &quot;Quarterly Strategy&quot;
                  </p>
                  <p className="text-xs text-zinc-500 mt-1 flex items-center gap-1">
                    <span className="inline-block w-1.5 h-1.5 bg-[#2E62FF] rounded-full animate-pulse"></span>
                    AI is typing...
                  </p>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition">
                    <MessageCircle className="w-4 h-4 text-zinc-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Integration Cards */}
        <div className="space-y-6">
          {/* App Integration Card */}
          <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/5 to-white/2 p-6">
            <div className="space-y-3">
              <div className="text-lg font-semibold text-zinc-400 tracking-wider">
                APP INTEGRATION
              </div>
              <h3 className="text-md font-semibold text-white">
                Connect Your Stack.
              </h3>
              <p className="text-md text-zinc-400">
                Unlike traditional clients, Orbitzen doesn&apos;t just add
                real-time support by leveraging the Model Context Protocol
                (MCP). Your source code, your knowledge base, and your
                team&apos;s...
              </p>
              <div className="flex gap-2 pt-2">
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <Terminal className="w-4 h-4 text-zinc-400" />
                </button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <Database className="w-4 h-4 text-zinc-400" />
                </button>
                <button className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition">
                  <Cloud className="w-4 h-4 text-zinc-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
