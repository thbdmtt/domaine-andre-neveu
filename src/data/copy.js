export const copy = {
  fr: {
    nav: { brand: 'Domaine André Neveu', domaine: 'Le domaine', terroirs: 'Les sols', vins: 'Les vins', chai: 'Le chai', visiter: 'Venir', callUs: '02 48 54 04 48' },
    hero: {
      eyebrow: 'Vignerons récoltants',
      title: 'Domaine André Neveu',
      sub: 'À Chavignol, le domaine élabore des Sancerre blancs, rouges et rosés sur les terres blanches, les caillottes et les argiles à silex.',
      ctaWines: 'Voir les cuvées', ctaVisit: 'Préparer une visite',
      imageAlt: 'Vignes sur les coteaux de Chavignol, dans le Sancerrois'
    },
    ledger: { label: 'Repères du domaine', items: [
      { value: 'Chavignol', label: 'Implantation du domaine' },
      { value: '3 sols', label: 'Terres blanches, caillottes, silex' },
      { value: '7 cuvées', label: 'Sancerre blanc, rouge et rosé' }
    ]},
    domaine: {
      eyebrow: 'Le domaine', title: 'Une gamme construite autour des sols de Chavignol',
      p1: 'Le Domaine André Neveu se présente comme vigneron récoltant à Chavignol. Son catalogue relie chaque cuvée à une parcelle, un sol et une conduite de cave décrits séparément.',
      p2: 'Les Monts Damnés, les Longues Fins et le Grand Fricambault donnent ainsi des lectures distinctes du sauvignon blanc et du pinot noir.',
      captionMain: 'Les coteaux autour de Chavignol', captionSecondary: 'La Côte des Monts Damnés',
      marker: 'Chavignol · 18300 Sancerre'
    },
    terroirs: {
      eyebrow: 'Géologie', title: 'Trois matières, trois points de départ',
      intro: 'Le site du domaine distingue trois familles de sols présentes dans le Sancerrois. Les photographies ci-dessous proviennent de ses propres pages de présentation.',
      sample: 'Échantillon de sol publié par le domaine', landscape: 'Vue de parcelle',
      tabs: {
        damnes: { title: 'Les Monts Damnés', sub: 'Terres blanches', desc: 'Un coteau de Chavignol sur des marnes argilo-calcaires. La cuvée Les Monts Damnés est issue de cette parcelle en forte pente.', note: 'Argilo-calcaire · Sauvignon blanc' },
        caillottes: { title: 'Les Caillottes', sub: 'Calcaire pierreux', desc: 'Des sols calcaires où les pierres affleurent. Le Manoir et LF Calcaire sont présentés par le domaine comme issus de cette famille de sols.', note: 'Calcaire · Sauvignon blanc' },
        silex: { title: 'Le Silex', sub: 'Argiles à silex', desc: 'Sur le coteau de Sancerre, le Grand Fricambault blanc est rattaché par le domaine aux argiles à silex.', note: 'Silex · Sauvignon blanc' }
      }
    },
    vins: {
      eyebrow: 'Le catalogue', title: 'Sept cuvées publiées par le domaine',
      desc: 'Les millésimes et disponibilités évoluent. Contactez le domaine avant toute commande ou déplacement.',
      filterAll: 'Tous', filterBlanc: 'Blancs', filterRouge: 'Rouges', filterRose: 'Rosé',
      detailsTitle: 'Dégustation', factsTitle: 'Repères techniques', pairingsTitle: 'À table', contactForPrice: 'Tarifs et disponibilités',
      selectLabel: 'Choisir une cuvée', bottleAlt: 'Bouteille', archiveNote: 'Informations issues du catalogue archivé du domaine.'
    },
    chai: {
      eyebrow: 'Vinification', title: 'Cuves inox, lies fines et fûts de chêne',
      p1: 'Les fiches du domaine mentionnent des cuves thermorégulées pour plusieurs cuvées blanches et rouges, avec un travail sur lies fines pour Les Monts Damnés.',
      p2: 'La cuvée rouge Vieilles Vignes est présentée comme vinifiée et élevée en fûts de chêne français de plusieurs vins.',
      caption: 'Le chai du domaine, photographies publiées sur son site.'
    },
    visiter: {
      eyebrow: 'Le caveau', title: 'Préparer votre passage à Chavignol',
      desc: 'Les coordonnées et horaires ci-dessous sont ceux publiés par le domaine. Un appel préalable est conseillé.',
      hoursTitle: 'Horaires publiés', hoursWeek: 'Lundi au vendredi · 9 h–11 h 30 · 14 h–17 h 30', hoursSat: 'Samedi · sur rendez-vous', hoursSun: 'Dimanche · fermé', appointmentNote: 'Horaires à confirmer avant votre déplacement.',
      addressTitle: 'Adresse', address: 'Chavignol, 18300 Sancerre — France', gps: '47.33799° N · 2.80320° E', phone: '02 48 54 04 48', email: 'chavignol@orange.fr',
      callBtn: 'Appeler le domaine', emailBtn: 'Écrire au domaine', mapBtn: 'Ouvrir l’itinéraire', contactCardTitle: 'Contact caveau', contactCardDesc: 'Pour une visite ou une dégustation, contactez directement le domaine.'
    },
    export: {
      eyebrow: 'Distribution', title: 'Neuf pays répertoriés',
      desc: 'Le site du domaine répertorie des distributeurs dans les neuf pays suivants.', proBadge: 'Professionnels', proBtn: 'Contacter le domaine',
      countries: [['Allemagne','allemagne--c170fad9aa.png'],['Belgique','belgique--1ca27aee53.png'],['Danemark','danemark--22062d6236.png'],['États-Unis','etats-unis--3432941e71.png'],['Grande-Bretagne','grande-bretagne--e84b49ed7d.png'],['Hong Kong','hong-kong--15f5bdfbbd.png'],['Irlande','irlande--691e1fbea1.png'],['Italie','italie--aebf0ef1c9.png'],['Japon','japon--4f0f88ca21.png']].map(([name,file]) => ({ name, flag: `/media/export/${file}` })),
      proNote: 'Importateurs, cavistes et restaurateurs peuvent demander les fiches techniques et les conditions commerciales par courriel.'
    },
    footer: { legalNotice: 'L’abus d’alcool est dangereux pour la santé. À consommer avec modération.', copyright: '© Domaine André Neveu', credits: 'Proposition de refonte · Atelier Viticole', description: 'Vignerons récoltants à Chavignol. Vins de Sancerre issus des terres blanches, des caillottes et des argiles à silex.' }
  },
  en: {
    nav: { brand: 'Domaine André Neveu', domaine: 'The estate', terroirs: 'Soils', vins: 'Wines', chai: 'The cellar', visiter: 'Visit', callUs: '+33 2 48 54 04 48' },
    hero: {
      eyebrow: 'Winegrowers in Chavignol', title: 'Domaine André Neveu',
      sub: 'In Chavignol, the estate produces white, red and rosé Sancerre from Terres Blanches, limestone Caillottes and flint clay soils.',
      ctaWines: 'See the wines', ctaVisit: 'Plan a visit', imageAlt: 'Vineyards on the slopes of Chavignol in Sancerre'
    },
    ledger: { label: 'Estate facts', items: [
      { value: 'Chavignol', label: 'The estate’s village' }, { value: '3 soils', label: 'Terres Blanches, limestone, flint' }, { value: '7 wines', label: 'White, red and rosé Sancerre' }
    ]},
    domaine: {
      eyebrow: 'The estate', title: 'A range shaped by the soils of Chavignol',
      p1: 'Domaine André Neveu presents itself as a winegrower in Chavignol. Its catalogue links each wine to a plot, a soil type and specific cellar work.',
      p2: 'Monts Damnés, Les Longues Fins and Le Grand Fricambault offer distinct readings of Sauvignon Blanc and Pinot Noir.',
      captionMain: 'The hills around Chavignol', captionSecondary: 'The Monts Damnés slope', marker: 'Chavignol · 18300 Sancerre'
    },
    terroirs: {
      eyebrow: 'Geology', title: 'Three materials, three starting points',
      intro: 'The estate website identifies three soil families in Sancerre. The photographs below come from its own presentation pages.', sample: 'Soil sample published by the estate', landscape: 'Vineyard view',
      tabs: {
        damnes: { title: 'Les Monts Damnés', sub: 'Terres Blanches', desc: 'A Chavignol hillside on clay-limestone marl. Les Monts Damnés comes from this steep plot.', note: 'Clay-limestone · Sauvignon Blanc' },
        caillottes: { title: 'Les Caillottes', sub: 'Stony limestone', desc: 'Limestone soils with stones at the surface. Le Manoir and LF Calcaire are linked to this soil family by the estate.', note: 'Limestone · Sauvignon Blanc' },
        silex: { title: 'Flint', sub: 'Flint clay', desc: 'On the Sancerre hillside, the estate links its white Grand Fricambault to flint clay soils.', note: 'Flint · Sauvignon Blanc' }
      }
    },
    vins: {
      eyebrow: 'The range', title: 'Seven wines listed by the estate', desc: 'Vintages and availability change. Contact the estate before ordering or travelling.',
      filterAll: 'All', filterBlanc: 'White', filterRouge: 'Red', filterRose: 'Rosé', detailsTitle: 'Tasting', factsTitle: 'Technical details', pairingsTitle: 'At the table', contactForPrice: 'Prices and availability', selectLabel: 'Choose a wine', bottleAlt: 'Bottle of', archiveNote: 'Information from the estate’s archived catalogue.'
    },
    chai: {
      eyebrow: 'Winemaking', title: 'Stainless steel, fine lees and oak barrels',
      p1: 'The estate sheets mention temperature-controlled tanks for several white and red wines, with fine-lees ageing for Les Monts Damnés.',
      p2: 'The red Vieilles Vignes is described as vinified and aged in previously used French oak barrels.', caption: 'The estate cellar, in photographs published on its website.'
    },
    visiter: {
      eyebrow: 'The cellar door', title: 'Plan your visit to Chavignol', desc: 'These details and hours are those published by the estate. Calling ahead is advised.',
      hoursTitle: 'Published hours', hoursWeek: 'Monday to Friday · 9–11:30 am · 2–5:30 pm', hoursSat: 'Saturday · by appointment', hoursSun: 'Sunday · closed', appointmentNote: 'Please confirm before travelling.',
      addressTitle: 'Address', address: 'Chavignol, 18300 Sancerre — France', gps: '47.33799° N · 2.80320° E', phone: '+33 2 48 54 04 48', email: 'chavignol@orange.fr',
      callBtn: 'Call the estate', emailBtn: 'Email the estate', mapBtn: 'Open directions', contactCardTitle: 'Cellar contact', contactCardDesc: 'Contact the estate directly to arrange a visit or tasting.'
    },
    export: {
      eyebrow: 'Distribution', title: 'Nine countries listed', desc: 'The estate website lists distributors in the following nine countries.', proBadge: 'Wine trade', proBtn: 'Contact the estate',
      countries: [['Germany','allemagne--c170fad9aa.png'],['Belgium','belgique--1ca27aee53.png'],['Denmark','danemark--22062d6236.png'],['United States','etats-unis--3432941e71.png'],['United Kingdom','grande-bretagne--e84b49ed7d.png'],['Hong Kong','hong-kong--15f5bdfbbd.png'],['Ireland','irlande--691e1fbea1.png'],['Italy','italie--aebf0ef1c9.png'],['Japan','japon--4f0f88ca21.png']].map(([name,file]) => ({ name, flag: `/media/export/${file}` })),
      proNote: 'Importers, merchants and restaurants can request technical sheets and trade terms by email.'
    },
    footer: { legalNotice: 'Alcohol abuse is harmful to health. Drink in moderation.', copyright: '© Domaine André Neveu', credits: 'Redesign proposal · Atelier Viticole', description: 'Winegrowers in Chavignol. Sancerre wines from Terres Blanches, limestone Caillottes and flint clay soils.' }
  }
};
