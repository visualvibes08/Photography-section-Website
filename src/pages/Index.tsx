
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PhotoOfTheWeek from '@/components/PhotoOfTheWeek';
import GoatGallery from '@/components/GoatGallery';
import MembersSection from '@/components/MembersSection';
import DrishyaSection from '@/components/DrishyaSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-photog-black">
      <Navbar />
      <HeroSection />
      <PhotoOfTheWeek />
      <GoatGallery />
      <MembersSection />
      <DrishyaSection />
      <Footer />
    </div>
  );
};

export default Index;
