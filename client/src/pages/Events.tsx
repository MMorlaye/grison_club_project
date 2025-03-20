import React from 'react';
import { Calendar } from 'lucide-react';

const Events = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Événements</h1>
          <p className="mt-4 text-xl">
            Découvrez nos prochains événements et activités.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center py-12">
          <Calendar className="mx-auto h-12 w-12 text-emerald-800 mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Aucun événement à venir pour le moment
          </h2>
          <p className="text-gray-600">
            Revenez bientôt pour découvrir nos prochains événements !
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;