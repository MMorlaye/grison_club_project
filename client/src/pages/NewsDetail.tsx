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
    content: `À l’occasion de la Journée internationale des droits des femmes, célébrée chaque 8 mars, notre ONG a organisé une journée de sensibilisation dédiée aux femmes et aux jeunes filles de Coyah. Cet événement visait à promouvoir l’égalité des sexes, l’autonomisation des femmes et l’importance de leur rôle dans la société.

Lors de cette journée, plusieurs thématiques ont été abordées à travers des conférences, des débats et des témoignages inspirants. Des intervenants spécialisés ont échangé avec les participantes sur les défis liés à l’éducation, à l’indépendance économique et à l’engagement citoyen des femmes.

Des activités interactives ont également été organisées, permettant aux jeunes filles de s’exprimer librement sur leurs aspirations et les obstacles qu’elles rencontrent. Cette journée a été marquée par un fort engagement des participants et a permis de renforcer la sensibilisation autour des droits des femmes dans la communauté.`
  },
  {
    id: 2,
    title: "Partenariat avec le conseil communal de la jeunesse",
    date: "Février 2025",
    image: "./HERO/IMG-20240610-WA0098.jpg",
    description: "Organisation d'une journée d'échange sur la mission du Conseil national de la Jeunesse de Guinée",
    slug: "partenariat-conseil-jeunesse-2025",
    content: `Le 4 février 2025, notre ONG, en partenariat avec le Conseil Communal de la Jeunesse de Coyah, a organisé une journée dédiée aux jeunes. Cet événement avait pour objectif de créer un espace d’échange et de réflexion sur la mission du Conseil National de la Jeunesse de Guinée et sur l’engagement des jeunes dans le développement du pays.

Durant cette journée, des ateliers de discussion ont été mis en place afin de permettre aux jeunes participants d’exprimer leurs attentes et leurs préoccupations. Des représentants du Conseil Communal et des experts ont pris la parole pour expliquer les enjeux du leadership et de la participation active des jeunes dans la vie citoyenne.

Des débats enrichissants ont permis d’aborder des sujets cruciaux tels que l’entrepreneuriat, la formation professionnelle et l’implication des jeunes dans la gouvernance locale. L’événement s’est conclu par des recommandations concrètes pour renforcer le rôle de la jeunesse dans la construction d’une société plus inclusive et dynamique.`
  },
  {
    id: 3,
    title: "Conférence islamique du Ramadan",
    date: "Mars 2025",
    image: "./HERO/IMG-20230922-WA0068.jpg",
    description: "Une conférence islamique et une rupture collective organisées pendant le Ramadan",
    slug: "conference-ramadan-2025",
    content: `Dans le cadre du mois saint de Ramadan, notre association a organisé, le 16 mars 2025, une conférence islamique suivie d’une rupture collective. Cet événement avait pour but de réunir la communauté autour des valeurs de partage, de spiritualité et de solidarité.

La conférence a été animée par des érudits et des imams, qui ont partagé leurs connaissances sur des thématiques liées à la foi, à la patience et à l’importance du Ramadan dans la vie spirituelle des musulmans. Les discussions ont porté sur le renforcement des liens familiaux, l’entraide et la bienveillance envers autrui.

Après la conférence, une rupture collective a été organisée, rassemblant des fidèles de divers horizons. Ce moment de convivialité a permis aux participants de partager un repas dans une ambiance fraternelle, renforçant ainsi les valeurs de solidarité et de cohésion sociale prônées par l’Islam.

À travers ces actions, notre ONG continue de jouer un rôle actif dans l’éducation, la sensibilisation et le renforcement des liens communautaires à Coyah.`
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