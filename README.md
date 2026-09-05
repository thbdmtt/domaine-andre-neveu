# Domaine André Neveu — Site du domaine

Application React (Vite) reproduisant fidèlement la proposition de refonte web pour le **Domaine André Neveu** à Chavignol (AOC Sancerre) : hero grand angle, atlas géologique interactif des 3 terroirs (Monts Damnés, Caillottes, Silex), studio de dégustation des 7 cuvées artisanales, galerie du chai, repères de visite/caveau et espace export international.

## Site publié

Le site est déployé automatiquement sur GitHub Pages à chaque mise à jour de la branche `main` :
👉 **[thbdmtt.github.io/domaine-andre-neveu](https://thbdmtt.github.io/domaine-andre-neveu/)**

## Lancer en développement

```bash
npm install
npm run dev
```

Ouvre l'application sur le serveur de développement local (par défaut http://localhost:5173 ou 5174).

## Compiler pour la production

```bash
npm run build
```

Le site statique optimisé est généré dans `dist/`. Pour prévisualiser le rendu de production :

```bash
npm run preview
```

## Structure du projet

- `src/components/` — composants modulaires (Nav, Hero, Domaine, Terroirs, Wines, Cellar, Visiting, Export, Footer, QuickMobileBar, Icons)
- `src/data/` — fiches des 7 cuvées (`wines.js`), textes bilingues FR/EN (`copy.js`)
- `src/utils/` — utilitaire de résolution d'actifs (`asset.js`) compatible GitHub Pages et domaines personnalisés
- `src/styles/` — variables CSS de terroir, typographies et styles de base
- `public/` — identité de marque vectorielle (`brand/`), photographies d'époque et terroirs (`media/`), packshots HD des 7 cuvées (`wines/`), `robots.txt`, `sitemap.xml`
