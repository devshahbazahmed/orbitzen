import { Command } from 'lucide-react';

export default function FeaturesKeyboardSection() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/2 p-10">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3">
              <Command className="h-5 w-5 text-[#2E62FF]" />
              <span className="text-[#2E62FF]">
                KEYBOARD-FIRST PRODUCTIVITY
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-bold">
              Move Faster Without a Mouse
            </h2>

            <p className="mt-4 text-slate-400">
              Every OrbitZen action can be triggered through keyboard shortcuts
              and the command palette.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {['⌘ K', 'G I', 'C M', 'S T'].map((key) => (
                <div
                  key={key}
                  className="rounded-xl border border-white/10 bg-black/40 p-6 text-center text-2xl font-bold"
                >
                  {key}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="rounded-3xl border border-blue-500/30 p-12">
              <p className="text-center text-5xl font-bold text-[#2E62FF]">
                92ms
              </p>
              <p className="mt-2 text-center text-sm text-slate-500">
                Average Reaction Time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
