
import { Search, Calendar, Shield } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        How It Works
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            1. Search & Browse
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Find the perfect hospitality professional for your event by browsing categories or searching specific services.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calendar className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            2. Book & Schedule
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Choose your preferred professional, select dates and times, and customize your service requirements.
          </p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            3. Enjoy & Pay Securely
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Enjoy your perfectly executed event and pay securely through our platform with full protection guarantee.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksSection;
