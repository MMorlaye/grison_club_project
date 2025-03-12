import React from 'react';
import { useRoute, Link } from 'wouter';
import { Calendar, ArrowLeft } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
  content?: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Journée de sensibilisation environnementale",
    date: "Mars 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Sensibilisation des jeunes à la protection de l'environnement",
    slug: "journee-sensibilisation-environnementale",
    content: `Le Grison Club a organisé une journée de sensibilisation environnementale qui a réuni plus de 100 jeunes de la région. 

Au programme de cette journée enrichissante :

- Ateliers pratiques sur le tri des déchets
- Conférences sur les enjeux climatiques
- Activités de nettoyage collectif
- Plantation d'arbres dans le parc municipal

Cette initiative s'inscrit dans notre engagement continu pour la protection de l'environnement et l'éducation des jeunes aux enjeux écologiques.`
  },
  {
    id: 2,
    title: "Collecte de fonds annuelle",
    date: "Février 2024",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Soirée de gala pour soutenir nos projets éducatifs",
    slug: "collecte-fonds-annuelle",
    content: `Notre collecte de fonds annuelle a été un véritable succès ! 

La soirée a permis de :
- Récolter des fonds pour nos projets éducatifs
- Présenter nos réalisations de l'année
- Rencontrer nos partenaires et soutiens
- Partager notre vision pour l'avenir

Nous remercions chaleureusement tous les participants et donateurs qui rendent nos actions possibles.`
  },
  {
    id: 3,
    title: "Atelier intergénérationnel",
    date: "Janvier 2024",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Échange de savoirs entre seniors et jeunes",
    slug: "atelier-intergenerationnel",
    content: `L'atelier intergénérationnel a créé des ponts entre les générations.

Les participants ont pu :
- Échanger des savoirs traditionnels
- Partager des expériences de vie
- Apprendre les uns des autres
- Créer des liens durables

Une belle démonstration de l'importance du dialogue entre générations.`
  }
];

const NewsDetail = () => {
  const [, params] = useRoute('/news/:slug');
  const newsItem = newsItems.find(news => news.slug === params?.slug);

  if (!newsItem) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">Article non trouvé</h1>
          <Link href="/news">
            <a className="text-emerald-800 hover:text-emerald-600">
              Retour aux actualités
            </a>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/news">
          <a className="inline-flex items-center text-emerald-800 hover:text-emerald-600 mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux actualités
          </a>
        </Link>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8">
            <div className="flex items-center text-sm text-emerald-800 mb-4">
              <Calendar className="h-4 w-4 mr-2" />
              {newsItem.date}
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              {newsItem.title}
            </h1>
            <div className="prose max-w-none">
              {newsItem.content?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-gray-600">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
