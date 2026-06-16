import GridBackground from '@/components/shared/backgrounds/grid-background';
import Header from '@/components/shared/shared-header';
import FadeIn from '@/components/shared/animations/fade-in';
import Footer from '@/components/shared/shared-footer';
import EnterpriseHero from '@/components/enterprise/enterprise-hero-section';
import EnterpriseGrid from '@/components/enterprise/enterprise-grid-section';
import ConsultationSection from '@/components/enterprise/enterprise-consultation-section';
import ComplianceStrip from '@/components/enterprise/compliance-strip';
import AuroraBackground from '@/components/shared/backgrounds/aurora-background';

export default function EnterprisePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#040814] text-white">
      <AuroraBackground />
      <GridBackground />

      <Header />

      <FadeIn>
        <EnterpriseHero />
      </FadeIn>

      <FadeIn>
        <EnterpriseGrid />
      </FadeIn>

      <FadeIn>
        <ConsultationSection />
      </FadeIn>

      <FadeIn>
        <ComplianceStrip />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
