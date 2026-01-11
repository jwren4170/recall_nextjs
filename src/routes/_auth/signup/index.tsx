import { createFileRoute } from '@tanstack/react-router';
import { SignupForm } from '@/components/web/auth/signup-form';

export const Route = createFileRoute('/_auth/signup/')({
	component: RouteComponent,
});

function RouteComponent() {
	return <SignupForm />;
}
