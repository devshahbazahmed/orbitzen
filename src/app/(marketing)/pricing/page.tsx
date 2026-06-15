import PricingHero from '@/components/pricing/pricing-hero';
import PricingSection from '@/components/pricing/pricing-section';
import ComparisonTable from '@/components/pricing/comparison-table';
import Header from '@/components/shared/shared-header';
import Footer from '@/components/shared/shared-footer';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#040814] text-white overflow-hidden">
      <Header />

      <div className="container mx-auto px-6">
        <PricingHero />

        <PricingSection />

        <ComparisonTable />
      </div>

      <Footer />
    </main>
  );
}
