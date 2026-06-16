'use client';
import { motion } from 'motion/react';
import { fadeUp } from '@/lib/motion';
import { Brain, Check } from 'lucide-react';
import { integrations } from '@/data/features';

export default function FeaturesAISection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-3">
        {/* AI COMMAND CENTER */}
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-linear-to-b from-white/4 to-white/1 p-8 lg:col-span-2"
        >
          <div className="flex items-center gap-3">
            <Brain className="h-5 w-5 text-[#2E62FF]" />
            <span className="text-sm text-[#2E62FF]">AI COMMAND CENTER</span>
          </div>

          <h2 className="mt-4 text-4xl font-bold">Workspace Intelligence</h2>

          <p className="mt-4 max-w-xl text-slate-400">
            OrbitZen analyzes your connected tools and proactively recommends
            actions to help your team move faster.
          </p>

          <ul className="mt-8 space-y-3">
            {[
              'Context-aware drafting',
              'Natural language commands',
              'Task recommendations',
              'Cross-platform intelligence',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-slate-300">
                <Check className="h-4 w-4 text-[#2E62FF]" />
                {item}
              </li>
            ))}
          </ul>

          {/* TERMINAL */}
          <div className="mt-10 rounded-2xl border border-blue-500/20 bg-black p-5">
            <p className="text-xs text-slate-500">AI ANALYSIS TERMINAL</p>

            <div className="mt-4 space-y-2 font-mono text-sm">
              <p className="text-cyan-400">&gt; Analyze sprint blockers</p>
              <p className="text-slate-400">Scanning Slack channels...</p>
              <p className="text-slate-400">
                Reviewing GitHub pull requests...
              </p>
              <p className="text-slate-400">Checking Jira assignments...</p>

              <p className="pt-2 text-green-400">Suggested Action:</p>

              <p className="text-[#2E62FF]">
                Assign API integration task to Shahbaz
              </p>
            </div>
          </div>
        </motion.div>

        {/* INTEGRATIONS */}
        <motion.div
          variants={fadeUp}
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/2 p-8"
        >
          <h3 className="text-2xl font-semibold">Connected Platforms</h3>

          <div className="mt-8 space-y-4">
            {integrations.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between rounded-xl border border-white/10 p-4"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-4 w-4 text-[#2E62FF]" />
                    <span>{item.name}</span>
                  </div>

                  <span className="text-xs text-green-400">CONNECTED</span>
                </div>
              );
            })}
          </div>

          <div className="mt-10 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-500">Average Sync Latency</p>

            <p className="mt-2 text-5xl font-bold text-[#2E62FF]">14ms</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
