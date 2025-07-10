
const StatsSection = () => {
  const stats = [
    { label: 'Trusted Professionals', value: '5,000+' },
    { label: 'Events Completed', value: '25,000+' },
    { label: 'Happy Clients', value: '15,000+' },
    { label: 'Cities Covered', value: '50+' }
  ];

  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-white">
              <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
