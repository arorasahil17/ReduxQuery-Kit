import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-50">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-2xl text-gray-700 mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-lg hover:bg-indigo-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
