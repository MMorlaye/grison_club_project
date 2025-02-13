import React, { useState } from 'react';
import { MessageSquare, Plus, Search, ThumbsUp, MessageCircle, Share2, User } from 'lucide-react';
import { Link } from 'wouter';

// Simuler un état de connexion (à remplacer par une vraie authentification)
const isAuthenticated = false;

const Forum = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Tous les sujets' },
    { id: 'environment', name: 'Environnement' },
    { id: 'education', name: 'Éducation' },
    { id: 'culture', name: 'Culture' },
    { id: 'projects', name: 'Projets' }
  ];

  const discussions = [
    {
      id: 1,
      title: "Organisation de la journée de l'environnement",
      author: "Marie K.",
      category: "environment",
      date: "Il y a 2 heures",
      replies: 12,
      likes: 25,
      excerpt: "Nous prévoyons d'organiser une journée spéciale dédiée à l'environnement...",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    },
    {
      id: 2,
      title: "Nouveau projet éducatif pour les écoles",
      author: "Thomas L.",
      category: "education",
      date: "Il y a 5 heures",
      replies: 8,
      likes: 18,
      excerpt: "Je souhaite proposer un nouveau programme éducatif pour sensibiliser les élèves...",
      authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="relative bg-emerald-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold">Forum</h1>
            <p className="mt-4 text-xl">
              Espace de discussion réservé aux membres du Grison Club.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <MessageSquare className="mx-auto h-12 w-12 text-emerald-800 mb-4" />
            <h2 className="text-2xl font-semibold mb-4">Accès réservé aux membres</h2>
            <p className="text-gray-600 mb-8">
              Connectez-vous ou devenez membre pour accéder au forum.
            </p>
            <div className="space-x-4">
              <Link
                href="/login"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700"
              >
                Se connecter
              </Link>
              <Link
                href="/membership"
                className="inline-flex items-center px-4 py-2 border border-emerald-600 text-base font-medium rounded-md text-emerald-600 bg-white hover:bg-emerald-50"
              >
                Devenir membre
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Forum</h1>
          <p className="mt-4 text-xl">
            Échangez avec les autres membres du Grison Club.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Barre d'actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative flex-1 max-w-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              placeholder="Rechercher dans les discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700">
            <Plus className="h-5 w-5 mr-2" />
            Nouvelle discussion
          </button>
        </div>

        {/* Catégories */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 overflow-x-auto">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                    activeCategory === category.id
                      ? 'border-emerald-500 text-emerald-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Liste des discussions */}
        <div className="space-y-6">
          {discussions.map((discussion) => (
            <div key={discussion.id} className="bg-white shadow rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src={discussion.authorAvatar}
                  alt={discussion.author}
                  className="h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{discussion.author}</p>
                  <p className="text-sm text-gray-500">{discussion.date}</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{discussion.title}</h3>
              <p className="text-gray-600 mb-4">{discussion.excerpt}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <button className="flex items-center hover:text-emerald-600">
                  <ThumbsUp className="h-5 w-5 mr-1" />
                  {discussion.likes}
                </button>
                <button className="flex items-center hover:text-emerald-600">
                  <MessageCircle className="h-5 w-5 mr-1" />
                  {discussion.replies} réponses
                </button>
                <button className="flex items-center hover:text-emerald-600">
                  <Share2 className="h-5 w-5 mr-1" />
                  Partager
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Forum;
