import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    club: '',
    motivation: ''
  });

  const clubs = [
    {
      id: 'jeunesse',
      name: 'Club Jeunesse',
      description: 'Pour les jeunes de 15 à 25 ans passionnés par l\'environnement et le développement durable.'
    },
    {
      id: 'professionnel',
      name: 'Club Professionnel',
      description: 'Réseau de professionnels engagés dans le développement durable.'
    },
    {
      id: 'education',
      name: 'Club Éducation',
      description: 'Dédié aux enseignants et éducateurs souhaitant intégrer le développement durable dans leur pratique.'
    },
    {
      id: 'seniors',
      name: 'Club Seniors',
      description: 'Pour les retraités actifs souhaitant partager leur expérience et continuer à apprendre.'
    }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Devenir Membre</h1>
          <p className="mt-4 text-xl">
            Rejoignez notre communauté et participez à nos activités.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-2xl mx-auto">
          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Processus d'adhésion</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-1" />
                <span>1. Remplissez le formulaire de demande d'adhésion ci-dessous</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-1" />
                <span>2. Attendez l'examen de votre candidature par notre comité</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-emerald-600 mr-2 mt-1" />
                <span>3. Après acceptation, payez les frais d'adhésion de 50.000 GNF</span>
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-6">Formulaire de demande d'adhésion</h3>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Téléphone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Adresse
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <label htmlFor="club" className="block text-sm font-medium text-gray-700">
                  Club souhaité
                </label>
                <select
                  id="club"
                  name="club"
                  value={formData.club}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                >
                  <option value="">Sélectionnez un club</option>
                  {clubs.map(club => (
                    <option key={club.id} value={club.id}>
                      {club.name}
                    </option>
                  ))}
                </select>
                {formData.club && (
                  <p className="mt-2 text-sm text-gray-600">
                    {clubs.find(club => club.id === formData.club)?.description}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="motivation" className="block text-sm font-medium text-gray-700">
                  Motivation pour rejoindre le club
                </label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                  required
                  placeholder="Expliquez pourquoi vous souhaitez rejoindre ce club spécifique et ce que vous pensez pouvoir apporter à la communauté."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-800 text-white px-6 py-3 rounded-md hover:bg-emerald-700 transition-colors"
              >
                Soumettre ma demande
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Membership;