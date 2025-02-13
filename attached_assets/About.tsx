import React from 'react';
import { Users, Target, History } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">À propos du Grison Club</h1>
          <p className="mt-4 text-xl">
            Une association engagée dans l'éducation et le développement durable depuis plus de 20 ans.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-emerald-50 p-6 rounded-lg">
            <Target className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Mission</h3>
            <p className="text-gray-600">
              Promouvoir l'éducation, la culture et le développement durable à travers nos différents clubs et activités.
            </p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg">
            <Users className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Vision</h3>
            <p className="text-gray-600">
              Créer une communauté dynamique et engagée, contribuant activement à un avenir plus durable et solidaire.
            </p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-lg">
            <History className="h-12 w-12 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Notre Histoire</h3>
            <p className="text-gray-600">
              Fondé il y a plus de 20 ans, le Grison Club n'a cessé d'évoluer et de s'adapter aux besoins de ses membres.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Éducation</h3>
              <p className="text-gray-600">
                Nous croyons en l'apprentissage continu et le partage des connaissances.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Durabilité</h3>
              <p className="text-gray-600">
                Nous nous engageons pour un avenir plus durable et respectueux de l'environnement.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Solidarité</h3>
              <p className="text-gray-600">
                Nous favorisons l'entraide et le soutien mutuel au sein de notre communauté.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                Nous encourageons les nouvelles idées et les approches créatives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;