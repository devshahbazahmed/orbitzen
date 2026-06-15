export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8 py-10 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h4 className="font-semibold mb-4 text-zinc-300">
            Orbit Productivity Inc.
          </h4>
          <p className="text-zinc-500">
            Precision engineering for the modern professional.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-zinc-300">Product</h4>
          <div className="space-y-2 text-zinc-500">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4 text-zinc-300">Support</h4>
          <div className="space-y-2 text-zinc-500">
            <p>Security</p>
            <p>Status</p>
          </div>
        </div>

        <div className="text-zinc-500 md:text-right">
          © 2026 Orbitzen Productivity Inc.
          <br />
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
