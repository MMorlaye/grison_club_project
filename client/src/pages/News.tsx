import React from 'react';
import { Link } from 'wouter';
import { Calendar } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  description: string;
  slug: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "Journée de sensibilisation environnementale",
    date: "Mars 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Sensibilisation des jeunes à la protection de l'environnement. Une journée riche en apprentissages et en actions concrètes pour notre planète.",
    slug: "journee-sensibilisation-environnementale"
  },
  {
    id: 2,
    title: "Collecte de fonds annuelle",
    date: "Février 2024",
    image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Soirée de gala pour soutenir nos projets éducatifs. Un événement qui a réuni de nombreux donateurs et sympathisants.",
    slug: "collecte-fonds-annuelle"
  },
  {
    id: 3,
    title: "Atelier intergénérationnel",
    date: "Janvier 2024",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    description: "Échange de savoirs entre seniors et jeunes. Une belle occasion de partager les connaissances et les expériences.",
    slug: "atelier-intergenerationnel"
  }
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Actualités</h1>
          <p className="mt-4 text-lg text-gray-600">
            Restez informé des dernières nouvelles et événements du Grison Club
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <Link key={news.id} href={`/news/${news.slug}`}>
              <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <div className="relative h-48">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-emerald-800 mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    {news.date}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    {news.title}
                  </h2>
                  <p className="text-gray-600">
                    {news.description}
                  </p>
                  <div className="mt-4 text-emerald-800 font-medium">
                    Lire la suite →
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
