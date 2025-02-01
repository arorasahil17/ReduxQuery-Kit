interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl flex items-center space-x-4 hover:shadow-xl transition-all duration-300">
      <div className="text-4xl">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-indigo-600">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
