import { Bell, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { Logo } from './shared-logo';

export default function Header() {
  return (
    <nav className="border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Logo />

          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
            <Link href="/" className="hover:text-[#2E62FF]">
              Product
            </Link>
            <Link href="/pricing" className="hover:text-[#2E62FF]">
              Pricing
            </Link>
            <Link href="#" className="hover:text-[#2E62FF]">
              Enterprise
            </Link>
            <Link href="/features" className="hover:text-[#2E62FF]">
              Features
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-5">
          <Bell className="h-5 w-5 text-slate-600" />
          <UserCircle className="h-6 w-6 text-slate-600" />

          <Link
            href="/login"
            className="text-sm text-slate-700 bg-white font-medium rounded-md px-5 py-2"
          >
            Sign In
          </Link>

          <Link
            href="/signup"
            className="bg-[#2E62FF] text-white px-5 py-2 rounded-md text-sm font-semibold"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
