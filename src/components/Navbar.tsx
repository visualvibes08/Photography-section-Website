import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Announcements', path: '/announcements' },
    { name: 'Members', path: '/members' },
    { name: 'Drishya', path: '/drishya' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-photog-black/90 backdrop-blur-lg py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="relative group">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="/assets/logo.png" 
                  alt="PHOTOG Logo" 
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                />
              </div>
            </div>
            <span className="ml-3 text-xl font-bold text-white">PHOTOG</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-photog-gold'
                    : 'text-white hover:text-photog-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/photog.iitr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-white hover:text-photog-gold transition-colors duration-300"
            >
              Instagram
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-photog-black/95 backdrop-blur-lg">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`block py-2 text-base font-medium ${
                  isActive(link.path)
                    ? 'text-photog-gold'
                    : 'text-white hover:text-photog-gold'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/photog.iitr/"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 text-base font-medium text-white hover:text-photog-gold"
            >
              Instagram
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
