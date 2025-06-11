import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MemberModal from './MemberModal';

// Type definitions for our team data
interface Member {
  id: number;
  name: string;
  position: string;
  image: string;
  instagram?: string;
  linkedin?: string;
  portfolio?: string;
  bio: string;
}

interface TeamData {
  secretary: Member;
  additionalSecretaries: Member[];
  jointSecretaries: Member[];
}

const MembersSection = () => {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [teamData, setTeamData] = useState<TeamData | null>(null);
  const [loading, setLoading] = useState(true);

  // Load team data from JSON file
  useEffect(() => {
    fetch('/assets/data/team.json')
      .then(response => response.json())
      .then(data => {
        setTeamData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading team data:', error);
        setLoading(false);
      });
  }, []);

  // Display loading state while fetching data
  if (loading) {
    return (
      <section className="py-20 bg-photog-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-photog-white">Loading team information...</p>
        </div>
      </section>
    );
  }

  // If data failed to load
  if (!teamData) {
    return (
      <section className="py-20 bg-photog-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-photog-white">Unable to load team information. Please try again later.</p>
        </div>
      </section>
    );
  }

  const { secretary, additionalSecretaries, jointSecretaries } = teamData;
  const allLeadership = [secretary, ...additionalSecretaries, ...jointSecretaries];

  return (
    <section className="py-20 bg-photog-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Team</span>
          </h2>
          <p className="text-photog-white/70 text-lg max-w-2xl mx-auto">
            Meet the passionate photographers who lead PHOTOG and drive our creative vision forward.
          </p>
        </div>

        {/* Secretary */}
        <div className="mb-16 animate-slide-up">
          <h3 className="text-2xl font-bold text-center mb-8 text-photog-gold">Secretary</h3>
          <div className="flex justify-center">
            <div
              className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-8 max-w-md cursor-pointer hover-lift group"
              onClick={() => setSelectedMember(secretary)}
            >
              <div className="text-center">
                <img
                  src={secretary.image}
                  alt={secretary.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-photog-gold/20 group-hover:border-photog-gold/60 transition-all duration-300"
                />
                <h4 className="text-xl font-semibold text-photog-white mb-2">{secretary.name}</h4>
                <p className="text-photog-gold font-medium mb-3">{secretary.position}</p>
                <p className="text-photog-white/70 text-sm">{secretary.bio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Secretaries */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.2s'}}>
          <h3 className="text-2xl font-bold text-center mb-8 text-photog-gold">Additional Secretaries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {additionalSecretaries.map((member) => (
              <div
                key={member.id}
                className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-6 cursor-pointer hover-lift group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-photog-gold/20 group-hover:border-photog-gold/60 transition-all duration-300"
                  />
                  <h4 className="text-lg font-semibold text-photog-white mb-1">{member.name}</h4>
                  <p className="text-photog-gold font-medium mb-2">{member.position}</p>
                  <p className="text-photog-white/70 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Joint Secretaries */}
        <div className="mb-16 animate-fade-in" style={{animationDelay: '0.4s'}}>
          <h3 className="text-2xl font-bold text-center mb-8 text-photog-gold">Joint Secretaries</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {jointSecretaries.map((member) => (
              <div
                key={member.id}
                className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-6 cursor-pointer hover-lift group"
                onClick={() => setSelectedMember(member)}
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-2 border-photog-gold/20 group-hover:border-photog-gold/60 transition-all duration-300"
                  />
                  <h4 className="text-base font-semibold text-photog-white mb-1">{member.name}</h4>
                  <p className="text-photog-gold font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-photog-white/70 text-xs">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Members Button */}
        <div className="text-center animate-fade-in" style={{animationDelay: '0.6s'}}>
          <Link
            to="/members"
            className="inline-flex items-center bg-gradient-to-r from-photog-gold to-photog-gold-light text-photog-black font-semibold px-8 py-4 rounded-full hover:shadow-2xl hover:shadow-photog-gold/25 transition-all duration-300 transform hover:scale-105"
          >
            View All Members
          </Link>
        </div>
      </div>

      {/* Member Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </section>
  );
};

export default MembersSection;
