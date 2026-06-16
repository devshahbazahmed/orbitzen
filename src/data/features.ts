import { Bell, Brain, Calendar, Mail, Users, Zap } from 'lucide-react';

export const features = [
  {
    icon: Brain,
    title: 'AI Command Center',
    description:
      'OrbitZen understands your workspace context and suggests actions before you even ask.',
    bullets: [
      'Context-aware drafting',
      'Natural language commands',
      'Task recommendations',
      'Cross-platform intelligence',
    ],
  },
  {
    icon: Zap,
    title: 'Smart Automations',
    description:
      'Eliminate repetitive work with AI-powered workflow automation.',
    bullets: [
      'Slack → Jira automation',
      'Meeting summaries',
      'Task generation',
      'Reminder workflows',
    ],
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description:
      'Receive actionable notifications instead of overwhelming noise.',
    bullets: [
      'Priority detection',
      'Instant updates',
      'Smart filtering',
      'Activity monitoring',
    ],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Built for engineering teams that move fast and stay aligned.',
    bullets: [
      'Shared workspaces',
      'Ownership tracking',
      'Activity feeds',
      'Workspace analytics',
    ],
  },
];

export const integrations = [
  {
    icon: Mail,
    name: 'Gmail',
  },
  {
    icon: Calendar,
    name: 'Google Calendar',
  },
];
