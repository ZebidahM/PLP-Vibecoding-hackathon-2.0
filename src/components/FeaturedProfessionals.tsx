
import { Star, MapPin, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Professional {
  id: number;
  name: string;
  category: string;
  rating: number;
  reviews: number;
  location: string;
  price: string;
  image: string;
  specialties: string[];
  verified: boolean;
  bio: string;
  experience: string;
  availability: string[];
  portfolio: string[];
  contact: {
    phone: string;
    email: string;
  };
}

interface FeaturedProfessionalsProps {
  professionals: Professional[];
  onProfileView: (professional: Professional) => void;
  searchQuery: string;
  selectedCategory: string;
}

const FeaturedProfessionals = ({ professionals, onProfileView, searchQuery, selectedCategory }: FeaturedProfessionalsProps) => {
  const getSectionTitle = () => {
    if (searchQuery && selectedCategory !== 'all') {
      return `Search Results for "${searchQuery}" in ${selectedCategory.replace('-', ' ')}`;
    } else if (searchQuery) {
      return `Search Results for "${searchQuery}"`;
    } else if (selectedCategory !== 'all') {
      return `${selectedCategory.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())} Professionals`;
    } else {
      return 'Featured Professionals';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            {getSectionTitle()}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Showing {professionals.length} professional{professionals.length !== 1 ? 's' : ''}
          </p>
        </div>
        <Button variant="outline">View All</Button>
      </div>
      
      {professionals.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-xl text-gray-500 dark:text-gray-400 mb-4">
            No professionals found matching your criteria
          </p>
          <p className="text-gray-400 dark:text-gray-500">
            Try adjusting your search terms or category selection
          </p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionals.map((provider) => (
            <Card 
              key={provider.id} 
              className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => onProfileView(provider)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img 
                    src={provider.image} 
                    alt={provider.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {provider.verified && (
                    <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                      {provider.name}
                    </h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                        {provider.rating} ({provider.reviews})
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-2">{provider.category}</p>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {provider.location}
                  </div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                      {provider.price}
                    </span>
                    <Button size="sm" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                      View Profile
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeaturedProfessionals;
