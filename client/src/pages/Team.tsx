import React from 'react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  realImage: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Issa Bailo DIALLO",
    role: "Secrétaire Générale",
    description: "Engagement et Rigueur",
    realImage: "/img/team/Issa_Bailo_Diallo.jpg"
  },
  {
    name: "Loubatou DIALLO",
    role: "Responsable Communication",
    description: "Créativité et Innovation",
    realImage: "/img/team/Louabatou Diallo.jpg"
  },
  {
    name: "Alpha Yaya DIAOUNE",
    role: "Responsable Planning",
    description: "Organisation et Efficacité",
    realImage: "/img/team/ALpha_Yaya_Diaoune.jpg"
  },
  {
    name: "Boubacar Poredaka DIALLO",
    role: "Responsable des Affaires Extérieures",
    description: "Diplomatie et Vision",
    realImage: "/img/team/Boubacar_Poredaka_Diallo.png"
  },
  {
    name: "Kana BARRY",
    role: "Responsable Trésorerie",
    description: "Précision et Fiabilité",
    realImage: "/img/team/Kana_Barry.png"
  }
];

const Team: React.FC = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Section Présidente */}
      <div className="bg-emerald-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <img
                src="/img/team/Mariama_Delo_Bah.jpg"
                alt="Mariama Djelo BAH"
                className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto"
                onError={(e) => {
                  console.error('Error loading president image');
                  e.currentTarget.src = 'https://ui-avatars.com/api/?name=Mariama+Djelo+BAH&background=059669&color=fff';
                }}
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
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={member.realImage}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      console.error(`Error loading image for ${member.name}`);
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=059669&color=fff`;
                    }}
                  />
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