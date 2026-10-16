import type {
  EducationType,
  LanguageType,
  ReferenceType,
  SkillGroupType,
} from "@/types";

export const education: EducationType[] = [
  {
    _id: "ingenieria-sistemas",
    title: "Ingeniería de Sistemas",
    institution:
      "La Corporación Unificada Nacional de Educación Superior - CUN",
    location: "Neiva",
    year: 2022,
    inProgress: true,
    description: "Carrera universitaria en curso.",
  },
  {
    _id: "diplomado-java",
    title:
      "Diplomado en Desarrollo de Aplicaciones de Software Orientadas a Objetos con Java",
    institution:
      "La Corporación Unificada Nacional de Educación Superior - CUN",
    location: "Neiva",
    year: 2023,
  },
  {
    _id: "diseno-sitios-web",
    title: "Diseño de Sitios Web",
    institution: "SENA",
    year: 2023,
    description: "Curso virtual · 2462537",
  },
  {
    _id: "desarrollo-web-php",
    title: "Desarrollo Web con PHP",
    institution: "SENA",
    year: 2023,
    description: "Curso virtual · 2540989",
  },
  {
    _id: "git-github-udemy",
    title: "Profesional de Git y GitHub",
    institution: "Udemy",
    year: 2022,
  },
  {
    _id: "english-dot-works",
    title: "English Dot Works 1 (Inglés)",
    institution: "SENA",
    location: "Neiva",
    year: 2019,
    description: "Curso de 60 horas.",
  },
  {
    _id: "tecnico-sistemas",
    title: "Técnico en Sistemas · Bachiller",
    institution: "Institución Educativa Misael Pastrana Borrero",
    location: "Rivera, Huila",
    year: 2017,
  },
];

export const skillGroups: SkillGroupType[] = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML5", logo: "/img/skills/html.svg" },
      { name: "CSS3", logo: "/img/skills/css.svg" },
      { name: "JavaScript", logo: "/img/skills/javascript.svg" },
      { name: "TypeScript", logo: "/img/skills/typescript.svg" },
      { name: "Vue", logo: "/img/skills/vue.svg" },
      { name: "Nuxt.js", logo: "/img/skills/nuxtJS.svg" },
      { name: "Angular", logo: "/img/skills/angular.svg" },
      { name: "Next.js", logo: "/img/skills/nextJS.svg" },
      { name: "React Native", logo: "/img/skills/react.svg" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "PHP", logo: "/img/skills/php.svg" },
      { name: "Laravel", logo: "/img/skills/laravel.svg" },
      { name: "Node.js", logo: "/img/skills/node.svg" },
      { name: "NestJS", logo: "/img/skills/Nest.js.svg" },
      { name: "REST API", logo: "/img/skills/Swagger.svg" },
      { name: "WordPress", logo: "/img/skills/wordpress.svg" },
    ],
  },
  {
    category: "Bases de datos",
    skills: [
      { name: "MySQL", logo: "/img/skills/mysql.svg" },
      { name: "PostgreSQL", logo: "/img/skills/postgresql.svg" },
    ],
  },
  {
    category: "Pagos",
    skills: [{ name: "Stripe" }, { name: "Wompi" }],
  },
  {
    category: "DevOps y herramientas",
    skills: [
      { name: "Docker", logo: "/img/skills/docker.svg" },
      { name: "Google Cloud Platform", logo: "/img/skills/gcp.svg" },
      { name: "Git", logo: "/img/skills/git.svg" },
      { name: "GitHub", logo: "/img/skills/github.svg" },
    ],
  },
];

export const languages: LanguageType[] = [
  {
    _id: "espanol",
    name: "Español",
    level: "Nativo",
    scale: 100,
  },
  {
    _id: "ingles",
    name: "Inglés",
    level: "Básico",
    scale: 40,
    note: "English Dot Works 1 · 60 horas (SENA, 2019)",
  },
];

export const references: ReferenceType[] = [
  {
    _id: "miguel-mendoza",
    name: "Miguel A. Mendoza C.",
    role: "Senior Full Stack Developer",
    location: "Bogotá",
    phone: "3204045687",
    email: "miangangls@gmail.com",
  },
];