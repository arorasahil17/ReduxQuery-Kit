import FeatureCard from "../components/ui/FeatureCard";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center py-10">
      <header className="w-full max-w-7xl text-center py-10">
        <h1 className="text-5xl font-bold text-indigo-600 mb-4">
          Welcome to ReduxQuery Kit
        </h1>
        <p className="text-lg text-gray-700">
          Your all-in-one React template with Vite, TypeScript, Tailwind CSS,
          Redux Toolkit, and React Query.
        </p>
      </header>

      <main className="w-full max-w-5xl mt-8 px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FeatureCard
            title="Fast and Scalable"
            description="Built with Vite for blazing-fast development and optimized production builds."
            icon="🚀"
          />
          <FeatureCard
            title="State Management Simplified"
            description="Integrated with Redux Toolkit to manage your application state seamlessly."
            icon="📦"
          />
          <FeatureCard
            title="Data Fetching Made Easy"
            description="Utilize React Query for efficient server state management and fetching APIs."
            icon="🔍"
          />
          <FeatureCard
            title="Modern Design"
            description="Tailwind CSS makes styling effortless, providing a beautiful and responsive UI."
            icon="🎨"
          />
        </section>
      </main>

      <footer className="fixed bottom-0 w-full text-center  py-6 mt-12  text-indigo-600">
        <p>
          &copy; {new Date().getFullYear()} ReduxQuery Kit. Built for developers
          by developers.
        </p>
      </footer>
    </div>
  );
};

export default Home;
