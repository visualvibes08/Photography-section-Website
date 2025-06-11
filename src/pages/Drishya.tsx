import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Type definitions for our Drishya data
interface DrishyaStat {
  value: string;
  label: string;
}

interface DrishyaData {
  stats: DrishyaStat[];
  description: string;
  events: any[];
  gallery: string[];
}

const Drishya = () => {
  const [drishyaData, setDrishyaData] = useState<DrishyaData | null>(null);

  // Load Drishya data from JSON file
  useEffect(() => {
    fetch('/assets/data/drishya.json')
      .then(response => response.json())
      .then(data => setDrishyaData(data))
      .catch(error => console.error('Error loading Drishya data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-photog-black">
      <Navbar />
      
      {/* Coming Soon Section */}
      <section className="pt-32 pb-32 bg-photog-dark relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-photog-black via-photog-dark to-photog-black"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: `url('/assets/photos/drishya-bg.jpg')`, 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-9xl font-bold mb-8">
              <span className="gradient-text">DRISHYA</span>
            </h1>
            
            <div className="relative py-16">
              <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-photog-gold/30 to-transparent"></div>
              
              <h2 className="text-4xl md:text-6xl font-bold mb-6 inline-block px-8 bg-photog-black relative">
                Coming Soon
              </h2>
            </div>
            
            <p className="text-xl md:text-2xl text-photog-white/70 mt-8 mb-12 max-w-3xl mx-auto leading-relaxed">
              Our annual photography festival is being prepared with exciting new features.
              <br />Stay tuned for updates!
            </p>
            
            {drishyaData && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16">
                {drishyaData.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-photog-gold mb-2">{stat.value}</div>
                    <div className="text-photog-white/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Drishya;
