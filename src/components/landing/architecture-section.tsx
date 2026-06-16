import { Check } from 'lucide-react';
import Image from 'next/image';

export default function ArchitectureSection() {
  return (
    <section className="mt-20">
      <div className="container mx-auto px-6">
        {/* Top Grid Section */}
        <div className="grid lg:grid-cols-2 gap-6 overflow-hidden rounded-2xl border border-white/10 mb-20">
          <div className="p-12 bg-linear-to-br from-white/5 to-white/2">
            <div className="text-xs tracking-[0.3em] text-[#2E62FF] font-semibold">
              THE CORE ARCHITECTURE
            </div>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              Powered by Corsair MCP.
            </h2>

            <p className="mt-6 text-zinc-400 text-base">
              Unlike traditional clients, Orbitzen doesn&apos;t just send email
              — it understands the context of your entire digital ecosystem. By
              leveraging the Model Context Protocol (MCP), Orbitzen connects
              your AI agents directly to your communication stack.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#2E62FF] shrink-0" />
                <span className="text-sm text-zinc-300">
                  Unified Context Layer
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-[#2E62FF] shrink-0" />
                <span className="text-sm text-zinc-300">
                  Zero-Trust Security
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center p-12 bg-linear-to-br from-blue-900/10 to-transparent">
            <div className="h-80 w-80 rounded-2xl border border-blue-500/30 bg-linear-to-br from-blue-500/10 to-transparent shadow-[0_0_80px_rgba(59,130,246,.25)]">
              <Image src="/arc.png" alt="arc" width={320} height={320} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
