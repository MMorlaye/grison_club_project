import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  contact?: {
    email?: string;
    location?: string;
  }
}

const teamMembers: TeamMember[] = [
  {
    name: "Abdelkader BARAKAT",
    role: "Directeur Général",
    description: "Directeur Général de Grison Club",
    image: "/img/team/director.jpg",
    contact: {
      location: "Coyah, République de Guinée"
    }
  },
  {
    name: "Thomas COLETTE",
    role: "Responsable Pôle Recrutement",
    description: "Pragmatique est son credo",
    image: "/img/team/recruitment.jpg"
  },
  {
    name: "Elias TREGUIER",
    role: "Développeur Full Stack",
    description: "Déterminé à gagner",
    image: "/img/team/developer.jpg"
  },
  {
    name: "Dorothée BOUVIGNIES",
    role: "Chargée des relations entreprises",
    description: "Focus sur son travail",
    image: "/img/team/relations.jpg"
  },
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* En-tête */}
      <div className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold">Notre équipe est notre force</h1>
          <p className="mt-4 text-xl">
            Découvrez les personnes qui font de Grison Club une organisation dynamique et engagée.
          </p>
        </div>
      </div>

      {/* Grille des membres de l'équipe */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="aspect-w-3 aspect-h-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=059669&color=fff`;
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-sm text-emerald-600 mt-1">{member.role}</p>
                <p className="text-gray-600 mt-3">{member.description}</p>
                
                {member.contact && (
                  <div className="mt-4 space-y-2">
                    {member.contact.email && (
                      <div className="flex items-center text-gray-500">
                        <Mail className="h-4 w-4 mr-2" />
                        <span>{member.contact.email}</span>
                      </div>
                    )}
                    {member.contact.location && (
                      <div className="flex items-center text-gray-500">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{member.contact.location}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
