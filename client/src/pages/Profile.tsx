import React from 'react';
import { User, Mail, Phone, MapPin, Calendar } from 'lucide-react';

const Profile = () => {
  // Simuler des données utilisateur
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+224 XX XX XX XX",
    address: "Coyah, République de Guinée",
    joinDate: "Janvier 2024",
    role: "Membre",
    interests: ["Environnement", "Éducation", "Culture"]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Mon Profil</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center space-x-5">
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <User className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                <p className="text-sm font-medium text-emerald-600">{user.role}</p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-700">{user.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-700">{user.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-700">{user.address}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="h-5 w-5 text-emerald-500" />
                <span className="text-gray-700">Membre depuis {user.joinDate}</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">Centres d'intérêt</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {user.interests.map((interest, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-emerald-100 text-emerald-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
