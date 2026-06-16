import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function CTASection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-white/3 p-20 text-center">
          <h2 className="text-6xl font-bold">Ready to orbit?</h2>

          <p className="mt-6 text-zinc-400">
            Join the waitlist of professionals.
          </p>

          <div className="mt-10 flex max-w-xl mx-auto gap-3">
            <Input placeholder="work@company.com" className="p-5" />

            <Button className="bg-[#2E62FF] text-white p-5">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
