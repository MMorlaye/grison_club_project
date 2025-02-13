import React from 'react';
import { Camera, Heart, Share2 } from 'lucide-react';

const Gallery = () => {
  const activities = [
    {
      id: 1,
      title: "Journée de sensibilisation environnementale",
      date: "Mars 2024",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Sensibilisation des jeunes à la protection de l'environnement"
    },
    {
      id: 2,
      title: "Collecte de fonds annuelle",
      date: "Février 2024",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Soirée de gala pour soutenir nos projets éducatifs"
    },
    {
      id: 3,
      title: "Atelier intergénérationnel",
      date: "Janvier 2024",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Échange de savoirs entre seniors et jeunes"
    },
    {
      id: 4,
      title: "Action solidaire",
      date: "Décembre 2023",
      image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Distribution de repas aux personnes dans le besoin"
    },
    {
      id: 5,
      title: "Conférence sur le développement durable",
      date: "Novembre 2023",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Experts et membres partagent leurs connaissances"
    },
    {
      id: 6,
      title: "Projet jeunesse",
      date: "Octobre 2023",
      image: "https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Accompagnement des jeunes dans leurs projets"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Galerie d'activités</h1>
          <p className="mt-4 text-xl">
            Découvrez nos actions et événements en images
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
              <div className="relative">
                <img 
                  src={activity.image} 
                  alt={activity.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-emerald-800 text-white px-3 py-1 rounded-full text-sm">
                  {activity.date}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
                <p className="text-gray-600 mb-4">{activity.description}</p>
                <div className="flex justify-between items-center">
                  <button className="flex items-center text-emerald-800 hover:text-emerald-600">
                    <Heart className="h-5 w-5 mr-1" />
                    J'aime
                  </button>
                  <button className="flex items-center text-emerald-800 hover:text-emerald-600">
                    <Share2 className="h-5 w-5 mr-1" />
                    Partager
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
