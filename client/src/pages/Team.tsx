import React, { useState } from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  realImage: string;
  animatedImage?: string; // L'image du personnage animé sera ajoutée plus tard
}

const teamMembers: TeamMember[] = [
  {
    name: "Issa Bailo DIALLO",
    role: "Secrétaire Générale",
    description: "Engagement et Rigueur",
    realImage: "/attached_assets/Issa_Bailo_Diallo.jpg"
  },
  {
    name: "Loubatou DIALLO",
    role: "Responsable Communication",
    description: "Créativité et Innovation",
    realImage: "/attached_assets/Louabatou Diallo.jpg"
  },
  {
    name: "Alpha Yaya DIAOUNE",
    role: "Responsable Planning",
    description: "Organisation et Efficacité",
    realImage: "/attached_assets/ALpha_Yaya_Diaoune.jpg"
  },
  {
    name: "Boubacar Poredaka DIALLO",
    role: "Responsable des Affaires Extérieures",
    description: "Diplomatie et Vision",
    realImage: "/attached_assets/Boubacar_Poredaka_Diallo.png"
  },
  {
    name: "Kana BARRY",
    role: "Responsable Trésorerie",
    description: "Précision et Fiabilité",
    realImage: "/attached_assets/Kana_Barry.png"
  }
];

const Team: React.FC = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Section Présidente */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/attached_assets/Mariama_Delo_Bah.jpg"
                alt="Mariama Djelo BAH"
                className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Mariama Djelo BAH</h1>
              <h2 className="text-xl text-emerald-600 mb-6">Présidente</h2>
              <div className="prose prose-emerald">
                <p className="text-gray-600 leading-relaxed">
                  En tant que Présidente du Grison Club, je suis fière de diriger une équipe dynamique et engagée qui œuvre pour faire une différence positive dans notre communauté. Notre mission est de créer des opportunités et d'inspirer le changement à travers nos diverses initiatives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Équipe */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Notre Équipe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="relative aspect-w-4 aspect-h-3">
                  <img
                    src={member.realImage}
                    alt={member.name}
                    className={`w-full h-64 object-cover transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-300 ${
                      hoveredMember === index ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    {/* Placeholder pour l'image animée - à remplacer */}
                    <div className="w-full h-64 bg-emerald-100 flex items-center justify-center">
                      <span className="text-emerald-600">Image animée à venir</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 mt-1">{member.role}</p>
                  <p className="text-gray-600 mt-2">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;