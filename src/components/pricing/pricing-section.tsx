import { plans } from '@/data/pricing';
import PricingCard from './pricing-card';
import { PricingPlan } from '@/types';

export default function PricingSection() {
  return (
    <section className="pb-24">
      <div className="grid gap-8 lg:grid-cols-3">
        {plans.map((plan: PricingPlan) => (
          <PricingCard key={plan.name} plan={plan} />
        ))}
      </div>
    </section>
  );
}
