import {
  Calendar,
  Mail,
  Search,
  Puzzle,
  Settings,
  CircleHelp,
} from 'lucide-react';

export const data = {
  navMain: [
    {
      title: 'Inbox',
      url: '/dashboard/inbox',
      icon: Mail,
      badge: 12,
      active: true,
    },
    {
      title: 'Calendar',
      url: '/dashboard/calendar',
      icon: Calendar,
    },
    {
      title: 'Search',
      url: '/dashboard/search',
      icon: Search,
      shortcut: '/',
    },
    {
      title: 'Integrations',
      url: '/dashboard/integrations',
      icon: Puzzle,
    },
  ],

  navBottom: [
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: Settings,
    },
    {
      title: 'Support',
      url: '/dashboard/support',
      icon: CircleHelp,
    },
  ],
};
