import { useNavigate } from '@tanstack/react-router';
import { type ClassValue, clsx } from 'clsx';
import { toast } from 'sonner';
import { twMerge } from 'tailwind-merge';
import { authClient } from './auth-client';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const useSignOut = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          navigate({
            to: '/',
          });
          toast.success('Signed out successfully');
        },
        onError: ({ error }) => {
          toast.error(error.message);
        },
      },
    });
  };

  return handleSignOut;
};
