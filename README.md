# Domaine André Neveu — proposition de refonte

Démonstrateur React/Vite construit à partir du kit d’identité sourcé du Domaine André Neveu. La direction graphique reprend le papier ivoire de l’étiquette, les tons du flacon et les gris-olive des sols publiés par le domaine.

Les contenus proviennent de l’archive collectée le 5 septembre 2026. Les millésimes, disponibilités, horaires, droits sur les médias, typographies et tracé de l’emblème doivent être confirmés avant toute mise en production. Le démonstrateur porte donc une directive `noindex`.

## Développement

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run preview
```

Le déploiement GitHub Pages existant est déclenché uniquement lors d’un push sur `main`. Cette refonte locale ne le modifie pas tant qu’elle n’est pas publiée.

## Provenance du kit

- `public/brand/brand-tokens.json` : palette, prélèvements et propositions typographiques ;
- `public/brand/brand-evidence.json` : provenance et limites du signe vectorisé ;
- `public/brand/legacy/` : anciens emblèmes conservés pour comparaison ;
- `public/media/` et `public/wines/` : copies de travail issues de l’archive du domaine.
