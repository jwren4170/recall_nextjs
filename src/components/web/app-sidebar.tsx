'use client';

import { BookmarkIcon, Compass, Import } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { NavPrimaryProps, NavUserProps } from '@/lib/types';
import { Link, linkOptions } from '@tanstack/react-router';
import { NavPrimary } from './nav-primary';
import { NavUser } from './nav-user';

const navItems: NavPrimaryProps['items'] = linkOptions([
  {
    title: 'Items',
    icon: BookmarkIcon,
    to: '/dashboard',
    activeOptions: { exact: false },
  },
  {
    title: 'Import',
    icon: Import,
    to: '/dashboard',
    activeOptions: { exact: false },
  },
  {
    title: 'Discover',
    icon: Compass,
    to: '/dashboard',
    activeOptions: { exact: false },
  },
]);

export function AppSidebar({ user }: NavUserProps) {
  return (
    <Sidebar collapsible='icon'>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link to='/dashboard' className='flex items-center gap-4'>
                <div className='flex justify-center items-center bg-sidebar-primary rounded-lg size-8 aspect-square text-sidebar-primary-foreground'>
                  <BookmarkIcon className='size-4' />
                </div>
                <div className='flex-1 grid text-sm text-left leading-tight'>
                  <span className='font-medium'>Recall</span>
                  <span className='text-xs'>Your AI Knowledge Base</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavPrimary items={navItems} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
