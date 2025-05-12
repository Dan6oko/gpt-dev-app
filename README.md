# God of IT Developer - Application Complète

Ce projet est une plateforme de gestion utilisateur avec :
- Authentification sécurisée via Supabase
- Dashboard admin
- Multilingue FR / EN
- Paiement Stripe & PayPal
- Intégration GPT personnalisée

## Installation

1. Cloner le repo ou extraire le zip
2. Lancer :
```bash
npm install
npm run dev
```

## Environnement

Créer un fichier `.env.local` avec :

```
NEXT_PUBLIC_SUPABASE_URL=https://<ton-url>.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ta-clé
```

## Déploiement

Push vers GitHub, connecter à Vercel, ajouter les clés d'environnement.
