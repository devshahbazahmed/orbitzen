import GridBackground from '@/components/shared/backgrounds/grid-background';
import Header from '@/components/shared/shared-header';
import Footer from '@/components/shared/shared-footer';
import FeaturesHero from '@/components/features/features-hero-section';
import AuroraBackground from '@/components/shared/backgrounds/aurora-background';
import FadeIn from '@/components/shared/animations/fade-in';
import FeaturesAISection from '@/components/features/features-ai-section';
import FeaturesKeyboardSection from '@/components/features/features-keyboard-section';
import FeaturesCardSection from '@/components/features/features-cards-section';
import FeaturesCTASection from '@/components/features/features-cta-section';

export default function FeaturesPage() {
  return (
    <main className="bg-[#040814] text-white overflow-hidden">
      <AuroraBackground />
      <GridBackground />

      <Header />

      <FadeIn>
        <FeaturesHero />
      </FadeIn>

      <FadeIn>
        <FeaturesAISection />
      </FadeIn>

      <FadeIn>
        <FeaturesKeyboardSection />
      </FadeIn>

      <FadeIn>
        <FeaturesCardSection />
      </FadeIn>

      <FadeIn>
        <FeaturesCTASection />
      </FadeIn>

      <FadeIn>
        <Footer />
      </FadeIn>
    </main>
  );
}
