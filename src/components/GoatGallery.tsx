import React, { useState, useEffect } from 'react';

// Type definitions for our gallery data
interface Photo {
  id: number;
  image: string;
  genre: string;
  photographer: string;
  description: string;
  settings: string;
}

interface GalleryConfig {
  sectionTitle: string;
  genres: string[];
  photos: Photo[];
}

const GoatGallery = () => {
  const [activeGenre, setActiveGenre] = useState('All');
  const [galleryConfig, setGalleryConfig] = useState<GalleryConfig>({
    sectionTitle: "Top Shots of the Month",
    genres: ['All'],
    photos: []
  });

  // Load gallery configuration from JSON file
  useEffect(() => {
    fetch('/assets/data/gallery_config.json')
      .then(response => response.json())
      .then(data => setGalleryConfig(data))
      .catch(error => console.error('Error loading gallery configuration:', error));
  }, []);

  const filteredPhotos = activeGenre === 'All' 
    ? galleryConfig.photos 
    : galleryConfig.photos.filter(photo => photo.genre === activeGenre);

  return (
    <section className="py-20 bg-photog-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{galleryConfig.sectionTitle}</span>
          </h2>
          <p className="text-photog-white/70 text-lg max-w-2xl mx-auto">
            Our greatest of all time photographs - the cream of the crop from our talented photographers.
          </p>
        </div>

        {/* Genre Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
          {galleryConfig.genres.map((genre) => (
            <button
              key={genre}
              onClick={() => setActiveGenre(genre)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeGenre === genre
                  ? 'bg-gradient-to-r from-photog-gold to-photog-gold-light text-photog-black'
                  : 'bg-photog-gray/20 text-photog-white hover:bg-photog-gray/40 border border-photog-gray-light/20'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl hover-lift animate-fade-in"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <img
                src={photo.image}
                alt={photo.description}
                className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 photo-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs uppercase tracking-wide text-photog-gold font-semibold">
                        {photo.genre}
                      </span>
                      <span className="text-xs text-photog-white/80">
                        {photo.settings}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold">{photo.description}</h3>
                    <p className="text-sm text-photog-white/80">by {photo.photographer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-photog-gray/20 border border-photog-gray-light/20 text-photog-white px-8 py-3 rounded-full hover:bg-photog-gray/40 transition-all duration-300">
            Load More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default GoatGallery;
