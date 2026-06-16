import { LucideIcon } from 'lucide-react';

// Pricing
export type PricingPlan = {
  name: string;
  label: string;
  price: string;
  description: string;
  button: string;
  popular: boolean;
  features: string[];
};

// Landing
export type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
};

export type FooterColumn = {
  title: string;
  links: string[];
};
