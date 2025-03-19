import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap, Globe, Users, Heart, BookOpen } from 'lucide-react';
import { Link } from 'wouter';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Added imports

const galleryImages = {
  set1: [
    "./HERO/IMG-20230922-WA0001.jpg",
    "./HERO/IMG-20230922-WA0030.jpg",
    "./HERO/IMG-20230922-WA0062.jpg",
    "./HERO/IMG-20240722-WA0013.jpg",
    "./HERO/IMG-20240811-WA0068.jpg",
  ],
  set2: [
    "./HERO/IMG-20230922-WA0067.jpg",
    "./HERO/IMG-20240510-WA0008.jpg",
    "./HERO/IMG-20240511-WA0024.jpg",
    "./HERO/IMG-20240811-WA0075.jpg",
    "./HERO/IMG-20240811-WA0084.jpg",
  ],
  set3: [
    "./HERO/IMG-20230922-WA0076.jpg",
    "./HERO/IMG-20230922-WA0081.jpg",
    "./HERO/IMG-20230922-WA0082.jpg",
    "./HERO/IMG-20240811-WA0088.jpg",
    "./HERO/IMG-20240811-WA0099.jpg",
  ]
};

const partners = [
    { 
      name: "Office National du Tourisme", 
      logo: "./img/Plan-de-travail-2-1.png"
    },
    { 
      name: "CEDEAO", 
      logo: "./img/Le-logo-de-la-CEDEAO.jpg"
    },
    { 
      name: "Union Africaine", 
      logo: "./img/UA.png"
    },
    { 
      name: "UNESCO", 
      logo: "./img/unesco-logo-260px.jpg"
    },
    { 
      name: "ONU", 
      logo: "./img/la-77e-assemblee-generale-de-l-onu-se-tient-dans-un-monde-fragmente_image_1.jpg"
    },
    { 
      name: "Guinée", 
      logo: "./img/images.png"
    },
    { 
      name: "Union Européenne", 
      logo: "./img/120711718-fond-clair-avec-le-drapeau-de-l-union-européenne-joyeux-fond-de-la-journée-de-l-europe.jpg"
    }
];

const heroImages = [
  {
    url: "./HERO/IMG-20230922-WA0027.jpg",
    caption: "Actions communautaires"
  },
  {
    url: "./HERO/IMG-20240610-WA0084.jpg",
    caption: "Événements culturels"
  },
  {
    url: "./HERO/IMG-20230922-WA0001.jpg",
    caption: "Sensibilisation"
  },
  {
    url: "./HERO/IMG-20230922-WA0076.jpg",
    caption: "Éducation et formation"
  },
  {
    url: "./HERO/IMG-20230922-WA0081.jpg",
    caption: "Culture et traditions"
  }
];

const impactNumbers = [
    { number: "+2000", label: "Projets de volontariat à l'international" },
    { number: "+100", label: "Projets de volontariat en France" },
    { number: "+300", label: "Volontaires français·e·s à l'international" },
    { number: "+1000", label: "Volontaires en France" }
  ];

const objectives = [
    {
      icon: <GraduationCap className="h-12 w-12 text-emerald-800" />,
      title: "Éducation",
      description: "Soutien à l'apprentissage et au développement des compétences des jeunes"
    },
    {
      icon: <BookOpen className="h-12 w-12 text-emerald-800" />,
      title: "Culture",
      description: "Promotion des cultures locales et du patrimoine"
    },
    {
      icon: <Globe className="h-12 w-12 text-emerald-800" />,
      title: "Environnement",
      description: "Protection de l'environnement et sensibilisation écologique"
    },
    {
      icon: <Users className="h-12 w-12 text-emerald-800" />,
      title: "Bénévolat",
      description: "Formation de leaders bénévoles engagés"
    }
  ];

const recentActivities = [
  {
    title: "Journée de sensibilisation environnementale",
    date: "Mars 2024",
    image: "./HERO/IMG-20240610-WA0116.jpg", 
    description: "Sensibilisation des jeunes à la protection de l'environnement"
  },
  {
    title: "Collecte de fonds annuelle",
    date: "Février 2024",
    image: "./HERO/IMG-20240610-WA0098.jpg",
    description: "Soirée de gala pour soutenir nos projets éducatifs"
  },
  {
    title: "Atelier intergénérationnel",
    date: "Janvier 2024",
    image: "./HERO/IMG-20230922-WA0068.jpg",
    description: "Échange de savoirs entre seniors et jeunes"
  }
];

