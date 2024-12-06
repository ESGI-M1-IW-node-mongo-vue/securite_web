# Rendu sécurité du web


## Prérequis
- Node.js
- npm (qui est installé avec Node.js)
- le DATABASE_URL qu'on vous a fourni par mail

## Créer les fichiers .env

Dans le dossier `secure` et `vulnerable`, créer un fichier `.env` avec le contenu du mail:
```dotenv
DATABASE_URL=postgres://exemple:password@host:port/dbname
```

## Installer les dépendences
```shell
npm install --prefix secure && npm install --prefix vulnerable
```

## Pour lancer une application en local
```shell
cd secure && npm run dev
```
ou
```shell
cd vulnerable && npm run dev
```

Les applications sont accessibles sur `http://localhost:3000`

Si jamais votre JWT expire supprimer votre localstorage et rendez-vous sur `http://localhost:3000/login` pour vous reconnecter.

La base de données est hébergée et possède déjà des utilisateurs et des tweets. Vous pouvez vous connecter avec les identifiants suivants :
- email: `pouet@pouet.fr`
- password: `pouet`

