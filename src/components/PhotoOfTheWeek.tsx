import React, { useState, useEffect } from 'react';

// Type definition for our photo of the week data
interface PhotoOfTheWeekData {
  image: string;
  photographer: string;
  caption: string;
  week: string;
}

const PhotoOfTheWeek = () => {
  // State to hold the photo data
  const [currentPhoto, setCurrentPhoto] = useState<PhotoOfTheWeekData>({
    image: "/assets/photos/photos_of_the_week/photo1.jpg",
    photographer: "Loading...",
    caption: "Loading...",
    week: "Loading..."
  });

  // Load photo data from JSON file
  useEffect(() => {
    fetch('/assets/data/photo_of_the_week.json')
      .then(response => response.json())
      .then(data => setCurrentPhoto(data))
      .catch(error => console.error('Error loading photo of the week data:', error));
  }, []);

  return (
    <section id="photo-of-week" className="py-20 bg-photog-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Photo of the <span className="gradient-text">Week</span>
          </h2>
          <p className="text-photog-white/70 text-lg max-w-2xl mx-auto">
            Every week, we showcase one exceptional photograph that captures the essence of our artistic vision.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Photo */}
          <div className="lg:col-span-2 animate-slide-up">
            <div className="relative group overflow-hidden rounded-2xl hover-lift">
              <img
                src={currentPhoto.image}
                alt="Photo of the Week"
                className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 photo-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium text-photog-gold mb-1">{currentPhoto.week}</div>
                  <div className="text-lg font-semibold">Photo of the Week</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-8">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm uppercase tracking-wide text-photog-gold font-semibold mb-2">
                    Featured This Week
                  </h3>
                  <div className="text-photog-white/60 text-sm">{currentPhoto.week}</div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-photog-white mb-2">Photographer</h4>
                  <p className="text-photog-gold font-medium">{currentPhoto.photographer}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-photog-white mb-2">Description</h4>
                  <p className="text-photog-white/80 leading-relaxed">{currentPhoto.caption}</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-photog-white/60 text-sm">
                Want to see your work featured here? Join PHOTOG and showcase your talent!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoOfTheWeek;