const testimonials = [
    {
      quote: "Le Grison Club m'a permis de développer mes compétences tout en aidant les autres.",
      author: "Marie K.",
      role: "Membre depuis 2022"
    },
    {
      quote: "Une expérience enrichissante qui m'a ouvert de nouvelles perspectives.",
      author: "Thomas L.",
      role: "Bénévole"
    },
    {
      quote: "Grâce au club, j'ai pu concrétiser mon projet environnemental.",
      author: "Sophie M.",
      role: "Porteuse de projet"
    }
  ];

const Article = ({ id, title, date, image, description, slug }) => (
    <div key={id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="text-sm text-emerald-800 font-semibold mb-2">{date}</div>
        <Link href={`/news/${slug}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        </Link>
        <p className="text-gray-600 mb-4">{description}</p>
      </div>
    </div>
  );


const GalleryImage = ({ src, alt, isActive }) => (
  <img
    src={src}
    alt={alt}
    className={`gallery-image ${isActive ? 'active' : ''}`}
  />
);

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); 

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.set1.length);
    }, 6000); 

    return () => clearInterval(timer);
  }, []);

  const galleryTransitionStyle = "transition-all duration-3000 ease-in-out transform hover:scale-105";

  return (
    <div>
      <div className="relative bg-emerald-800 text-white hero-section">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.caption}
              className={`absolute w-full h-full object-cover transition-opacity duration-2000 ${
                index === currentSlide ? 'opacity-20' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ensemble pour un monde meilleur avec le Grison Club
          </h1>
          <p className="mt-6 text-xl max-w-3xl">
            Le Grison Club s'engage dans l'éducation, la culture et l'environnement pour créer un impact positif durable dans nos communautés.
          </p>
          <div className="mt-8 flex space-x-4">
            <Link
              href="/about"
              className="bg-white text-emerald-800 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors"
            >
              En savoir plus
            </Link>
            <Link
              href="/join"
              className="border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-emerald-800 transition-colors"
            >
              Nous rejoindre
            </Link>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="py-16 bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Dans la réalisation de nos actions, nous collaborons avec des organisations dans un esprit mutuel :
          </h2>
          <div className="relative overflow-hidden">
            <div className="animate-scroll">
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={`partner-${index}`}
                  className="inline-flex flex-none w-48 h-32 mx-4 filter grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-4">
                    <img 
                      src={partner.logo} 
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="about-title">Grison-Club, c'est quoi ?</h2>
          <div className="space-y-6 presentation-text">
            <p>
              Grison-Club est une association guinéenne engagée dans l'éducation, la culture, la protection de l'environnement et la formation de jeunes leaders bénévoles au service de leurs communautés. À travers des ateliers éducatifs, des campagnes de reboisement, des projets culturels et des actions humanitaires, nous œuvrons pour renforcer les compétences des jeunes et bâtir des communautés résilientes.
            </p>
            <p>
              En partenariat avec des clubs affiliés en Guinée et à l'international, nous organisons chaque année des dizaines de projets locaux et internationaux, mobilisant plus de 500 membres actifs et des centaines de bénévoles. Nos délégations régionales coordonnent des initiatives comme des bibliothèques mobiles, des séminaires de leadership ou des opérations d'assainissement, tandis que notre réseau international promeut la solidarité entre l'Afrique, l'Europe et au-delà. Notre objectif ? Former des citoyens engagés, capables de contribuer à un développement durable et inclusif.
            </p>
            <blockquote className="testimonial-text bg-white p-6 rounded-lg shadow-lg my-8">
              « Ce qui m'a marqué, c'est l'équilibre entre les actions concrètes, comme planter des arbres, et les réflexions sur notre rôle dans la société. Les formations m'ont aidé à développer mon leadership, et les rencontres avec d'autres membres ont été inspirantes. Grison-Club m'a permis de grandir tout en servant ma communauté. »
              <footer className="mt-2 text-base font-normal text-gray-600">
                Fatou, 19 ans, membre active du Grison Youth Club
              </footer>
            </blockquote>
            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-700 transition-colors"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-emerald-800 text-center">Nos Missions</h2>
            <p className="mt-6 missions-question">
              À Grison Club, on fait quoi ?
            </p>
            <p className="mt-4 missions-intro">
              Notre association s'engage dans quatre domaines d'intervention majeurs, chacun contribuant à notre vision d'une société plus équitable et durable. Découvrez nos actions dans ces différents domaines :
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Carte Éducation */}
            <div className="group relative h-80 overflow-hidden rounded-2xl">
              <img
                src="./HERO/IMG-20240218-WA0044.jpg"
                alt="Éducation"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-900/70 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Éducation</h3>
                <p className="text-white/90 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                  Soutien à l'apprentissage et au développement des compétences des jeunes.
                </p>
              </div>
            </div>

            {/* Carte Environnement */}
            <div className="group relative h-80 overflow-hidden rounded-2xl">
              <img
                src="./HERO/IMG-20230922-WA0063.jpg"
                alt="Environnement"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-900/70 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Environnement</h3>
                <p className="text-white/90 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                  Protection de l'environnement et sensibilisation écologique.
                </p>
              </div>
            </div>

            {/* Carte Culture */}
            <div className="group relative h-80 overflow-hidden rounded-2xl">
              <img
                src="./HERO/IMG-20240610-WA0116.jpg"
                alt="Culture"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-900/70 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Culture</h3>
                <p className="text-white/90 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                  Promotion des cultures locales et du patrimoine guinéen.
                </p>
              </div>
            </div>

            {/* Carte Volontariat */}
            <div className="group relative h-80 overflow-hidden rounded-2xl">
              <img
                src="./HERO/IMG-20230922-WA0075.jpg"
                alt="Volontariat"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-emerald-900/70 transition-opacity duration-300 group-hover:opacity-75"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Volontariat</h3>
                <p className="text-white/90 transform translate-y-8 transition-transform duration-300 group-hover:translate-y-0">
                  Formation et engagement de leaders bénévoles pour servir la communauté.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Témoignages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-emerald-700 p-6 rounded-lg">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-emerald-200">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Engagement */}
      <div className="bg-[#FFFBF5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#0A4D44] mb-6">
              Participez à une action avec le Grison Club !
            </h2>
            <p className="text-lg text-gray-700 mb-12">
              Si vous souhaitez vous engager dans des projets qui font la différence, partager vos compétences et contribuer au développement de votre communauté, rejoignez le Grison Club ! Ensemble, nous créons des opportunités d'apprentissage, de partage et d'action pour un impact positif durable.
            </p>
            <blockquote className="bg-[#E8F0FE] p-8 rounded-lg shadow-lg mb-6">
              <p className="text-2xl text-[#6B7DB3] italic mb-4">
                « Si tu es venu·e pour m'aider, tu perds ton temps. Mais si tu es venu·e parce que tu penses que ta libération est liée à la mienne, alors travaillons ensemble »
              </p>
              <footer className="text-right text-gray-600">
                Lilla Watson - militante autochtone et éducatrice, Queensland 1970
              </footer>
            </blockquote>
          </div>
        </div>
      </div>

      <div className="bg-[#FFF8E1] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/img/heart-icon.svg" 
              alt="Icône cœur"
              className="w-24 h-24 mb-6"
            />
            <h2 className="text-[2.5rem] font-bold text-[#1D3A34] mb-4">
              Prêt·e à faire partie de l'action ?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Impliquez-vous et contribuez à des projets pour impacter positivement votre communauté.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/clubs"
                className="px-6 py-3 bg-[#0A4D44] text-white rounded-lg hover:bg-[#0A4D44]/90 transition-colors"
              >
                Découvrir nos clubs
              </Link>
              <Link
                href="/join"
                className="px-6 py-3 bg-[#00A67E] text-white rounded-lg hover:bg-[#00A67E]/90 transition-colors"
              >
                Adhérer à l'association
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Section Galerie */}
      <div className="py-16 bg-white">
        {/* Première rangée avec 3 cartes */}
        <div className="grid grid-cols-3 gap-4 mb-16">
          <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden card-rotate-left">
              {galleryImages.set1.map((image, index) => (
                <GalleryImage
                  key={`gallery-1-${index}`}
                  src={image}
                  alt={`Image galerie 1-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
              {galleryImages.set2.map((image, index) => (
                <GalleryImage
                  key={`gallery-2-${index}`}
                  src={image}
                  alt={`Image galerie 2-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden card-rotate-right">
              {galleryImages.set3.map((image, index) => (
                <GalleryImage
                  key={`gallery-3-${index}`}
                  src={image}
                  alt={`Image galerie 3-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Deuxième rangée avec 3 cartes */}
        <div className="flex justify-center gap-16">
          <div className="relative w-[250px] h-[250px] overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden card-rotate-left">
              {galleryImages.set2.map((image, index) => (
                <GalleryImage
                  key={`gallery-4-${index}`}
                  src={image}
                  alt={`Image galerie 4-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden">
              {galleryImages.set3.map((image, index) => (
                <GalleryImage
                  key={`gallery-5-${index}`}
                  src={image}
                  alt={`Image galerie 5-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
          <div className="relative w-[250px] h-[250px] overflow-hidden">
            <div className="absolute inset-0 bg-white rounded-lg shadow-lg overflow-hidden card-rotate-right">
              {galleryImages.set1.map((image, index) => (
                <GalleryImage
                  key={`gallery-6-${index}`}
                  src={image}
                  alt={`Image galerie 6-${index}`}
                  isActive={index === galleryIndex}
                />
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Actualités</h2>
            <p className="mt-4 text-lg text-gray-600">
              Restez informé des dernières nouvelles de l'association
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentActivities.map((activity, index) => (
              <Article
                key={index}
                id={index}
                title={activity.title}
                date={activity.date}
                image={activity.image}
                description={activity.description}
                slug={activity.title.toLowerCase().replace(/ /g, '-')}
              />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/news"
              className="inline-flex items-center px-6 py-3 border border-emerald-800 text-base font-medium rounded-md text-emerald-800 hover:bg-emerald-50"
            >
              Voir toutes les actualités
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>



      <footer className="bg-[#1B4842] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne de gauche */}
            <div>
              <img 
                src="./img/Logo-removebg-preview.png" 
                alt="Grison Club" 
                className="h-24 mb-4"
                onError={(e) => {
                  console.error('Error loading logo');
                  e.currentTarget.src = 'https://via.placeholder.com/160x60?text=Grison+Club';
                }}
              />
              <p className="text-sm text-gray-300 mb-4">
                Une communauté dynamique engagée dans l'éducation, la culture et l'environnement pour un impact positif durable.
              </p>
              <p className="text-sm text-gray-300 mb-4">
                Travail - Rigueur - Réussite
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-emerald-300">
                  <FaFacebook size={20} />
                </Link>
                <Link href="#" className="hover:text-emerald-300">
                  <FaTwitter size={20} />
                </Link>
                <Link href="#" className="hover:text-emerald-300">
                  <FaInstagram size={20} />
                </Link>
              </div>
            </div>

            {/* Colonne du milieu - Liens Rapides */}
            <div>
              <h3 className="font-semibold mb-4">Liens Rapides</h3>
              <div className="grid grid-cols-1 gap-2">
                <Link href="/about" className="text-sm hover:text-emerald-300">Qui sommes-nous ?</Link>
                <Link href="/events" className="text-sm hover:text-emerald-300">Événements</Link>
                <Link href="/resources" className="text-sm hover:text-emerald-300">Ressources</Link>
                <Link href="/contact" className="text-sm hover:text-emerald-300">Contact</Link>
              </div>
            </div>

            {/* Colonne de droite - Newsletter */}
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-300 mb-4">
                Restez informé de nos actualités et événements en Guinée et à l'international.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-2 rounded bg-[#143832] text-white placeholder-gray-400 flex-grow"
                />
                <button className="px-4 py-2 bg-emerald-600 text-white rounded hover:bg-emerald-700">
                  OK
                </button>
              </div>
            </div>
          </div>

          {/* Ligne de copyright */}
          <div className="border-t border-gray-600 pt-8 mt-8 text-center text-sm text-gray-300">
            <p>© 2025 Grison Club. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;