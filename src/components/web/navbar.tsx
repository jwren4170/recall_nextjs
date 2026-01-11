import { Button, buttonVariants } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { Link } from '@tanstack/react-router';
import { toast } from 'sonner';
import { ThemeToggle } from './theme-toggle';

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed out successfully');
        },
        onError: ({ error }) => {
          toast.error(error.message);
        },
      },
    });
  };
  return (
    <nav className='top-0 z-50 sticky bg-background/95 supports-backdrop-filter:bg-background/60 backdrop-blur border-b'>
      <div className='flex justify-between items-center mx-auto px-4 max-w-6xl h-16'>
        <div className='flex items-center gap-2'>
          <img
            src={'tanstack-circle-logo.png'}
            alt='TanStack Start Logo'
            className='size-8'
          />
          <h1 className='font-semibold text-lg'>TanStack Recall App</h1>
        </div>

        <div className='flex items-center gap-3'>
          <ThemeToggle />
          {isPending ? null : session ? (
            <>
              <Button onClick={handleSignOut} variant='secondary'>
                Logout
              </Button>
              <Link to='/dashboard' className={buttonVariants()}>
                Dashboard
              </Link>
            </>
          ) : (
            <>
              <Link
                to='/login'
                className={buttonVariants({ variant: 'secondary' })}
              >
                Login
              </Link>
              <Link to='/signup' className={buttonVariants()}>
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
