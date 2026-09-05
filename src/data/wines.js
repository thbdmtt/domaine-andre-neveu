export const order = [
  "monts-damnes",
  "le-manoir",
  "lf-calcaire",
  "grand-fricambault-silex",
  "vieilles-vignes-rouge",
  "grand-fricambault-rouge",
  "grand-fricambault-rose"
];

export const winesByLanguage = {
  fr: {
    "monts-damnes": {
      kicker: "Blanc · Grand Terroir de Chavignol",
      name: "Sancerre Blanc — Les Monts Damnés",
      cuvee: "Les Monts Damnés",
      color: "blanc",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Cote des Monts Damnés"],
        ["Sol", "Argilo-calcaire (Terres Blanches)"],
        ["Cépage", "100% Sauvignon Blanc"],
        ["Vendanges", "Exclusives à la main"],
        ["Vinification", "Cuves thermo-régulées sur lies fines"],
        ["Garde", "À boire jeune ou garde 10 ans et plus"],
        ["Température", "10°C - 12°C"]
      ],
      tasting: {
        eye: "Or pâle, reflets argentés brillants",
        nose: "Premier nez très intense à dominante variétale (buis, genêt, bourgeon de cassis) qui s'ouvre après aération sur la mirabelle, la poire William et la fleur d'acacia.",
        mouth: "Attaque souple, la bouche est pleine et grasse. Finale complexe avec persistance aromatique sur le souci, l'iris et de jolies nuances fruitées."
      },
      pairings: ["Poissons et viandes blanches en sauces", "Crottin de Chavignol affiné", "Homard grillé"],
      note: "Issu de la mythique et vertigineuse Côte des Monts Damnés, une cuvée d'une densité et d'une minéralité remarquables.",
      packshot: "/wines/packshots/packshot-monts-damnes.png",
      bottle: "/wines/packshots/bottle-monts-damnes.png"
    },
    "le-manoir": {
      kicker: "Blanc · Vieilles Vignes",
      name: "Sancerre Blanc — Le Manoir",
      cuvee: "Le Manoir",
      color: "blanc",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Le Manoir"],
        ["Sol", "Calcaire caillottes"],
        ["Cépage", "100% Sauvignon Blanc"],
        ["Vignes", "Plus de 50 ans"],
        ["Garde", "3 à 7 ans"],
        ["Température", "9°C - 11°C"]
      ],
      tasting: {
        eye: "Jaune pâle, reflets dorés limpides",
        nose: "Nez intense sur un profil variétal-fermentaire : fruits exotiques, pêche de vigne et agrumes mûrs.",
        mouth: "Arômes intenses, agréable rondeur, bel équilibre et remarquable longueur en bouche."
      },
      pairings: ["Apéritif", "Poissons de Loire au beurre blanc", "Viandes blanches rôties", "Fromages de chèvre"],
      note: "La générosité des vieilles vignes de 50 ans alliée à la fraîcheur ciselée des caillottes.",
      packshot: "/wines/packshots/packshot-le-manoir.png",
      bottle: "/wines/packshots/bottle-le-manoir.png"
    },
    "lf-calcaire": {
      kicker: "Blanc · Caillottes & Calcaire",
      name: "Sancerre Blanc — LF Calcaire",
      cuvee: "LF Calcaire (Les Longues Fins)",
      color: "blanc",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Les Longues Fins"],
        ["Sol", "100% Calcaire pierreux"],
        ["Cépage", "100% Sauvignon Blanc"],
        ["Vinification", "Basse température en cuve inox"],
        ["Garde", "2 à 4 ans"],
        ["Température", "9°C - 10°C"]
      ],
      tasting: {
        eye: "Jaune pâle cristallin, reflets argentés",
        nose: "Nez intense et vif sur la fleur de sureau, la menthe verte froissée et la rhubarbe.",
        mouth: "Gras et rond en bouche, parfaitement équilibré par une trame minérale saline très désaltérante."
      },
      pairings: ["Apéritif raffiné", "Plateau de fruits de mer", "Poissons en sauce légère"],
      note: "Un vin d'une éclatante pureté calcaire, d'une vivacité exemplaire.",
      packshot: "/wines/packshots/packshot-lf-calcaire.png",
      bottle: "/wines/packshots/bottle-lf-calcaire.png"
    },
    "grand-fricambault-silex": {
      kicker: "Blanc · Terroir de Silex",
      name: "Sancerre Blanc — Le Grand Fricambault Silex",
      cuvee: "Le Grand Fricambault",
      color: "blanc",
      vintage: 2025,
      commune: "Sancerre",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Coteau de Sancerre"],
        ["Sol", "Silex pur (pierre à fusil)"],
        ["Cépage", "100% Sauvignon Blanc"],
        ["Garde", "5 à 8 ans (accentue sa minéralité)"],
        ["Température", "10°C - 12°C"]
      ],
      tasting: {
        eye: "Jaune pâle aux reflets argentés éclatants",
        nose: "Premier nez minéral et discret sur des notes de bière blanche, de jus de citron et de pierre à fusil.",
        mouth: "Sec, droit et fruité. Typicité minérale fumée très marquée, grande tension racée."
      },
      pairings: ["Huîtres de claire", "Coquillages et crustacés", "Crottin de Chavignol demi-sec"],
      note: "L'expression archétypale du silex sancerrois : tranchant, fumé et d'une noblesse minérale absolue.",
      packshot: "/wines/packshots/packshot-grand-fricambault-silex.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-silex.png"
    },
    "vieilles-vignes-rouge": {
      kicker: "Rouge · Fûts de Chêne",
      name: "Sancerre Rouge — Vieilles Vignes",
      cuvee: "Vieilles Vignes",
      color: "rouge",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Sol", "Argilo-calcaire"],
        ["Cépage", "100% Pinot Noir"],
        ["Vignes", "Plus de 50 ans"],
        ["Élevage", "Fûts de chêne français"],
        ["Garde", "Excellente garde (6 à 10 ans)"],
        ["Température", "14°C - 16°C"]
      ],
      tasting: {
        eye: "Rubis intense profond, reflets grenat chaleureux",
        nose: "Fruits rouges confiturés (cerise burlat), prune, pruneau, avec des arômes toastés de tabac blond et cumin.",
        mouth: "Puissant, dense et tannique. Matière noble et fondue, finale persistante et racée."
      },
      pairings: ["Viandes rouges grillées ou en sauce", "Gibiers", "Fromages affinés"],
      note: "Un grand rouge de gastronomie, structuré et patiné par le chêne français. Stock limité.",
      packshot: "/wines/packshots/packshot-vieilles-vignes-rouge.png",
      bottle: "/wines/packshots/bottle-vieilles-vignes-rouge.png"
    },
    "grand-fricambault-rouge": {
      kicker: "Rouge · Fruit & Finesse",
      name: "Sancerre Rouge — Le Grand Fricambault",
      cuvee: "Le Grand Fricambault",
      color: "rouge",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Sol", "Terres calcaro-siliceuses"],
        ["Cépage", "100% Pinot Noir"],
        ["Élevage", "Cuves thermo-régulées (fruit frais)"],
        ["Garde", "3 à 5 ans"],
        ["Température", "10°C - 12°C"]
      ],
      tasting: {
        eye: "Teinte rubis grenat, limpide et brillante",
        nose: "Arômes typés de cerise mûre et de pivoine, soulignés d'une pointe d'épice et de graphite.",
        mouth: "Rond, souple et léger. Tanins soyeux, très gouleyant et fruité."
      },
      pairings: ["Charcuteries de terroir", "Volailles rôties", "Fromages de chèvre"],
      note: "La gourmandise et la fraîcheur du Pinot Noir de Loire dans son expression la plus conviviale.",
      packshot: "/wines/packshots/packshot-grand-fricambault-rouge.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-rouge.png"
    },
    "grand-fricambault-rose": {
      kicker: "Rosé · Vin de Saignée",
      name: "Sancerre Rosé — Le Grand Fricambault",
      cuvee: "Le Grand Fricambault",
      color: "rose",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Sol", "Terroirs calcaro-siliceux"],
        ["Cépage", "100% Pinot Noir"],
        ["Vinification", "Rosé de saignée en cuve inox"],
        ["Garde", "1 à 2 ans"],
        ["Température", "8°C - 10°C"]
      ],
      tasting: {
        eye: "Robe rose groseille aux reflets saumon délicats",
        nose: "Nez très intense sur des notes de fraise des bois, pêche de vigne et fleurs printanières.",
        mouth: "Fruité croquant, vivifiant et rafraîchissant."
      },
      pairings: ["Apéritif estival", "Salades gourmandes", "Grillades au sarment"],
      note: "Un rosé de saignée d'une élégance rare, fruité et vibrant, idéal pour les beaux jours.",
      packshot: "/wines/packshots/packshot-grand-fricambault-rose.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-rose.png"
    }
  },
  en: {
    "monts-damnes": {
      kicker: "White · Legendary Chavignol Terroir",
      name: "Sancerre White — Les Monts Damnés",
      cuvee: "Les Monts Damnés",
      color: "blanc",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Cote des Monts Damnés"],
        ["Soil", "Limestone-clay (Terres Blanches)"],
        ["Grape", "100% Sauvignon Blanc"],
        ["Harvest", "Exclusively hand-picked"],
        ["Aging", "Enjoy young or cellar 10+ years"],
        ["Serving", "10°C - 12°C"]
      ],
      tasting: {
        eye: "A very pale platinum colour, with gold and green highlights.",
        nose: "Intense and complex aromas showing great maturity, dominated by fruit, menthol and delicate spices.",
        mouth: "Fullness, weight, and roundness married with exquisite freshness and a brisk, peppery finish."
      },
      pairings: ["Fine fish in sauce", "Aged Chavignol goat cheese", "Grilled lobster"],
      note: "From the mythical, vertiginous slope of Monts Damnés, celebrated for its mineral concentration.",
      packshot: "/wines/packshots/packshot-monts-damnes.png",
      bottle: "/wines/packshots/bottle-monts-damnes.png"
    },
    "le-manoir": {
      kicker: "White · Old Vines (50+ years)",
      name: "Sancerre White — Le Manoir",
      cuvee: "Le Manoir",
      color: "blanc",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Terroir", "Le Manoir"],
        ["Soil", "Stony limestone (Caillottes)"],
        ["Grape", "100% Sauvignon Blanc"],
        ["Vine Age", "Over 50 years old"],
        ["Aging", "3 to 7 years"],
        ["Serving", "9°C - 11°C"]
      ],
      tasting: {
        eye: "Pale yellow with limpid golden reflections.",
        nose: "Intense aromatics of exotic fruit, vineyard peach, and ripe citrus.",
        mouth: "Pleasant roundness, deep balance, and remarkable length."
      },
      pairings: ["Aperitif", "Loire fish with beurre blanc", "Roasted white meats"],
      note: "The generosity of 50-year-old vines combined with the chiseled precision of Caillottes limestone.",
      packshot: "/wines/packshots/packshot-le-manoir.png",
      bottle: "/wines/packshots/bottle-le-manoir.png"
    },
    "lf-calcaire": {
      kicker: "White · Limestone Caillottes",
      name: "Sancerre White — LF Calcaire",
      cuvee: "LF Calcaire",
      color: "blanc",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Soil", "100% Stony limestone"],
        ["Grape", "100% Sauvignon Blanc"],
        ["Aging", "2 to 4 years"],
        ["Serving", "9°C - 10°C"]
      ],
      tasting: {
        eye: "Crystal clear pale yellow with silver tints.",
        nose: "Vivid notes of elderflower, fresh mint, and rhubarb.",
        mouth: "Fat and rounded on the palate, backed by a thirst-quenching saline minerality."
      },
      pairings: ["Refined aperitifs", "Seafood platters", "Delicate fish"],
      note: "A pure and vibrant expression of Sancerre's limestone plateau.",
      packshot: "/wines/packshots/packshot-lf-calcaire.png",
      bottle: "/wines/packshots/bottle-lf-calcaire.png"
    },
    "grand-fricambault-silex": {
      kicker: "White · Pure Flint (Silex)",
      name: "Sancerre White — Le Grand Fricambault Silex",
      cuvee: "Le Grand Fricambault",
      color: "blanc",
      vintage: 2025,
      commune: "Sancerre",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Soil", "Pure flint (Gunflint clay)"],
        ["Grape", "100% Sauvignon Blanc"],
        ["Aging", "5 to 8 years"],
        ["Serving", "10°C - 12°C"]
      ],
      tasting: {
        eye: "Pale yellow with brilliant silvery tints.",
        nose: "Discreet mineral nose with hints of citrus and smoky gunflint.",
        mouth: "Bone dry, straight, and deeply mineral with classic smoky flint notes."
      },
      pairings: ["Oysters", "Shellfish", "Demi-sec Crottin de Chavignol"],
      note: "The quintessential expression of Sancerrois silex: razor-sharp, smoky, and aristocratic.",
      packshot: "/wines/packshots/packshot-grand-fricambault-silex.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-silex.png"
    },
    "vieilles-vignes-rouge": {
      kicker: "Red · French Oak Aged",
      name: "Sancerre Red — Vieilles Vignes",
      cuvee: "Vieilles Vignes",
      color: "rouge",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Soil", "Clay-limestone"],
        ["Grape", "100% Pinot Noir"],
        ["Vessel", "French oak barrels"],
        ["Aging", "6 to 10 years"],
        ["Serving", "14°C - 16°C"]
      ],
      tasting: {
        eye: "Intense deep ruby with warm garnet highlights.",
        nose: "Jammy red fruit, ripe plum, toasted tobacco, cumin, and graphite.",
        mouth: "Powerful, dense, and structured with velvety tannins."
      },
      pairings: ["Grilled red meats", "Venison & game", "Mature cheeses"],
      note: "A serious gastronomic red, patinated by French oak. Limited stock.",
      packshot: "/wines/packshots/packshot-vieilles-vignes-rouge.png",
      bottle: "/wines/packshots/bottle-vieilles-vignes-rouge.png"
    },
    "grand-fricambault-rouge": {
      kicker: "Red · Fruit & Freshness",
      name: "Sancerre Red — Le Grand Fricambault",
      cuvee: "Le Grand Fricambault",
      color: "rouge",
      vintage: 2024,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Soil", "Siliceous limestone"],
        ["Grape", "100% Pinot Noir"],
        ["Aging", "3 to 5 years"],
        ["Serving", "10°C - 12°C"]
      ],
      tasting: {
        eye: "Bright, limpid ruby garnet.",
        nose: "Ripe cherry, peony, and a hint of spice.",
        mouth: "Round, supple, light, and wonderfully fruity."
      },
      pairings: ["Artisanal charcuterie", "Roast poultry", "Goat cheese"],
      note: "The charming, convivial side of Loire Valley Pinot Noir.",
      packshot: "/wines/packshots/packshot-grand-fricambault-rouge.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-rouge.png"
    },
    "grand-fricambault-rose": {
      kicker: "Rosé · Saignée Method",
      name: "Sancerre Rosé — Le Grand Fricambault",
      cuvee: "Le Grand Fricambault",
      color: "rose",
      vintage: 2025,
      commune: "Chavignol",
      facts: [
        ["Appellation", "Sancerre Contrôlée"],
        ["Soil", "Siliceous limestone"],
        ["Grape", "100% Pinot Noir"],
        ["Aging", "1 to 2 years"],
        ["Serving", "8°C - 10°C"]
      ],
      tasting: {
        eye: "Bright currant pink with delicate salmon tints.",
        nose: "Wild strawberry, vine peach, and spring flowers.",
        mouth: "Crisp, lively, and wonderfully refreshing."
      },
      pairings: ["Summer aperitifs", "Gourmet salads", "Barbecue"],
      note: "A rare saignée rosé of extraordinary finesse and vibrancy.",
      packshot: "/wines/packshots/packshot-grand-fricambault-rose.png",
      bottle: "/wines/packshots/bottle-grand-fricambault-rose.png"
    }
  }
};
