import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit2, Camera, Shield, Bell, LogOut } from 'lucide-react';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);

  const [userInfo, setUserInfo] = useState({
    fullName: 'Thomas Kamano',
    email: 'thomas.kamano@example.com',
    phone: '+224 XX XX XX XX',
    address: 'Coyah, République de Guinée',
    joinDate: 'Janvier 2024',
    club: 'Club Jeunesse',
    bio: 'Passionné par l\'environnement et le développement durable. Je souhaite contribuer à un avenir meilleur pour notre communauté.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  });

  const activities = [
    {
      type: 'event',
      title: 'Journée de sensibilisation environnementale',
      date: '15 Mars 2024',
      status: 'À venir'
    },
    {
      type: 'project',
      title: 'Nettoyage de la plage',
      date: '10 Mars 2024',
      status: 'Inscrit'
    },
    {
      type: 'formation',
      title: 'Formation développement durable',
      date: '1 Mars 2024',
      status: 'Terminé'
    }
  ];

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // Ici, vous ajouteriez la logique pour sauvegarder les modifications
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* En-tête du profil */}
      <div className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <img
                src={userInfo.avatar}
                alt={userInfo.fullName}
                className="w-32 h-32 rounded-full object-cover border-4 border-white"
              />
              <button className="absolute bottom-0 right-0 bg-emerald-600 p-2 rounded-full hover:bg-emerald-500">
                <Camera className="h-5 w-5" />
              </button>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">{userInfo.fullName}</h1>
              <p className="text-emerald-200 mt-2">{userInfo.club}</p>
              <p className="text-emerald-100 mt-1">Membre depuis {userInfo.joinDate}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation des onglets */}
      <div className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('profile')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'profile'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Profil
            </button>
            <button
              onClick={() => setActiveTab('activities')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'activities'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Activités
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'settings'
                  ? 'border-emerald-500 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Paramètres
            </button>
          </nav>
        </div>
      </div>

      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Onglet Profil */}
        {activeTab === 'profile' && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Informations personnelles</h2>
              <button
                onClick={handleEdit}
                className="flex items-center text-emerald-600 hover:text-emerald-500"
              >
                <Edit2 className="h-4 w-4 mr-2" />
                {isEditing ? 'Sauvegarder' : 'Modifier'}
              </button>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <User className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Nom complet</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userInfo.fullName}
                      onChange={(e) => setUserInfo({ ...userInfo, fullName: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  ) : (
                    <p className="text-gray-600">{userInfo.fullName}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-gray-600">{userInfo.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Téléphone</p>
                  {isEditing ? (
                    <input
                      type="tel"
                      value={userInfo.phone}
                      onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  ) : (
                    <p className="text-gray-600">{userInfo.phone}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                <div>
                  <p className="font-medium">Adresse</p>
                  {isEditing ? (
                    <input
                      type="text"
                      value={userInfo.address}
                      onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  ) : (
                    <p className="text-gray-600">{userInfo.address}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-grow">
                  <p className="font-medium">Bio</p>
                  {isEditing ? (
                    <textarea
                      value={userInfo.bio}
                      onChange={(e) => setUserInfo({ ...userInfo, bio: e.target.value })}
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  ) : (
                    <p className="text-gray-600">{userInfo.bio}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Onglet Activités */}
        {activeTab === 'activities' && (
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-6">Mes activités</h2>
              <div className="space-y-6">
                {activities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0">
                    <div>
                      <h3 className="font-medium">{activity.title}</h3>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        {activity.date}
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      activity.status === 'À venir' ? 'bg-yellow-100 text-yellow-800' :
                      activity.status === 'Inscrit' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {activity.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Onglet Paramètres */}
        {activeTab === 'settings' && (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Paramètres du compte</h2>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Shield className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Sécurité</p>
                      <p className="text-sm text-gray-500">Modifier le mot de passe</p>
                    </div>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-500">
                    Modifier
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Bell className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="font-medium">Notifications</p>
                      <p className="text-sm text-gray-500">Gérer les notifications</p>
                    </div>
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-500">
                    Configurer
                  </button>
                </div>

                <div className="pt-6 border-t">
                  <button className="flex items-center text-red-600 hover:text-red-500">
                    <LogOut className="h-5 w-5 mr-2" />
                    Se déconnecter
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;