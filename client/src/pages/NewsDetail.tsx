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
    image: "./attached_assets/journee_de_sensibilisation.jpg",
    description: "L'ONG a organisé une journée de sensibilisation à l'occasion du 08 Mars",
    slug: "journee-femme-2025",
    content: `À l'occasion de la Journée internationale des droits des femmes, célébrée chaque 8 mars, notre ONG a organisé une journée de sensibilisation dédiée aux femmes et aux jeunes filles de Coyah. 

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
    image: "./attached_assets/journee_jeune_pour_jeune.jpg",
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
    image: "./attached_assets/conference_islamique.jpg",
    description: "Une conférence islamique et une rupture collective organisées pendant le Ramadan",
    slug: "conference-ramadan-2025",
    content: `Dans le cadre du mois saint de Ramadan, notre association a organisé, le 16 mars 2025, une conférence islamique suivie d'une rupture collective. Cet événement avait pour but de réunir la communauté autour des valeurs de partage, de spiritualité et de solidarité.

La conférence a été animée par des érudits et des imams, qui ont partagé leurs connaissances sur des thématiques liées à la foi, à la patience et à l'importance du Ramadan dans la vie spirituelle des musulmans. Les discussions ont porté sur le renforcement des liens familiaux, l'entraide et la bienveillance envers autrui.

Après la conférence, une rupture collective a été organisée, rassemblant des fidèles de divers horizons. Ce moment de convivialité a permis aux participants de partager un repas dans une ambiance fraternelle, renforçant ainsi les valeurs de solidarité et de cohésion sociale prônées par l'Islam.`
  },
  {
    id: 4,
    title: "Atelier sur les droits des jeunes filles",
    date: "Mars 2025",
    image: "./attached_assets/amazones_grison_club.jpg",
    description: "Amazones Grison Club organise un atelier sur les droits des jeunes filles",
    slug: "atelier-droits-jeunes-filles",
    content: `Le 9 mars dernier, Amazones Grison Club, une des associations filleules du GRISON CLUB, a organisé un atelier de formation sur les droits des jeunes filles. Placé sous le thème "Droit des jeunes filles : comprendre, défendre et agir", cet événement avait pour but de sensibiliser les participantes à leurs droits fondamentaux et de les outiller pour les défendre efficacement.

Au cours de cet atelier, des experts en droits de l'homme et en genre ont animé des discussions sur des thématiques clés comme l'accès à l'éducation, la lutte contre les violences basées sur le genre et l'émancipation des jeunes filles. L'événement a également permis aux participantes d'échanger sur leurs expériences et d'explorer des solutions concrètes pour renforcer leur engagement citoyen.`
  },
  {
    id: 5,
    title: "Immersion solidaire à l'orphelinat Dimakan",
    date: "Octobre 2024",
    image: "./attached_assets/orphelinat_dimakan.jpg",
    description: "Visite et soutien à l'orphelinat Dimakan de Coyah",
    slug: "immersion-orphelinat-dimakan",
    content: `En octobre 2024, le Grison Club a organisé une immersion au sein de l'orphelinat Dimakan de Coyah. Cette initiative visait à apporter du soutien moral et matériel aux enfants en situation de vulnérabilité tout en sensibilisant les membres du club aux réalités du travail social et humanitaire.

Lors de cette visite, les bénévoles ont partagé des moments d'échange avec les enfants à travers des activités ludiques et éducatives. Des dons de vivres, de vêtements et de matériel scolaire ont également été remis à l'orphelinat pour améliorer le quotidien des pensionnaires. Cette immersion a renforcé l'engagement du club en faveur de la solidarité et du bien-être des enfants défavorisés.`
  },
  {
    id: 6,
    title: "Journée de lecture à Coyah",
    date: "Mai 2024",
    image: "./attached_assets/journee_de_lecture.jpg",
    description: "Promotion de la lecture à la Maison des Jeunes de Friguaidy",
    slug: "journee-lecture-coyah",
    content: `En mai 2024, le Grison Club a organisé une journée de lecture à la Maison des Jeunes de Friguaidy, à Coyah. Cet événement avait pour objectif de promouvoir l'importance de la lecture chez les jeunes et de les encourager à développer une culture littéraire.

Durant cette journée, des séances de lecture interactive ont été animées par des bénévoles et des écrivains invités. Les participants ont eu l'opportunité d'échanger autour de différents ouvrages et de partager leurs réflexions sur la lecture et l'apprentissage. Cet événement a mis en lumière le rôle clé de la lecture dans le développement personnel et académique des jeunes.`
  },
  {
    id: 7,
    title: "Campagne de reboisement à Coyah",
    date: "Août 2024",
    image: "./attached_assets/journee_de_reboisement.jpg",
    description: "Initiative environnementale pour un avenir plus vert",
    slug: "campagne-reboisement-coyah",
    content: `En août 2024, le Grison Club, en partenariat avec le Conseil Communal de la Jeunesse de Coyah, a organisé une campagne de reboisement. Cette initiative visait à sensibiliser la communauté à l'importance de la préservation de l'environnement et à encourager l'adoption de pratiques écologiques durables.

Les participants ont planté plusieurs centaines d'arbres dans différentes zones de Coyah, contribuant ainsi à la lutte contre la déforestation et au renforcement de l'écosystème local. Cette campagne a également permis de sensibiliser les jeunes à la responsabilité environnementale et à l'engagement citoyen en faveur d'un cadre de vie plus sain et durable.`
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