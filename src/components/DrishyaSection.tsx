import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Type definitions for our Drishya data
interface DrishyaStat {
  value: string;
  label: string;
}

interface DrishyaData {
  stats: DrishyaStat[];
  description: string;
}

const DrishyaSection = () => {
  const [drishyaData, setDrishyaData] = useState<DrishyaData>({
    stats: [
      { value: "2000+", label: "Footfall" },
      { value: "50+", label: "Competitions" },
      { value: "15+", label: "Genres" },
      { value: "3", label: "Days of Exploration" }
    ],
    description: "Loading..."
  });

  // Load Drishya data from JSON file
  useEffect(() => {
    fetch('/assets/data/drishya.json')
      .then(response => response.json())
      .then(data => {
        setDrishyaData({
          stats: data.stats,
          description: data.description
        });
      })
      .catch(error => console.error('Error loading Drishya data:', error));
  }, []);

  return (
    <section className="py-20 bg-photog-black relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-photog-black via-photog-dark to-photog-black"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url('/assets/photos/drishya-bg.jpg')`, 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="gradient-text">DRISHYA</span>
          </h2>
          <p className="text-xl md:text-2xl text-photog-white/80 mb-6 max-w-3xl mx-auto leading-relaxed">
            Our Annual Photography Festival
          </p>
          <p className="text-lg text-photog-white/70 mb-12 max-w-2xl mx-auto">
            {drishyaData.description}
          </p>

          {/* Event stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {drishyaData.stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-6 hover-lift"
              >
                <div className="text-photog-gold text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-photog-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          <Link
            to="/drishya"
            className="inline-flex items-center bg-gradient-to-r from-photog-gold to-photog-gold-light text-photog-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-photog-gold/25 transition-all duration-300 transform hover:scale-105"
          >
            Explore Drishya
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DrishyaSection;
