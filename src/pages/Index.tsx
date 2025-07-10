
import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServiceCategories from '@/components/ServiceCategories';
import FeaturedProfessionals from '@/components/FeaturedProfessionals';
import StatsSection from '@/components/StatsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import CallToActionSection from '@/components/CallToActionSection';
import Footer from '@/components/Footer';
import ProfessionalProfile from '@/components/ProfessionalProfile';
import BookingInterface from '@/components/BookingInterface';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'home' | 'profile' | 'booking'>('home');
  const [selectedProfessional, setSelectedProfessional] = useState<any>(null);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const featuredProviders = [
    {
      id: 1,
      name: 'Sarah Johnson',
      category: 'Event Planner',
      rating: 4.9,
      reviews: 127,
      location: 'New York, NY',
      price: '$150/hour',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b2e7fe0a?w=400&h=400&q=80',
      specialties: ['Weddings', 'Corporate Events', 'Birthday Parties'],
      verified: true,
      bio: 'With over 8 years of experience in event planning, I specialize in creating unforgettable moments that exceed expectations. From intimate gatherings to grand celebrations, I handle every detail with precision and creativity.',
      experience: '8+ years',
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Saturday'],
      portfolio: [
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=300&q=80'
      ],
      contact: {
        phone: '+1 (555) 123-4567',
        email: 'sarah@eventsbysarah.com'
      }
    },
    {
      id: 2,
      name: 'Chef Marcus Rodriguez',
      category: 'Private Chef',
      rating: 4.8,
      reviews: 89,
      location: 'Los Angeles, CA',
      price: '$200/hour',
      image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91b?w=400&h=400&q=80',
      specialties: ['Fine Dining', 'Italian Cuisine', 'Meal Prep'],
      verified: true,
      bio: 'Award-winning chef with 12 years of culinary expertise. I bring restaurant-quality dining experiences to your home, specializing in contemporary cuisine with a focus on fresh, local ingredients.',
      experience: '12+ years',
      availability: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      portfolio: [
        'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&q=80'
      ],
      contact: {
        phone: '+1 (555) 987-6543',
        email: 'marcus@chefmarcus.com'
      }
    },
    {
      id: 3,
      name: 'Elite Catering Co.',
      category: 'Catering Service',
      rating: 4.7,
      reviews: 203,
      location: 'Chicago, IL',
      price: '$25/person',
      image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&q=80',
      specialties: ['Wedding Catering', 'Corporate Events', 'Buffet Style'],
      verified: true,
      bio: 'Full-service catering company serving Chicago and surrounding areas for over 15 years. We pride ourselves on exceptional food quality, professional service, and attention to detail for events of all sizes.',
      experience: '15+ years',
      availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      portfolio: [
        'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&q=80',
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&q=80'
      ],
      contact: {
        phone: '+1 (555) 456-7890',
        email: 'info@elitecateringco.com'
      }
    }
  ];

  const handleProfileView = (professional: any) => {
    setSelectedProfessional(professional);
    setCurrentView('profile');
  };

  const handleBookingView = () => {
    setCurrentView('booking');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProfessional(null);
  };

  const handleBookingComplete = () => {
    alert('Booking completed successfully!');
    setCurrentView('home');
    setSelectedProfessional(null);
  };

  if (currentView === 'profile' && selectedProfessional) {
    return (
      <ProfessionalProfile
        professional={selectedProfessional}
        onBack={handleBackToHome}
        onBookNow={handleBookingView}
      />
    );
  }

  if (currentView === 'booking' && selectedProfessional) {
    return (
      <BookingInterface
        professional={selectedProfessional}
        onBack={() => setCurrentView('profile')}
        onBookingComplete={handleBookingComplete}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 transition-colors duration-300">
      <Navigation darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ServiceCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <FeaturedProfessionals professionals={featuredProviders} onProfileView={handleProfileView} />
      <StatsSection />
      <HowItWorksSection />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
