import { createFileRoute } from '@tanstack/react-router';
import NotFound from '@/components/web/NotFound';

export const Route = createFileRoute('/$')({
	component: RouteComponent,
});

function RouteComponent() {
	return <NotFound />;
}
