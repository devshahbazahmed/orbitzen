import { Logo } from './shared-logo';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="container mx-auto px-6 py-20 grid md:grid-cols-4 gap-10">
        <div>
          <Logo />

          <p className="mt-4 text-zinc-500">
            The high-performance command center for the digital executive.
            Designed for speed, built for focus.
          </p>
        </div>

        <div>
          <h5 className="mb-4">Product</h5>
          <ul className="space-y-2 text-zinc-500">
            <li>Features</li>
            <li>Integrations</li>
            <li>API Docs</li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4">Company</h5>
          <ul className="space-y-2 text-zinc-500">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Security</li>
          </ul>
        </div>

        <div>
          <h5 className="mb-4">Support</h5>
          <ul className="space-y-2 text-zinc-500">
            <li>Help Center</li>
            <li>Status</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="w-full flex items-center justify-center mb-8">
        <p className="text-zinc-500">
          © 2026 Orbitzen Productivity Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
