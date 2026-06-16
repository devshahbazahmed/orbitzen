import Header from '@/components/shared/shared-header';
import Hero from '@/components/landing/landing-hero-section';
import ArchitectureSection from '@/components/landing/landing-architecture-section';
import CTASection from '@/components/landing/landing-cta-section';
import FadeIn from '@/components/shared/animations/fade-in';
import AuroraBackground from '@/components/shared/backgrounds/aurora-background';
import GridBackground from '@/components/shared/backgrounds/grid-background';
import Footer from '@/components/shared/shared-footer';
import LandingFeatureSection from '@/components/landing/landing-feature-section';

export default function HomePage() {
  return (
    <main className="bg-[#040814] text-white overflow-hidden">
      <AuroraBackground />
      <GridBackground />

      <Header />

      <FadeIn>
        <Hero />
      </FadeIn>

      <FadeIn>
        <LandingFeatureSection />
      </FadeIn>

      <FadeIn>
        <ArchitectureSection />
      </FadeIn>

      <FadeIn>
        <CTASection />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
