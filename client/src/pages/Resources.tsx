import React from 'react';
import { BookOpen, FileText, Video, Download } from 'lucide-react';

const Resources = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="relative bg-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold">Ressources</h1>
          <p className="mt-4 text-xl">
            Accédez à nos ressources éducatives et culturelles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <BookOpen className="h-8 w-8 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Guides et Manuels</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FileText className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Guide du développement durable</span>
              </li>
              <li className="flex items-center">
                <FileText className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Manuel de l'éco-citoyen</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Video className="h-8 w-8 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vidéos</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Video className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Tutoriels pratiques</span>
              </li>
              <li className="flex items-center">
                <Video className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Conférences enregistrées</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Download className="h-8 w-8 text-emerald-800 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Documents</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FileText className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Rapports d'activités</span>
              </li>
              <li className="flex items-center">
                <FileText className="h-5 w-5 text-emerald-600 mr-2" />
                <span>Newsletters</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
