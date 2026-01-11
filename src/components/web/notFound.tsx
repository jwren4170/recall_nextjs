import { Link } from '@tanstack/react-router';

const NotFound = () => {
	return (
		<div className="flex justify-center items-center bg-linear-to-b from-slate-900 via-slate-800 to-slate-900 min-h-screen">
			<div className="px-6 py-16 text-center">
				<h1 className="mb-4 font-bold text-white text-9xl">404</h1>
				<p className="mb-8 text-gray-300 text-2xl">
					Oops! The page you're looking for doesn't exist.
				</p>
				<Link
					to="/"
					className="inline-block bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl px-8 py-3 rounded-lg font-semibold text-white transition-colors duration-200"
				>
					Go Back Home
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
