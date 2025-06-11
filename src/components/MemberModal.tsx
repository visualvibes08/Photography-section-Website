
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface Member {
  id: number;
  name: string;
  position: string;
  image: string;
  instagram: string;
  linkedin?: string;
  portfolio?: string;
  bio: string;
}

interface MemberModalProps {
  member: Member;
  isOpen: boolean;
  onClose: () => void;
}

const MemberModal: React.FC<MemberModalProps> = ({ member, isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-photog-gray border border-photog-gray-light/20 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-photog-white text-center">Member Details</DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-photog-gold/20"
          />
          
          <div>
            <h3 className="text-xl font-semibold text-photog-white">{member.name}</h3>
            <p className="text-photog-gold font-medium">{member.position}</p>
          </div>
          
          <p className="text-photog-white/80 text-sm leading-relaxed">{member.bio}</p>
          
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-photog-white/70 text-sm">Instagram:</span>
              <a
                href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-photog-gold hover:text-photog-gold-light transition-colors duration-300"
              >
                {member.instagram}
              </a>
            </div>
            
            {member.linkedin && (
              <div className="flex items-center justify-center space-x-2">
                <span className="text-photog-white/70 text-sm">LinkedIn:</span>
                <a
                  href={`https://${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-photog-gold hover:text-photog-gold-light transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </div>
            )}
            
            {member.portfolio && (
              <div className="flex items-center justify-center space-x-2">
                <span className="text-photog-white/70 text-sm">Portfolio:</span>
                <a
                  href={`https://${member.portfolio}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-photog-gold hover:text-photog-gold-light transition-colors duration-300"
                >
                  View Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberModal;
