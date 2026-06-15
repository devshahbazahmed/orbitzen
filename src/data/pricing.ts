import { PricingPlan } from '@/types';

export const plans: PricingPlan[] = [
  {
    name: 'Starter',
    label: 'FREE',
    price: '$0',
    description:
      'Essential inbox and calendar management for casual efficiency.',
    button: 'Deploy',
    popular: false,
    features: [
      'Unified Inbox (3 accounts)',
      'Basic Calendar Sync',
      'Keyboard-first navigation',
    ],
  },

  {
    name: 'Pro',
    label: 'POWER USER',
    price: '$29',
    description: 'For professionals who live in their command center.',
    button: 'Activate Pro',
    popular: true,
    features: [
      'Unlimited Account Integration',
      'Corsair MCP Access',
      'Custom Command Macros',
      'Offline Database Access',
      'End-to-End Encryption',
    ],
  },

  {
    name: 'Enterprise',
    label: 'ORGANIZATIONS',
    price: 'Custom',
    description: 'Full ecosystem integration and dedicated support for teams.',
    button: 'Contact Sales',
    popular: false,
    features: [
      'Advanced Search API',
      'SSO & SAML Authentication',
      'Dedicated Success Manager',
      'Audit Logs & Compliance',
      'Custom SLAs',
    ],
  },
];

export const comparisonRows = [
  {
    feature: 'Unified Inbox Accounts',
    starter: 'Up to 3',
    pro: 'Unlimited',
    enterprise: 'Unlimited',
  },
  {
    feature: 'Corsair MCP Access',
    starter: '—',
    pro: '✓',
    enterprise: '✓',
  },
  {
    feature: 'Advanced Search API',
    starter: '—',
    pro: '—',
    enterprise: 'Included',
  },
  {
    feature: 'Custom Shortcut Editor',
    starter: '—',
    pro: '✓',
    enterprise: '✓',
  },
  {
    feature: 'Dedicated Hosting',
    starter: '—',
    pro: '—',
    enterprise: 'Optional',
  },
];
