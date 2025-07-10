
import React, { useState } from 'react';
import { Calendar, Clock, Users, MapPin, CreditCard, ArrowLeft, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';

interface BookingInterfaceProps {
  professional: {
    id: number;
    name: string;
    category: string;
    price: string;
    image: string;
  };
  onBack: () => void;
  onBookingComplete: () => void;
}

const BookingInterface: React.FC<BookingInterfaceProps> = ({ 
  professional, 
  onBack, 
  onBookingComplete 
}) => {
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    duration: '2',
    guests: '10',
    location: '',
    eventType: '',
    specialRequests: '',
    contactName: '',
    contactEmail: '',
    contactPhone: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would typically send the booking data to your backend
    console.log('Booking submitted:', bookingData);
    onBookingComplete();
  };

  const calculatePrice = () => {
    const basePrice = parseInt(professional.price.replace(/[^0-9]/g, ''));
    const duration = parseInt(bookingData.duration);
    return basePrice * duration;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button variant="ghost" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          <div className="flex items-center space-x-2">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step <= currentStep
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400'
                }`}
              >
                {step < currentStep ? <Check className="h-4 w-4" /> : step}
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>
                  {currentStep === 1 && "Event Details"}
                  {currentStep === 2 && "Contact Information"}
                  {currentStep === 3 && "Payment & Confirmation"}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Step 1: Event Details */}
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="date">Event Date</Label>
                        <Input
                          id="date"
                          type="date"
                          value={bookingData.date}
                          onChange={(e) => handleInputChange('date', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="time">Event Time</Label>
                        <Input
                          id="time"
                          type="time"
                          value={bookingData.time}
                          onChange={(e) => handleInputChange('time', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="duration">Duration (hours)</Label>
                        <Input
                          id="duration"
                          type="number"
                          min="1"
                          value={bookingData.duration}
                          onChange={(e) => handleInputChange('duration', e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="guests">Number of Guests</Label>
                        <Input
                          id="guests"
                          type="number"
                          min="1"
                          value={bookingData.guests}
                          onChange={(e) => handleInputChange('guests', e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="location">Event Location</Label>
                      <Input
                        id="location"
                        placeholder="Enter event address"
                        value={bookingData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="eventType">Event Type</Label>
                      <Input
                        id="eventType"
                        placeholder="e.g., Wedding, Birthday Party, Corporate Event"
                        value={bookingData.eventType}
                        onChange={(e) => handleInputChange('eventType', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="specialRequests">Special Requests</Label>
                      <textarea
                        id="specialRequests"
                        className="w-full p-3 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800"
                        rows={3}
                        placeholder="Any special dietary requirements, themes, or requests..."
                        value={bookingData.specialRequests}
                        onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Contact Information */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="contactName">Full Name</Label>
                      <Input
                        id="contactName"
                        placeholder="Your full name"
                        value={bookingData.contactName}
                        onChange={(e) => handleInputChange('contactName', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactEmail">Email Address</Label>
                      <Input
                        id="contactEmail"
                        type="email"
                        placeholder="your.email@example.com"
                        value={bookingData.contactEmail}
                        onChange={(e) => handleInputChange('contactEmail', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="contactPhone">Phone Number</Label>
                      <Input
                        id="contactPhone"
                        type="tel"
                        placeholder="Your phone number"
                        value={bookingData.contactPhone}
                        onChange={(e) => handleInputChange('contactPhone', e.target.value)}
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Payment & Confirmation */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Booking Summary</h3>
                      <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                        <div className="flex justify-between">
                          <span>Date & Time:</span>
                          <span>{bookingData.date} at {bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Duration:</span>
                          <span>{bookingData.duration} hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Guests:</span>
                          <span>{bookingData.guests} people</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Location:</span>
                          <span>{bookingData.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        A 25% deposit is required to secure your booking.
                      </p>
                      <Button
                        onClick={handleSubmit}
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Proceed to Payment
                      </Button>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <Button variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {currentStep < totalSteps && (
                    <Button 
                      onClick={nextStep}
                      className="ml-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                    >
                      Next
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Summary */}
          <div>
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <img 
                    src={professional.image} 
                    alt={professional.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {professional.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {professional.category}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{bookingData.date || 'Select date'}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{bookingData.time || 'Select time'}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{bookingData.guests} guests</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-gray-500" />
                    <span>{bookingData.location || 'Enter location'}</span>
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {professional.price} × {bookingData.duration}h
                    </span>
                    <span className="font-semibold">${calculatePrice()}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Service fee</span>
                    <span className="font-semibold">$25</span>
                  </div>
                  <div className="border-t pt-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold">Total</span>
                      <span className="font-bold text-lg text-blue-600 dark:text-blue-400">
                        ${calculatePrice() + 25}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingInterface;
