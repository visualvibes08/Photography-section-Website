
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-photog-darker border-t border-photog-gray/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-photog-gold to-photog-gold-light rounded-lg flex items-center justify-center">
                <span className="text-photog-black font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-bold gradient-text">PHOTOG IITR</span>
            </div>
            <p className="text-photog-white/70 text-sm leading-relaxed">
              Official Photography Society of IIT Roorkee, capturing moments and creating memories through the lens of creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-photog-white">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300">
                Home
              </Link>
              <Link to="/announcements" className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300">
                Announcements
              </Link>
              <Link to="/drishya" className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300">
                Drishya
              </Link>
              <Link to="/members" className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300">
                All Members
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-photog-white">Connect With Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-photog-white/70">Email:</span>
                <a
                  href="mailto:photog@iitr.ac.in"
                  className="text-photog-gold hover:text-photog-gold-light transition-colors duration-300"
                >
                  photog@iitr.ac.in
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <a
                  href="https://instagram.com/photog_iitr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com/company/photog-iitr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-photog-white/70 hover:text-photog-gold transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-photog-gray/20 text-center">
          <p className="text-photog-white/50 text-sm">
            © 2024 PHOTOG IITR. All rights reserved. Made with ❤️ by the PHOTOG team.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
