import React from 'react';
import { Users, Briefcase, GraduationCap, Heart } from 'lucide-react';

const Clubs = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Nos Clubs Affiliés</h1>
          <p className="mt-4 text-xl">
            Découvrez nos différents clubs et trouvez celui qui vous correspond.
          </p>
        </div>
      </div>

      {/* Clubs List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-emerald-50 p-8 rounded-lg">
            <Users className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Club Jeunesse</h3>
            <p className="text-gray-600 mb-4">
              Pour les jeunes de 15 à 25 ans passionnés par l'environnement et le développement durable.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Activités éducatives</li>
              <li>• Projets environnementaux</li>
              <li>• Rencontres mensuelles</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg">
            <Briefcase className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Club Professionnel</h3>
            <p className="text-gray-600 mb-4">
              Réseau de professionnels engagés dans le développement durable.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Networking</li>
              <li>• Conférences</li>
              <li>• Projets collaboratifs</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg">
            <GraduationCap className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Club Éducation</h3>
            <p className="text-gray-600 mb-4">
              Dédié aux enseignants et éducateurs souhaitant intégrer le développement durable dans leur pratique.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Ressources pédagogiques</li>
              <li>• Formations</li>
              <li>• Échange de pratiques</li>
            </ul>
          </div>

          <div className="bg-emerald-50 p-8 rounded-lg">
            <Heart className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-2xl font-semibold mb-4">Club Seniors</h3>
            <p className="text-gray-600 mb-4">
              Pour les retraités actifs souhaitant partager leur expérience et continuer à apprendre.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li>• Activités sociales</li>
              <li>• Partage d'expérience</li>
              <li>• Projets intergénérationnels</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;
