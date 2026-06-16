import PricingHero from '@/components/pricing/pricing-hero';
import PricingSection from '@/components/pricing/pricing-section';
import ComparisonTable from '@/components/pricing/comparison-table';
import Header from '@/components/shared/shared-header';
import Footer from '@/components/shared/shared-footer';
import FadeIn from '@/components/shared/animations/fade-in';
import AuroraBackground from '@/components/shared/backgrounds/aurora-background';
import GridBackground from '@/components/shared/backgrounds/grid-background';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#040814] text-white overflow-hidden">
      <AuroraBackground />
      <GridBackground />
      <Header />

      <div className="container mx-auto px-6">
        <FadeIn>
          <PricingHero />
        </FadeIn>

        <FadeIn>
          <PricingSection />
        </FadeIn>

        <FadeIn>
          <ComparisonTable />
        </FadeIn>
      </div>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
