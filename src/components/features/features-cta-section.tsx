import { ArrowRight } from 'lucide-react';

export default function FeaturesCTASection() {
  return (
    <section className="px-6 pb-32">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-linear-to-r from-blue-950/40 via-slate-950 to-cyan-950/30 p-16 text-center">
        <h2 className="text-5xl font-bold">Ready to move faster?</h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400">
          Connect your tools, automate your workflows, and reclaim your focus
          with OrbitZen.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <button className="rounded-xl bg-[#2E62FF] px-8 py-4 font-medium transition hover:bg-[#2E62FF]">
            Start Free Trial
          </button>

          <button className="flex items-center justify-center gap-2 rounded-xl border border-cyan-500 px-8 py-4 text-cyan-400 transition hover:bg-cyan-500/10">
            Request Demo
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
