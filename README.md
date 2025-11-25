# Probooster - Plateforme de formation professionnelle

## Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn ou pnpm
- Compte Supabase

## Installation

1. Cloner le dépôt :
   ```bash
   git clone [URL_DU_REPO]
   cd Probooster2
   ```

2. Installer les dépendances :
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. Configurer les variables d'environnement :
   - Copiez le fichier `.env.local.example` vers `.env.local`
   - Remplissez les valeurs avec vos informations Supabase

4. Lancer le serveur de développement :
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

## Déploiement sur Vercel

1. Assurez-vous que votre projet est poussé sur un dépôt Git (GitHub, GitLab, Bitbucket)
2. Connectez-vous à [Vercel](https://vercel.com)
3. Importez votre projet
4. Configurez les variables d'environnement dans les paramètres du projet Vercel
5. Déployez !

## Structure du projet

- `/app` - Pages et routes de l'application
- `/components` - Composants réutilisables
- `/lib` - Utilitaires et configurations
- `/public` - Fichiers statiques

## Technologies utilisées

- Next.js 13+ (avec App Router)
- React 19
- TypeScript
- Tailwind CSS
- Supabase
- Shadcn/ui

## Licence

[À définir]
