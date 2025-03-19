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
    title: "Journée internationale des droits des femmes",
    date: "Mars 2025",
    image: "./HERO/IMG-20240610-WA0116.jpg",
    description: "L'ONG a organisé une journée de sensibilisation à l'occasion du 08 Mars",
    slug: "journee-femme-2025",
    content: `En célébration de la Journée internationale des droits des femmes, l'ONG Grison Club a organisé une journée de sensibilisation spéciale le 8 mars 2025. 

Cette journée a été consacrée à la promotion des droits des femmes et des jeunes filles, mettant en lumière leur rôle essentiel dans notre société.

Points forts de l'événement :
- Ateliers de sensibilisation sur les droits des femmes
- Témoignages inspirants de femmes leaders
- Discussions sur l'autonomisation des jeunes filles
- Activités culturelles et éducatives

Cette initiative s'inscrit dans notre engagement continu pour l'égalité des genres et l'autonomisation des femmes.`
  },
  {
    id: 2,
    title: "Partenariat avec le conseil communal de la jeunesse",
    date: "Février 2025",
    image: "./HERO/IMG-20240610-WA0098.jpg",
    description: "Organisation d'une journée d'échange sur la mission du Conseil national de la Jeunesse de Guinée",
    slug: "partenariat-conseil-jeunesse-2025",
    content: `Le 04 Février 2025, l'ONG Grison Club a collaboré avec le conseil communal de la jeunesse de Coyah pour une journée dédiée à la jeunesse guinéenne.

L'objectif principal était de créer un espace d'échange et de réflexion sur la mission du Conseil national de la Jeunesse de Guinée et l'engagement de la jeunesse Guinéenne.

Au programme :
- Présentation de la mission du Conseil national de la Jeunesse
- Ateliers de réflexion sur l'engagement citoyen
- Sessions de dialogue entre jeunes et autorités locales
- Élaboration de projets d'action communautaire

Cette initiative a permis de renforcer les liens entre les jeunes et les institutions locales tout en promouvant une participation active dans le développement communautaire.`
  },
  {
    id: 3,
    title: "Conférence islamique du Ramadan",
    date: "Mars 2025",
    image: "./HERO/IMG-20230922-WA0068.jpg",
    description: "Une conférence islamique et une rupture collective organisées pendant le Ramadan",
    slug: "conference-ramadan-2025",
    content: `À l'occasion du mois saint de Ramadan, l'association Grison Club a organisé une conférence islamique suivie d'une rupture collective le 16 Mars 2025.

Cet événement spirituel et communautaire a rassemblé les membres de notre communauté dans un esprit de partage et de réflexion.

Au programme de la journée :
- Conférence sur les valeurs spirituelles du Ramadan
- Échanges sur l'importance du jeûne et de la solidarité
- Prières communes
- Rupture collective du jeûne (Iftar)

Cette initiative a renforcé les liens communautaires et promu les valeurs de partage et de solidarité pendant ce mois sacré.`
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