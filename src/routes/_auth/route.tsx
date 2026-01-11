import { createFileRoute, Link, Outlet } from '@tanstack/react-router';
import { ArrowBigLeft } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';

export const Route = createFileRoute('/_auth')({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="min-h-screen">
			<div className="top-8 left-8 absolute">
				<Link to="/" className={buttonVariants({ variant: 'secondary' })}>
					<ArrowBigLeft className="size-4" />
					Back to home
				</Link>
			</div>
			<div className="flex justify-center items-center min-h-screen">
				<Outlet />
			</div>
		</div>
	);
}
