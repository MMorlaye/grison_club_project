import React from 'react';
import { Check, Users, Shield, Star } from 'lucide-react';
import { useLocation } from 'wouter';
import { Button } from "@/components/ui/button";

const Membership = () => {
  const [, setLocation] = useLocation();

  const features = [
    "Accès à tous les événements du club",
    "Participation aux forums et discussions",
    "Ressources éducatives exclusives",
    "Réductions sur les activités payantes",
    "Newsletter mensuelle",
    "Badge de membre"
  ];

  const handleJoin = () => {
    setLocation('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Devenir Membre</h1>
          <p className="mt-4 text-xl">
            Rejoignez notre communauté et participez à nos activités
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-emerald-500">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Membre Standard</h3>
            <p className="mt-2 text-gray-500">
              Pour les particuliers souhaitant s'engager dans notre communauté
            </p>
            <div className="mt-6">
              <div className="text-2xl font-bold text-gray-900">20€/an</div>
            </div>
            <Button
              onClick={handleJoin}
              className="mt-8 w-full"
            >
              Rejoindre
            </Button>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-emerald-600 transform scale-105">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-600 text-white mb-4">
              <Star className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Membre Premium</h3>
            <p className="mt-2 text-gray-500">
              Accès privilégié à tous nos services et événements
            </p>
            <div className="mt-6">
              <div className="text-2xl font-bold text-gray-900">50€/an</div>
            </div>
            <Button
              onClick={handleJoin}
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700"
            >
              Devenir Premium
            </Button>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-emerald-500">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-500 text-white mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">Membre Entreprise</h3>
            <p className="mt-2 text-gray-500">
              Pour les organisations souhaitant soutenir notre mission
            </p>
            <div className="mt-6">
              <div className="text-2xl font-bold text-gray-900">Sur devis</div>
            </div>
            <Button
              onClick={handleJoin}
              className="mt-8 w-full"
            >
              Nous contacter
            </Button>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center mb-8">Avantages des membres</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Check className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
