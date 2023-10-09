import { Link } from "react-router-dom";

const ErrorRoute = () => {
    return (
        <div className="bg-gray-100 h-screen flex items-center justify-center">
            <div className="max-w-md mx-auto p-4">
                <div className="text-center">
                    <h1 className="text-4xl font-semibold text-gray-800">404</h1>
                    <p className="mt-2 text-lg text-gray-600">Page Not Found</p>
                </div>
                <div className="mt-6 flex justify-center">
                    <Link to="/" className="text-[var(--primary-color)] text-center hover:underline">Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;