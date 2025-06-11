import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToContent = () => {
    const nextSection = document.getElementById('photo-of-week');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-photog-black via-photog-darker to-photog-dark"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-photog-gold/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-photog-blue/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          {/* Logo */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img 
              src="/assets/logo.png" 
              alt="PHOTOG Logo" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">PHOTOG</span>
            <br />
            <span className="text-photog-white text-4xl md:text-6xl font-light">IIT-Roorkee</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-photog-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Official Photography Society of IIT Roorkee
            <br />
            <span className="text-photog-gold font-medium">Capturing moments, Creating memories</span>
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToContent}
            className="group inline-flex items-center space-x-3 bg-gradient-to-r from-photog-gold to-photog-gold-light text-photog-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-photog-gold/25 transition-all duration-300 transform hover:scale-105"
          >
            <span>Explore Our Work</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-photog-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-photog-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
