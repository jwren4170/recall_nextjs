import { createFileRoute } from '@tanstack/react-router';
import Navbar from '@/components/web/Navbar';

export const Route = createFileRoute('/')({ component: App });

function App() {
	return <Navbar />;
}
