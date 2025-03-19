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
    title: "Journée internationale des droits des femmes",
    date: "Mars 2025",
    image: "./HERO/IMG-20240610-WA0116.jpg",
    description: "L'ONG a organisé une journée de sensibilisation à l'occasion du 08 Mars, célébrant la femme et la jeune fille.",
    slug: "journee-femme-2025"
  },
  {
    id: 2,
    title: "Partenariat avec le conseil communal de la jeunesse",
    date: "Février 2025",
    image: "./HERO/IMG-20240610-WA0098.jpg",
    description: "Organisation d'une journée d'échange sur la mission du Conseil national de la Jeunesse de Guinée.",
    slug: "partenariat-conseil-jeunesse-2025"
  },
  {
    id: 3,
    title: "Conférence islamique du Ramadan",
    date: "Mars 2025",
    image: "./HERO/IMG-20230922-WA0068.jpg",
    description: "Une conférence islamique et une rupture collective organisées pendant le Ramadan.",
    slug: "conference-ramadan-2025"
  },
  {
    id: 4,
    title: "Atelier sur les droits des jeunes filles",
    date: "Mars 2025",
    image: "./HERO/IMG-20240610-WA0116.jpg",
    description: "Amazones Grison Club organise un atelier sur les droits des jeunes filles",
    slug: "atelier-droits-jeunes-filles"
  },
  {
    id: 5,
    title: "Immersion solidaire à l'orphelinat Dimakan",
    date: "Octobre 2024",
    image: "./HERO/IMG-20230922-WA0076.jpg",
    description: "Visite et soutien à l'orphelinat Dimakan de Coyah",
    slug: "immersion-orphelinat-dimakan"
  },
  {
    id: 6,
    title: "Journée de lecture à Coyah",
    date: "Mai 2024",
    image: "./HERO/IMG-20230922-WA0030.jpg",
    description: "Promotion de la lecture à la Maison des Jeunes de Friguaidy",
    slug: "journee-lecture-coyah"
  },
  {
    id: 7,
    title: "Campagne de reboisement à Coyah",
    date: "Août 2024",
    image: "./HERO/IMG-20230922-WA0063.jpg",
    description: "Initiative environnementale pour un avenir plus vert",
    slug: "campagne-reboisement-coyah"
  }
];

const Article = ({ id, title, date, image, description, slug }) => (
  <Link key={id} href={`/news/${slug}`}>
    <a className="block bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <div className="relative h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-emerald-800 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          {date}
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">
          {title}
        </h2>
        <p className="text-gray-600">
          {description}
        </p>
        <div className="mt-4 text-emerald-800 font-medium">
          Lire la suite →
        </div>
      </div>
    </a>
  </Link>
);

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
            <Article
              key={news.id}
              id={news.id}
              title={news.title}
              date={news.date}
              image={news.image}
              description={news.description}
              slug={news.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;