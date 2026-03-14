export interface Service {
  id: string;
  title: string;
  anchor: string;
  description: string;
  details: string[];
  icon: string; // emoji or path
}

export const services: Service[] = [
  {
    id: 'macon',
    title: 'Maçonnerie générale',
    anchor: '#macon',
    icon: '🧱',
    description:
      'Votre artisan maçon prend en charge vos travaux de construction avec rigueur, efficacité et professionnalisme.',
    details: [
      'Terrassement',
      'Fondations',
      'Coffrage',
      'Élévation de murs',
      'Utilisation de pierres sèches pour les façades (technique très répandue dans la région)',
    ],
  },
  {
    id: 'iso',
    title: 'Isolation par l\'intérieur',
    anchor: '#iso',
    icon: '🏠',
    description:
      'Nous réalisons votre isolation intérieure avec des matériaux performants et abordables : laine de roche ou laine de verre.',
    details: [
      'Laine de roche',
      'Laine de verre',
      'Isolation thermique et phonique',
    ],
  },
  {
    id: 'revetement',
    title: 'Revêtement de sol et de mur',
    anchor: '#revetement',
    icon: '🪚',
    description:
      'Confiez-nous tous vos travaux d\'aménagement intérieur.',
    details: [
      'Pose de revêtement de sol dur ou souple : carrelage, parquet, moquette...',
      'Peinture et enduit décoratif',
      'Pose de papier peint',
    ],
  },
  {
    id: 'menuis',
    title: 'Menuiserie intérieure et extérieure',
    anchor: '#menuis',
    icon: '🪟',
    description:
      'Fabricant de fenêtres en bois de chêne sur mesure, Sab Concept assure également la pose de menuiseries en aluminium ou en PVC.',
    details: [
      'Fenêtres en bois de chêne sur mesure',
      'Menuiseries en aluminium',
      'Menuiseries en PVC',
    ],
  },
  {
    id: 'elec',
    title: 'Électricité',
    anchor: '#elec',
    icon: '⚡',
    description:
      'Notre équipe prend en charge l\'ensemble de vos travaux d\'électricité.',
    details: [
      'Installation complète ou rénovation de réseau électrique',
      'Mise en sécurité',
      'Courant faible et fort',
    ],
  },
  {
    id: 'plomb',
    title: 'Plomberie',
    anchor: '#plomb',
    icon: '🔧',
    description:
      'Confiez-nous tous vos travaux de plomberie en neuf ou en rénovation.',
    details: [
      'Création ou rénovation de réseau de plomberie',
      'Fourniture et pose des sanitaires : douche, baignoire, vasque, toilettes…',
      'Installation de chauffe-eau',
    ],
  },
];
