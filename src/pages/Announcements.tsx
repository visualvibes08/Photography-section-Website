
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Announcements = () => {
  // This will be manually updated with new announcements
  const announcements = [
    {
      id: 1,
      title: "Drishya 2024 Registration Open",
      date: "November 1, 2024",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      content: "Registration for our annual photography festival Drishya 2024 is now open. Join us for three days of workshops, competitions, and exhibitions."
    },
    {
      id: 2,
      title: "Winter Photography Workshop",
      date: "October 28, 2024",
      content: "Learn the art of winter photography with our expert photographers. Covering landscape, portrait, and street photography techniques."
    },
    {
      id: 3,
      title: "New Member Recruitment Drive",
      date: "October 25, 2024",
      content: "PHOTOG is looking for passionate photographers to join our team. Applications are now open for all years."
    },
    {
      id: 4,
      title: "Monthly Photo Walk - November",
      date: "October 20, 2024",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      content: "Join us for our monthly photo walk exploring the beautiful locations around IIT Roorkee campus and the city."
    },
    {
      id: 5,
      title: "Guest Lecture by Renowned Photographer",
      date: "October 15, 2024",
      content: "We're excited to host a guest lecture by award-winning photographer Rajesh Vora on 'The Art of Visual Storytelling'."
    }
  ];

  return (
    <div className="min-h-screen bg-photog-black">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-photog-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Announcements</span>
            </h1>
            <p className="text-photog-white/70 text-lg max-w-2xl mx-auto">
              Stay updated with the latest news, events, and opportunities from PHOTOG IITR.
            </p>
          </div>
        </div>
      </section>

      {/* Announcements List */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {announcements.map((announcement, index) => (
              <div
                key={announcement.id}
                className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl overflow-hidden hover-lift animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {announcement.image && (
                  <div className="h-48 overflow-hidden">
                    <img
                      src={announcement.image}
                      alt={announcement.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl md:text-2xl font-bold text-photog-white">
                      {announcement.title}
                    </h2>
                    <span className="text-photog-gold text-sm font-medium">
                      {announcement.date}
                    </span>
                  </div>
                  <p className="text-photog-white/80 leading-relaxed">
                    {announcement.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Announcements;
