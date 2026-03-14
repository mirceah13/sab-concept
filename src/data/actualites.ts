export interface Actualite {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string;
  content: string;
}

export const actualites: Actualite[] = [
  {
    slug: 'mise-en-ligne-du-site',
    title: 'Mise en ligne du site',
    date: '06/04/2022',
    excerpt: 'Ne manquez plus rien sur l\'activité de Sab Concept.',
    image: '/images/news/med/11.webp',
    content: `<p>Notre site Internet est désormais en ligne ! Retrouvez toutes les informations sur nos prestations, nos chantiers en images et n'hésitez pas à nous contacter pour obtenir un devis gratuit.</p>
<p>Basée à Goult (84220), l'entreprise Sab Concept intervient dans les 50 km aux alentours pour tous vos travaux de construction, rénovation et aménagement intérieur.</p>`,
  },
  {
    slug: 'bientot-ici-nos-actus',
    title: 'Bientôt ici, nos actus, notre agenda, nos promotions',
    date: '06/04/2022',
    excerpt: 'Bienvenue sur notre site Internet fraîchement mis en ligne !',
    image: '/images/news/med/12.webp',
    content: `<p>Bienvenue sur notre site Internet fraîchement mis en ligne !</p>
<p>Retrouvez régulièrement sur cette page les dernières actualités de notre société : nouveaux chantiers terminés, promotions en cours, agenda de nos interventions et bien plus encore.</p>`,
  },
  {
    slug: 'gros-plan-sur-l-actualite-en-ligne',
    title: 'Gros plan sur l\'actualité en ligne',
    date: '06/04/2022',
    excerpt: 'Retrouvez régulièrement sur cette page les dernières actualités de notre société.',
    image: '/images/news/69.jpeg',
    content: `<p>Retrouvez régulièrement sur cette page les dernières actualités de notre société.</p>
<p>Nouveaux chantiers, conseils en rénovation, tendances décoration, promotions… Nous vous donnons rendez-vous ici pour partager avec vous l'actualité de Sab Concept.</p>`,
  },
];
