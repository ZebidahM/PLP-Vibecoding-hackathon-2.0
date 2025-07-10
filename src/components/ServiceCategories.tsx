
import { Users, PartyPopper, Utensils } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface ServiceCategoriesProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ServiceCategories = ({ selectedCategory, setSelectedCategory }: ServiceCategoriesProps) => {
  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Users, color: 'bg-blue-500' },
    { id: 'event-planners', name: 'Event Planners', icon: PartyPopper, color: 'bg-purple-500' },
    { id: 'chefs', name: 'Chefs', icon: Utensils, color: 'bg-green-500' },
    { id: 'caterers', name: 'Caterers', icon: Utensils, color: 'bg-orange-500' },
    { id: 'ushers', name: 'Ushers', icon: Users, color: 'bg-pink-500' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Browse by Category
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {serviceCategories.map((category) => {
          const IconComponent = category.icon;
          return (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                selectedCategory === category.id ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {category.name}
                </h3>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceCategories;
