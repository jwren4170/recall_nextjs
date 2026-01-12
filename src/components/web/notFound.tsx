import { cn } from '@/lib/utils';
import { Link } from '@tanstack/react-router';
import { buttonVariants } from '../ui/button';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center to-bg-foreground bg-linear-to-b from-bg-background via-slate-800 min-h-screen'>
      <div className='px-6 py-16 text-primary-foreground text-center'>
        <h1 className='mb-4 font-bold text-9xl'>404</h1>
        <p className='mb-8 text-2xl'>
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to='/'
          className={cn(buttonVariants({ size: 'xl' }), 'text-foreground')}
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
