
import { Button } from '@/components/ui/button';

interface CallToActionSectionProps {
  onGetStarted: () => void;
  onLearnMore: () => void;
}

const CallToActionSection = ({ onGetStarted, onLearnMore }: CallToActionSectionProps) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 py-16">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Create Your Perfect Event?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Join thousands of satisfied clients who trust HostIt for their hospitality needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            onClick={onGetStarted}
          >
            Get Started Today
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={onLearnMore}
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
