export interface Chantier {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  thumbnail: string;
  content: string;
  gallery: string[];
}

export const chantiers: Chantier[] = [
  {
    slug: 'renovation-terrasse-apt',
    title: 'Rénovation terrasse à Apt',
    date: '22/09/2022',
    excerpt: 'Notre client nous a fait confiance pour concevoir sa terrasse...',
    thumbnail: '/images/news/70.jpeg',
    content: `<p>Notre client nous a fait confiance pour concevoir sa terrasse :</p>
<ul>
  <li>Création d'une dalle en béton</li>
  <li>Réalisation d'un muret en pierre sèche</li>
  <li>Pose d'un carrelage extérieur</li>
  <li>Pose d'une barrière en fer forgé</li>
</ul>`,
    gallery: [
      '/images/gallery/35/40.jpg',
      '/images/gallery/35/37.jpg',
      '/images/gallery/35/36.jpg',
      '/images/gallery/35/38.jpg',
      '/images/gallery/35/39.jpg',
    ],
  },
  {
    slug: 'pose-menuiserie-apt',
    title: 'Pose de menuiserie à Apt',
    date: '22/09/2022',
    excerpt: 'Pose de menuiseries sur mesure à Apt par notre équipe qualifiée.',
    thumbnail: '/images/news/71.jpeg',
    content: `<p>Notre équipe a réalisé la pose de menuiseries sur mesure chez un particulier à Apt. Travail soigné, dans le respect des délais impartis.</p>`,
    gallery: [],
  },
  {
    slug: 'renovation-salle-de-bain-apt',
    title: 'Rénovation complète d\'une salle de bain à Apt',
    date: '22/09/2022',
    excerpt: 'Rénovation complète d\'une salle de bain — plomberie, carrelage, sanitaires.',
    thumbnail: '/images/news/72.jpeg',
    content: `<p>Rénovation complète d'une salle de bain à Apt comprenant :</p>
<ul>
  <li>Dépose des anciens équipements</li>
  <li>Pose de carrelage mural et au sol</li>
  <li>Installation de nouveaux sanitaires</li>
  <li>Plomberie complète</li>
</ul>`,
    gallery: [],
  },
  {
    slug: 'renovation-cuisine-apt',
    title: 'Rénovation complète d\'une cuisine à Apt',
    date: '22/09/2022',
    excerpt: 'Rénovation complète d\'une cuisine — carrelage, peinture, aménagement.',
    thumbnail: '/images/news/73.jpeg',
    content: `<p>Nous avons réalisé la rénovation complète d'une cuisine à Apt :</p>
<ul>
  <li>Pose de carrelage au sol</li>
  <li>Peinture et enduit</li>
  <li>Travaux d'électricité</li>
  <li>Plomberie</li>
</ul>`,
    gallery: [],
  },
  {
    slug: 'renovation-chambre-apt',
    title: 'Rénovation d\'une chambre à Apt',
    date: '22/09/2022',
    excerpt: 'Rénovation et aménagement d\'une chambre à Apt.',
    thumbnail: '/images/news/74.jpeg',
    content: `<p>Rénovation et aménagement intérieur d'une chambre à Apt : peinture, revêtement de sol et menuiserie intérieure.</p>`,
    gallery: [],
  },
  {
    slug: 'renovation-suite-parentale-apt',
    title: 'Rénovation suite parentale à Apt',
    date: '22/09/2022',
    excerpt: 'Rénovation complète d\'une suite parentale à Apt.',
    thumbnail: '/images/news/75.jpeg',
    content: `<p>Rénovation complète d'une suite parentale à Apt : salle de bain attenante, menuiserie, peinture et revêtements de sol.</p>`,
    gallery: [],
  },
  {
    slug: 'renovation-escalier-apt',
    title: 'Rénovation escalier ancien sur Apt',
    date: '22/09/2022',
    excerpt: 'Rénovation et restauration d\'un escalier ancien sur la commune d\'Apt.',
    thumbnail: '/images/news/med/10.webp',
    content: `<p>Rénovation et restauration d'un escalier ancien sur la commune d'Apt. Travail minutieux alliant techniques modernes et respect du patrimoine bâti.</p>`,
    gallery: [],
  },
];
