export interface Profile {
  name: string;
  title: string;
  kicker: string;
  bio: string[];
  stats: { label: string; value: string }[];
  currently: { role: string; stack: string[]; learning: string; available: boolean };
  contact: { email: string; github: string; linkedin: string; location: string };
}

export interface Skill {
  name: string;
  level: number; // 0-100
  category: 'Front' | 'Back' | 'Données' | 'Ops';
}

export interface Experience {
  dates: string;
  role: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Project {
  slug: string;
  num: string;
  year: string;
  title: string;
  description: string;
  tags: string[];
  category: 'Web' | 'API' | 'Outils';
  problem: string;
  contribution: string;
  result: string;
  repo?: string;
  link?: string;
  links?: string[];
}

export interface Education {
  dates: string;
  degree: string;
  school: string;
  note: string;
}

export const profile: Profile = {
  name: 'Tiago',
  title: 'Développeur Full Stack',
  kicker: 'Développeur Full Stack',
  bio: [
    "Développeur Full Stack avec plus de 2 ans d'expérience professionnelle, actuellement en alternance chez Kiabi au sein de l'équipe SOA. Je conçois et développe des applications web de bout en bout — du back-end Spring Boot aux interfaces Angular et React.",
    "Curieux et polyvalent, j'interviens sur des flux de données événementiels, des jobs batch et des refontes front-end complètes. En Master Informatique MSC Pro à Epitech Lille, je renforce mes compétences en architecture et gestion de projet.",
  ],
  stats: [
    { value: '+2 ans', label: "d'expérience" },
    { value: '8+', label: 'projets' },
    { value: 'Lille', label: 'France' },
  ],
  currently: {
    role: 'Développeur Full Stack – Kiabi (SOA)',
    stack: ['Angular 20', 'Spring Boot', 'Java 21', 'Google Pub/Sub'],
    learning: 'Architecture SOA · Spring Batch · Talend',
    available: false,
  },
  contact: {
    email: 'tiagovalinhas@gmail.com',
    github: 'github.com/Tiagovhs',
    linkedin: 'linkedin.com/in/tiago-valinhas/',
    location: 'Lille, France',
  },
};

export const skills: Skill[] = [
  // Front
  { name: 'Angular', level: 88, category: 'Front' },
  { name: 'TypeScript', level: 85, category: 'Front' },
  { name: 'React / React Native', level: 75, category: 'Front' },
  { name: 'VueJS', level: 70, category: 'Front' },
  { name: 'HTML / CSS / SCSS', level: 85, category: 'Front' },
  // Back
  { name: 'Java 21', level: 85, category: 'Back' },
  { name: 'Spring Boot', level: 83, category: 'Back' },
  { name: 'Spring Batch / Talend', level: 70, category: 'Back' },
  { name: 'Elixir / Phoenix', level: 60, category: 'Back' },
  { name: 'JUnit', level: 72, category: 'Back' },
  // Données
  { name: 'PostgreSQL / SQL', level: 80, category: 'Données' },
  { name: 'MongoDB', level: 72, category: 'Données' },
  { name: 'Google Pub/Sub', level: 68, category: 'Données' },
  { name: 'OpenAPI / Swagger', level: 78, category: 'Données' },
  // Ops
  { name: 'Docker', level: 80, category: 'Ops' },
  { name: 'Git / GitHub', level: 85, category: 'Ops' },
  { name: 'Azure', level: 68, category: 'Ops' },
  { name: 'Figma / UML', level: 72, category: 'Ops' },
];

export const experiences: Experience[] = [
  {
    dates: '02/2025 – Présent',
    role: 'Développeur Full Stack – Équipe SOA',
    company: 'Kiabi',
    description:
      "Intégration au sein de l'équipe SOA (Service Oriented Architecture), en charge des flux d'échange de données entre les différentes applications et équipes. Création de flux événementiels (Google Pub/Sub), développement et évolution de jobs batch (Talend, Spring Batch), migration ETL v3→v6, rétro-documentation des flux existants, et développement d'une application Angular 20 interne CRUD avec gestion fine des rôles.",
    tags: ['Java 21', 'Spring Batch', 'Angular 20', 'Google Pub/Sub', 'Talend', 'Jira'],
  },
  {
    dates: '04/2023 – 02/2025',
    role: 'Développeur Full Stack',
    company: 'Infotel Conseil – Projet Infoscope Green',
    description:
      "Développement sur Infoscope Green, une application web d'analyse d'applications selon une approche Green IT. Conception et rédaction de specs fonctionnelles et techniques, implémentation de nouvelles fonctionnalités, refonte globale du front-end, optimisation des requêtes serveur, conteneurisation et gestion des logs.",
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB', 'Docker', 'Azure'],
  },
  {
    dates: '12/2024 – Présent',
    role: 'Développeur Full Stack (Projet universitaire)',
    company: 'Epitech Lille',
    description:
      "Cash manager permettant un paiement par QR code. API Java Spring Boot avec tests unitaires et couverture de test, front en React Native. Mise en panier d'articles, gestion sécurisée du solde, scan de QR codes via l'appareil photo, gestion des erreurs de paiement.",
    tags: ['Java', 'Spring Boot', 'React Native', 'JUnit', 'Figma'],
  },
  {
    dates: '10/2024 – 11/2024',
    role: 'Développeur Full Stack (Projet universitaire)',
    company: 'Epitech Lille',
    description:
      'Projet de 3 semaines en groupe de 4 : outil de gestion des horaires pour salariés avec graphiques et gestion des équipes. API en Elixir/Phoenix, interface web VueJS, interface mobile Flutter avec mode hors connexion et déploiement conteneurisé.',
    tags: ['Elixir', 'Phoenix', 'VueJS', 'Flutter', 'Dart', 'Docker'],
  },
];

export const projects: Project[] = [
  {
    slug: 'infoscope-green',
    num: '01',
    year: '2023',
    title: 'Infoscope Green',
    description:
      "Application web d'analyse Green IT développée chez Infotel Conseil — Spring Boot, React, MongoDB, déployée en conteneur.",
    tags: ['Spring Boot', 'React', 'MongoDB', 'Docker', 'Azure'],
    category: 'Web',
    problem:
      "Fournir aux équipes un outil d'analyse de leurs applications selon une approche Green IT, avec des métriques claires et actionnables.",
    contribution:
      'Refonte globale du front-end React, nouvelles fonctionnalités, optimisation des requêtes serveur, conteneurisation et gestion des logs.',
    result:
      'Application déployée en production, front-end entièrement refondu, performances serveur améliorées.',
  },
  {
    slug: 'cash-manager',
    num: '02',
    year: '2024',
    title: 'Cash Manager QRCode',
    description:
      'Application mobile de paiement par QR code — API Spring Boot avec tests, front React Native, génération APK signé.',
    tags: ['Java', 'Spring Boot', 'React Native', 'JUnit'],
    category: 'Web',
    problem:
      'Réaliser un système de paiement mobile sécurisé par QR code, avec gestion du panier et du solde utilisateur.',
    contribution:
      'Architecture API Spring Boot avec couverture de tests JUnit, interface React Native avec scan QR code via caméra, gestion des erreurs de paiement, génération APK signé.',
    result: 'Livrable fonctionnel présenté à temps, APK déployable, couverture de tests complète.',
  },
  {
    slug: 'gestion-horaires',
    num: '03',
    year: '2024',
    title: 'Outil Gestion Horaires',
    description:
      'Gestion des horaires salariés — API Elixir/Phoenix, interface VueJS, mobile Flutter avec mode hors connexion.',
    tags: ['Elixir', 'Phoenix', 'VueJS', 'Flutter', 'Docker'],
    category: 'Web',
    problem:
      'Fournir aux équipes un outil unifié pour gérer les horaires, visualiser les temps de travail et administrer les équipes, accessible aussi en mode hors connexion sur mobile.',
    contribution:
      "Déploiement de l'API et conteneurisation, gestion des rôles et équipes, graphiques d'évolution, mode offline Flutter, génération APK signé.",
    result: 'Projet livré en 3 semaines, présenté et démontré, APK fonctionnel sur Android.',
  },
  {
    slug: 'basket4ballers',
    num: '04',
    year: '2026',
    title: 'Basket4Ballers',
    description:
      'Application full-stack de consultation de données NBA — joueurs et sneakers. Backend Java avec scraping, frontend TypeScript.',
    tags: ['Java', 'Spring Boot', 'TypeScript', 'JSoup', 'JWT', 'PostgreSQL'],
    category: 'API',
    problem:
      'Accéder de façon programmatique aux données NBA (joueurs, sneakers) et les exposer via une interface moderne sans API officielle disponible.',
    contribution:
      'Backend Java Spring Boot avec scraping JSoup, modélisation JPA, authentification JWT, cache PostgreSQL, endpoints documentés OpenAPI. Frontend TypeScript pour la consultation des données.',
    result:
      'Application full-stack fonctionnelle, API < 200ms par requête en cache, frontend connecté.',
    repo: 'github.com/Tiagovhs/basket4ballers-backend',
    link: 'basket.tiagovalinhas.fr',
  },
  {
    slug: 'portfotiagz',
    num: '05',
    year: '2025',
    title: 'portfoTiagz',
    description:
      'Ce portfolio — Angular 22, Tailwind 4, déployé via Docker multi-stage et GitHub Actions.',
    tags: ['Angular 22', 'Tailwind 4', 'Docker', 'GitHub Actions'],
    category: 'Web',
    problem:
      "Disposer d'un portfolio moderne, performant et facile à maintenir, déployé automatiquement à chaque push.",
    contribution:
      'Conception du design système, architecture Angular standalone + signaux, pipeline CI/CD complet.',
    result: 'Site déployé en production via GHCR, temps de build < 2 min, Lighthouse > 95.',
    repo: 'github.com/Tiagovhs/portfotiagz',
  },
  {
    slug: 'bgrmtiagz',
    num: '06',
    year: '2026',
    title: 'bgrmTiagz',
    description:
      "Outil web de suppression de fond d'image — traitement entièrement côté client, aucune donnée envoyée à un serveur.",
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Outils',
    problem:
      "Avoir un outil simple et rapide pour supprimer le fond d'une image sans dépendre d'un service tiers payant ou d'un upload serveur.",
    contribution:
      "Développement d'un outil standalone en HTML/CSS/JS avec traitement côté client, interface minimaliste, utilisable directement depuis le navigateur.",
    result: 'Outil fonctionnel en quelques Ko, utilisable hors-ligne, zéro upload serveur.',
    repo: 'github.com/Tiagovhs/bgrmTiagz',
  },
  {
    slug: 'valitech',
    num: '07',
    year: '2026',
    title: 'Sites Valitech',
    description:
      'Deux sites vitrines pour Valitech Maintenance (maintenance industrielle) et ValiCycle (réparation vélo à domicile) — Mouscron, Belgique.',
    tags: ['HTML', 'CSS', 'JavaScript', 'SEO', 'Schema.org'],
    category: 'Web',
    problem:
      'Créer une présence web professionnelle pour deux activités distinctes, avec un référencement local optimisé pour attirer des clients dans un rayon de 25 km.',
    contribution:
      'Conception et développement des deux sites statiques, balisage Schema.org (LocalBusiness, OfferCatalog, OpeningHoursSpecification) pour le SEO local, design responsive, formulaire de contact.',
    result:
      'Deux sites en production avec données structurées Schema.org pour un référencement local optimisé.',
    links: ['valitech-maintenance.com', 'cycle.valitech-maintenance.com'],
  },
  {
    slug: 'homeserver',
    num: '08',
    year: '2026',
    title: 'Serveur & CI/CD perso',
    description:
      'Infrastructure personnelle : VPS Linux avec déploiement continu automatique via GitHub Actions, GHCR et Watchtower.',
    tags: ['Docker', 'GitHub Actions', 'GHCR', 'Watchtower', 'Nginx', 'Linux'],
    category: 'Outils',
    problem:
      'Héberger ses propres projets de façon autonome avec un pipeline entièrement automatisé — zéro intervention manuelle à chaque mise en production.',
    contribution:
      "VPS Linux avec Docker et Nginx comme reverse proxy. Pipeline GitHub Actions : build de l'image Docker et push vers GHCR à chaque push sur main. Watchtower surveille GHCR, détecte les nouvelles images et redémarre les conteneurs automatiquement.",
    result:
      'Pipeline push-to-deploy entièrement automatisé : un git push suffit pour mettre à jour un projet en production en moins de 2 minutes.',
  },
];

export const education: Education[] = [
  {
    dates: '2024 – 2026',
    degree: 'Master Informatique MSC Pro',
    school: 'Epitech, Lille',
    note: 'Diplômé (alternance)',
  },
  {
    dates: '2021 – 2024',
    degree: 'Licence Informatique',
    school: "Université de Lille, Villeneuve d'Ascq",
    note: 'Diplômé',
  },
  {
    dates: '2019 – 2021',
    degree: 'BTS SIO – Option SLAM',
    school: 'Lycée Saint-Rémi, Roubaix',
    note: 'Solutions Logicielles et Applications métiers',
  },
];
