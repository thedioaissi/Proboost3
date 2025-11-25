const fs = require('fs');
const path = require('path');

// Vérifier si on est en mode développement
const isDev = process.env.NODE_ENV !== 'production';

// Charger les variables d'environnement depuis .env.local si on est en développement
if (isDev) {
  require('dotenv').config({ path: path.resolve(process.cwd(), '.env.local') });
}

// Variables d'environnement requises
const requiredEnvVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SUPABASE_SERVICE_ROLE_KEY',
  'NEXTAUTH_SECRET',
  'NEXTAUTH_URL'
];

// Vérifier chaque variable d'environnement requise
let missingVars = [];
for (const envVar of requiredEnvVars) {
  if (!process.env[envVar]) {
    missingVars.push(envVar);
  }
}

// Afficher un message d'erreur si des variables manquent
if (missingVars.length > 0) {
  console.error('\x1b[31m%s\x1b[0m', '❌ Erreur : Les variables d\'environnement suivantes sont manquantes :');
  missingVars.forEach(envVar => {
    console.error(`- ${envVar}`);
  });
  console.log('\n\x1b[36m%s\x1b[0m', '💡 Astuce : Copiez le fichier .env.local.example vers .env.local et remplissez les valeurs manquantes.');
  process.exit(1);
}

console.log('\x1b[32m%s\x1b[0m', '✅ Toutes les variables d\'environnement requises sont définies.');

// Si nous sommes dans un hook de pré-commit, créer un fichier .env.local s'il n'existe pas
if (process.argv.includes('--pre-commit')) {
  const envExamplePath = path.resolve(process.cwd(), '.env.local.example');
  const envPath = path.resolve(process.cwd(), '.env.local');
  
  if (!fs.existsSync(envPath) && fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('\x1b[36m%s\x1b[0m', '📄 Fichier .env.local créé à partir de .env.local.example');
  }
}
