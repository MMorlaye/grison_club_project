import React, { useState, useEffect } from 'react';
import { ArrowRight, GraduationCap, Globe, Users, Heart, BookOpen } from 'lucide-react';
import { Link } from 'wouter';

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
      url: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      caption: "Sensibilisation environnementale"
    },
    {
      url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      caption: "Échange intergénérationnel"
    },
    {
      url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      caption: "Actions solidaires"
    }
  ];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const impactNumbers = [
    { number: "1000+", label: "Membres actifs" },
    { number: "50+", label: "Projets réalisés" },
    { number: "20+", label: "Pays représentés" },
    { number: "10k+", label: "Personnes impactées" }
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Sensibilisation des jeunes à la protection de l'environnement"
    },
    {
      title: "Collecte de fonds annuelle",
      date: "Février 2024",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
      description: "Soirée de gala pour soutenir nos projets éducatifs"
    },
    {
      title: "Atelier intergénérationnel",
      date: "Janvier 2024",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
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

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <div className="relative bg-emerald-800 text-white">
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <img
              key={index}
              src={image.url}
              alt={image.caption}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-20' : 'opacity-0'
              }`}
            />
          ))}
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            Ensemble pour un monde meilleur
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
        {/* Slideshow Navigation Dots */}
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

      {/* Partners Section with Infinite Scroll */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8">
            Dans la réalisation de nos actions, nous sommes soutenu·e·s par :
          </h2>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-8">
              {partners.map((partner, index) => (
                <div
                  key={`partner1-${index}`}
                  className="flex-none w-48 h-32 filter grayscale hover:grayscale-0 transition-all duration-300"
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
              {/* Duplicate pour l'animation infinie */}
              {partners.map((partner, index) => (
                <div
                  key={`partner2-${index}`}
                  className="flex-none w-48 h-32 filter grayscale hover:grayscale-0 transition-all duration-300"
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


      {/* Impact Numbers */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactNumbers.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-emerald-800">{item.number}</div>
                <div className="mt-2 text-gray-600">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Objectives Grid */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos Objectifs</h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez les piliers de notre engagement pour un monde meilleur
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {objectives.map((objective, index) => (
              <div key={index} className="p-6 bg-emerald-50 rounded-lg transform transition duration-300 hover:scale-105">
                {objective.icon}
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{objective.title}</h3>
                <p className="mt-2 text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
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

      {/* Call to Action Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Prêt.e à faire partie de l'action ?</h2>
          <p className="text-xl mb-8">Participez à nos projets en Guinée et à l'international</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/clubs"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-800 hover:bg-emerald-700"
            >
              Découvrir nos clubs
            </Link>
            <Link
              href="/membership"
              className="inline-flex items-center px-6 py-3 border border-emerald-800 text-base font-medium rounded-md text-emerald-800 bg-white hover:bg-emerald-50"
            >
              Devenir membre
            </Link>
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Nos actions récentes</h2>
            <p className="mt-4 text-lg text-gray-600">
              Découvrez nos dernières initiatives et leur impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentActivities.map((activity, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-emerald-800 font-semibold mb-2">{activity.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{activity.title}</h3>
                  <p className="text-gray-600 mb-4">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/activities"
              className="inline-flex items-center px-6 py-3 border border-emerald-800 text-base font-medium rounded-md text-emerald-800 hover:bg-emerald-50"
            >
              Voir toutes nos actions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;