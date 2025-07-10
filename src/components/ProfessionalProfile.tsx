
import React from 'react';
import { Star, MapPin, Shield, Calendar, Clock, DollarSign, Phone, Mail, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ProfessionalProfileProps {
  professional: {
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
  };
  onBack: () => void;
  onBookNow: () => void;
}

const ProfessionalProfile: React.FC<ProfessionalProfileProps> = ({ 
  professional, 
  onBack, 
  onBookNow 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Search
        </Button>

        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={professional.image} alt={professional.name} />
                  <AvatarFallback className="text-2xl">
                    {professional.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                    {professional.name}
                  </h1>
                  {professional.verified && (
                    <Badge className="bg-green-500 hover:bg-green-600">
                      <Shield className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>
                
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-3">
                  {professional.category}
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-1 font-semibold">{professional.rating}</span>
                    <span className="ml-1 text-gray-500">({professional.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    {professional.location}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {professional.specialties.map((specialty, index) => (
                    <Badge key={index} variant="secondary">
                      {specialty}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {professional.price}
                  </div>
                  <Button 
                    onClick={onBookNow}
                    className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* About Section */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">About</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{professional.bio}</p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    {professional.experience} of experience
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact & Availability */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Contact & Availability</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">{professional.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-gray-500" />
                  <span className="text-gray-600 dark:text-gray-300">{professional.contact.email}</span>
                </div>
                <div>
                  <p className="font-semibold mb-2 text-gray-900 dark:text-white">Available Days:</p>
                  <div className="flex flex-wrap gap-2">
                    {professional.availability.map((day, index) => (
                      <Badge key={index} variant="outline">{day}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Portfolio */}
        {professional.portfolio.length > 0 && (
          <Card className="mt-8">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Portfolio</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {professional.portfolio.map((image, index) => (
                  <div key={index} className="relative">
                    <img 
                      src={image} 
                      alt={`Portfolio ${index + 1}`}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfessionalProfile;
