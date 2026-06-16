'use client';

import * as React from 'react';
import Link from 'next/link';

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';

import { Pencil } from 'lucide-react';

import { data } from '@/data/sidebar-data';
import { Logo } from './shared/shared-logo';
import { Button } from './ui/button';

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="
        border-r
        border-white/10
        bg-[#050816]
      "
      {...props}
    >
      {/* Header */}
      <SidebarHeader className="px-6 pt-8">
        <Logo />

        <Button
          className="
            mt-8
            h-14
            w-full
            justify-start
            gap-3
            bg-[#3563FF]
            text-white
            hover:bg-[#2855F6]
          "
        >
          <Pencil className="h-4 w-4" />
          Compose
        </Button>
      </SidebarHeader>

      {/* Main Navigation */}
      <SidebarContent className="px-3 pt-6">
        <nav className="space-y-1">
          {data.navMain.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.url}
                className={`
                  flex
                  h-12
                  items-center
                  justify-between
                  rounded-lg
                  px-4
                  transition-all
                  ${
                    item.active
                      ? `bg-white/5 text-white border-l-4 border-[#3563FF]`
                      : `text-zinc-400 hover:bg-white/5 hover:text-white`
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5" />

                  <span className="font-medium">{item.title}</span>
                </div>

                {item.badge && (
                  <span
                    className="
                      text-sm
                      text-zinc-400
                    "
                  >
                    {item.badge}
                  </span>
                )}

                {item.shortcut && (
                  <span
                    className="
                      rounded
                      border
                      border-white/10
                      px-2
                      py-0.5
                      text-xs
                    "
                  >
                    {item.shortcut}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Push bottom items down */}
        <div className="flex-1" />

        <nav className="mt-auto space-y-1 pb-6">
          {data.navBottom.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.url}
                className="
                  flex
                  h-12
                  items-center
                  gap-3
                  rounded-lg
                  px-4
                  text-zinc-400
                  transition-all
                  hover:bg-white/5
                  hover:text-white
                "
              >
                <Icon className="h-5 w-5" />

                <span>{item.title}</span>
              </Link>
            );
          })}
        </nav>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-white/10 p-4">
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-full
              bg-blue-500
              font-semibold
            "
          >
            S
          </div>

          <div>
            <p className="font-medium text-white">Shahbaz</p>

            <p className="text-sm text-zinc-500">Pro Plan</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
