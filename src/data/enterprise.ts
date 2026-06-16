import {
  Shield,
  Network,
  Rocket,
  Headphones,
  BadgeCheck,
  Globe,
  Database,
  Lock,
  FileCheck,
  Building2,
} from 'lucide-react';

import type {
  BenefitItem,
  ComplianceItem,
  ControlItem,
  FooterSection,
  IntegrationItem,
  SecurityMetric,
} from '@/types/index';

export const heroData = {
  badge: 'ORBIT FOR LARGE ORGANIZATIONS',
  title: 'Command at',
  highlightedWord: 'Scale.',
  description:
    'Orchestrate complex data ecosystems with kinetic precision. The unified operating system for the modern enterprise, built on zero-trust foundations and limitless integration.',
  primaryCTA: 'Contact Sales',
  secondaryCTA: 'View Capability Map',
};

export const securityMetrics: SecurityMetric[] = [
  {
    title: 'AES-256',
    subtitle: 'Encryption',
  },
  {
    title: 'SOC2 Type II',
    subtitle: 'Compliant',
  },
  {
    title: 'mTLS',
    subtitle: 'Auth Protocol',
  },
];

export const integrationItems: IntegrationItem[] = [
  {
    id: 'gateway',
    label: 'Private API Gateways',
  },
  {
    id: 'mcp',
    label: 'Custom MCP Instances',
  },
  {
    id: 'mesh',
    label: 'Hybrid-Cloud Mesh',
  },
];

export const controlItems: ControlItem[] = [
  {
    label: 'SAML / SSO',
    status: 'Enabled',
  },
  {
    label: 'Audit Logs (API)',
    status: 'Streaming',
  },
];

export const enterpriseBenefits: BenefitItem[] = [
  {
    icon: Headphones,
    title: 'Architect Consultation',
    description: 'Direct line to our systems engineers during evaluation.',
  },
  {
    icon: Rocket,
    title: 'Rapid Deployment',
    description: 'Accelerated onboarding with dedicated migration tooling.',
  },
];

export const complianceItems: ComplianceItem[] = [
  {
    icon: Shield,
    label: 'SOC2 TYPE II',
  },
  {
    icon: FileCheck,
    label: 'GDPR COMPLIANT',
  },
  {
    icon: BadgeCheck,
    label: 'HIPAA READY',
  },
  {
    icon: Globe,
    label: 'ISO 27001',
  },
  {
    icon: Lock,
    label: 'PCI DSS LEVEL 1',
  },
];

export const footerSections: FooterSection[] = [
  {
    title: 'Platform',
    links: [
      {
        label: 'Compute Engine',
        href: '#',
      },
      {
        label: 'Data Mesh',
        href: '#',
      },
      {
        label: 'Security Shield',
        href: '#',
      },
    ],
  },
  {
    title: 'Enterprise',
    links: [
      {
        label: 'Compliance',
        href: '#',
      },
      {
        label: 'Global SLA',
        href: '#',
      },
      {
        label: 'Success Plans',
        href: '#',
      },
    ],
  },
  {
    title: 'Support',
    links: [
      {
        label: 'Documentation',
        href: '#',
      },
      {
        label: 'API Status',
        href: '#',
      },
      {
        label: 'Contact Center',
        href: '#',
      },
    ],
  },
];

export const enterpriseCards = {
  security: {
    icon: Shield,
    title: 'Advanced Security',
    description:
      'Protect your most sensitive operations with a multi-layered Zero-Trust architecture. Every request is verified, every byte is encrypted end-to-end.',
  },

  support: {
    icon: BadgeCheck,
    title: 'Priority Support',
    description:
      'A dedicated Technical Success Manager and a contractually guaranteed 99.99% uptime SLA for your mission-critical pipelines.',
    uptime: '99.99%',
  },

  integration: {
    icon: Network,
    title: 'Integration Hub',
    description:
      'Dedicated MCP instances and private API access to connect your entire legacy and modern tech stack without compromise.',
  },

  control: {
    icon: Database,
    title: 'Enterprise Control',
    description:
      'Maintain absolute visibility and governance with granular audit logs and seamless SSO/SAML integration.',
  },

  consultation: {
    icon: Building2,
    title: 'Accelerate your digital evolution.',
    description:
      'Our engineering team will work directly with your architects to design a deployment strategy that matches your security and compliance requirements.',
  },
};
