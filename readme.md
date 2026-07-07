- installer nodejs 20
- démarrer docker
- installer nodemon : "npm install nodemon"
- créer le fichier .env.local à la racine du projet (copie du .env) et remplir les variables d'environnement (avec les valeurs que vous voulez)
- démarrer le conteneur pour la bdd : "docker compose --env-file .env.local up" à la racine du projet
- installer les dépendances : "npm install" à la racine du projet
- démarrer le serveur : "npm run dev" à la racine du projet
- installer Postman et tester l'url localhost:3000/api/health pour vérifier que l'API fonctionne




TP : 

- Installez husky : npm install --save-dev husky
- Initialisez le : npx husky init
- faites un premier commit : "git add .", puis "git commit -m 'ajout husky'
- modifiez la config de husky pour ajouter un hook de pre-commit. Dans le fichier .husky/pre-commit, remplacez le contenu existant par "npm run test:unit"
- Faites un commit et vérifiez que tout fonctionne (commit ok)
- Modifiez le fichier src/module/product/createProduct/test/createProductUseCase.spec.ts, ligne 78 : remplacez : " 11000" par "500" : le but est de faire exprès de casser le test
- faites un commit et vérifiez que ça ne fonctionne plus


TP : 

- Supprimez en ligne de commande le dossier .git : "rm -rf .git"  à la racine de votre projet, pour supprimer l'install git
- Re-initialisez git avec : "git init", puis "git add.", puis "git commit -m "exemple de message"
- Créez un repository sur github et liez votre projet à ce repository  (git remote add ....)
- Pushez votre projet : git push origin ...
- Créez .github/workflows/ci.yml avec le contenu suivant :

name: CI

on:
  push:
    branches: [main]


jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      
uses: actions/checkout@v4

      
uses: actions/setup-node@v4
      with:
        node-version: 25
        cache: npm
        cache-dependency-path: package-lock.json

      
run: npm ci

      
run: npm run test:unit

- Refaites un push de votre branche main
- Allez sur le repo github, onglet "actions" et vous devriez voir le workfow executé



name: CI

on:
  push:
    branches: [m1-epsi]

jobs:
  unit-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 25
          cache: npm
          cache-dependency-path: package-lock.json

      - run: npm ci

      - run: npm run test:unit


TP : dans le fichier ci.yml, entre la ligne npm ci et npm run test:unit, ajoutez :

      - run: npm run lint

      - run: npm run build

- refaites un commit, puis push et regardez le résultat sur github action