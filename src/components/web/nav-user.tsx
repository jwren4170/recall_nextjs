'use client';

import { ChevronsUpDown, LogOut } from 'lucide-react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useSignOut } from '@/lib/utils';

export function NavUser({ user }: NavUserProps) {
  const { isMobile } = useSidebar();
  const handleSignOut = useSignOut();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='rounded-lg w-8 h-8'>
                <AvatarImage
                  src={
                    user.image ??
                    `https://api.dicebear.com/9.x/glass/svg?seed=${user.name}`
                  }
                  alt={user.name}
                />
                <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
              </Avatar>
              <div className='flex-1 grid text-sm text-left leading-tight'>
                <span className='font-medium truncate'>{user.name}</span>
                <span className='text-xs truncate'>{user.email}</span>
              </div>
              <ChevronsUpDown className='ml-auto size-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-sm text-left'>
                <Avatar className='rounded-lg w-8 h-8'>
                  <AvatarImage
                    src={
                      user.image ??
                      `https://api.dicebear.com/9.x/glass/svg?seed=${user.name}`
                    }
                    alt={user.name}
                  />
                  <AvatarFallback className='rounded-lg'>CN</AvatarFallback>
                </Avatar>
                <div className='flex-1 grid text-sm text-left leading-tight'>
                  <span className='font-medium truncate'>{user.name}</span>
                  <span className='text-xs truncate'>{user.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
