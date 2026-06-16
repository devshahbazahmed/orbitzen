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

// Enterprise
export interface EnterpriseHeroData {
  badge: string;
  title: string;
  highlightedWord: string;
  description: string;
  primaryCTA: string;
  secondaryCTA: string;
}

export interface SecurityMetric {
  title: string;
  subtitle: string;
}

export interface EnterpriseCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface IntegrationItem {
  id: string;
  label: string;
}

export interface ControlItem {
  label: string;
  status: string;
}

export interface BenefitItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ComplianceItem {
  icon: LucideIcon;
  label: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
