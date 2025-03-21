# Grison Club - Site Web Officiel 🌍

## À propos
Site web officiel du Grison Club, une association guinéenne engagée dans l'éducation, la culture et l'environnement. Cette plateforme présente nos activités, notre équipe et permet aux visiteurs de nous contacter.

## Fonctionnalités principales
- 🏠 Page d'accueil dynamique avec présentation des activités
- 👥 Page "Notre équipe" présentant les membres du bureau
- 📰 Section actualités
- 📅 Gestion des événements
- 📧 Formulaire de contact avec envoi d'email
- 🌐 Interface utilisateur moderne et responsive

## Technologies utilisées
- React.js
- TypeScript
- Tailwind CSS
- Express.js
- PostgreSQL
- Resend (pour l'envoi d'emails)

## Installation

1. Clonez le repository
```bash
git clone [votre-url-repository]
cd grison-club
```

2. Installez les dépendances
```bash
npm install
```

3. Créez un fichier `.env` à la racine du projet et ajoutez les variables d'environnement nécessaires :
```
DATABASE_URL=votre_url_postgresql
RESEND_API_KEY=votre_cle_api_resend
```

4. Démarrez le projet
```bash
npm run dev
```

## Structure du projet
```
├── client/           # Frontend React
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── server/          # Backend Express
├── shared/          # Types et schémas partagés
└── public/          # Assets statiques
```

## Contribution
Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.

## Licence
Tous droits réservés © 2025 Grison Club
