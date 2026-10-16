import type { PortableTextBlock } from "sanity";
import type { ProjectType } from "@/types";

function paragraphs(texts: string[]): PortableTextBlock[] {
  return texts.map((text, index) => ({
    _type: "block",
    _key: `block-${index}`,
    style: "normal",
    markDefs: [],
    children: [
      {
        _type: "span",
        _key: `span-${index}`,
        text,
        marks: [],
      },
    ],
  }));
}

export const projects: ProjectType[] = [
  {
    _id: "impulso-jobs",
    name: "Impulso Jobs",
    slug: "impulso-jobs",
    tagline:
      "Plataforma de empleo multitenant con Angular, NestJS y PostgreSQL",
    projectUrl: "https://demo.impulsojobs.com/inicio",
    repository: "https://github.com/cristian-123-fox/impulso-jobs",
    logo: "/images/impulso-jobs.png",
    coverImage: {
      image: "/img/project/impulsoJobs.png",
      alt: "Página principal de Impulso Jobs con buscador de vacantes",
      lqip: "",
    },
    description: paragraphs([
      "Impulso Jobs es una plataforma de empleo con arquitectura multitenant, construida sobre Angular y NestJS con PostgreSQL como base de datos principal. Su diseño permite operar empresas y vacantes en distintos países desde una misma instalación.",
      "El proyecto nació como una migración: la plataforma original funcionaba sobre WordPress y necesitaba una base sólida para escalar. El equipo desarrolló un CMS y una plataforma de gestión propios, con una API REST que sirve tanto al frontend como a las integraciones internas.",
      "Uno de los componentes centrales es el sistema de planes. La integración con Stripe permite la contratación de planes y servicios de forma automática, gestionando suscripciones y cobros sin intervención manual.",
      "También se desarrolló la publicación y administración de vacantes empresariales, con herramientas para que cada empresa gestione sus propias vacantes y candidatos dentro de su cuenta.",
      "El despliegue se realizó en infraestructura de Hostinger y el soporte operativo cubre los mercados de México, Estados Unidos, Colombia y Canadá.",
    ]),
  },
  {
    _id: "cootranshuila",
    name: "Cootranshuila",
    slug: "cootranshuila",
    tagline: "Sitio web con compra de tiquetes en línea y pasarela de pagos",
    projectUrl: "https://cootranshuila.com",
    repository: "",
    coverImage: {
      image: "/img/project/cootranshuila.png",
      alt: "Portada de Cootranshuila con el buscador de tiquetes",
      lqip: "",
    },
    gallery: ["/img/project/web_cootranshuila.png"],
    description: paragraphs([
      "Cootranshuila es una empresa de transporte de pasajeros. Este proyecto es su sitio web corporativo con un buscador de rutas que permite comprar tiquetes en línea seleccionando ciudad de origen, ciudad de destino y fechas de ida y regreso.",
      "El trabajo respondió al diseño, maquetación y responsiveness del sitio, incluyendo el formulario de compra, el menú de servicios y las secciones de Offices y contacto.",
      "El flujo de compra incluye la implementación de una pasarela de pagos para transactar los tiquetes de forma segura, con soporte para los distintos medios de pago que ofrece la empresa en Colombia.",
      "Se desarrolló con Next.js, Vite, Tailwind CSS y TypeScript.",
    ]),
  },
  {
    _id: "sistema-inventario",
    name: "Sistema de Inventario",
    slug: "sistema-inventario",
    tagline: "Sistema de gestión de inventarios para una panadería",
    projectUrl: "",
    repository: "",
    coverImage: {
      image: "/img/project/sitema_inventario.png",
      alt: "Pantalla de inicio de sesión del Sistema de Inventario",
      lqip: "",
    },
    description: paragraphs([
      "Sistema web para administrar el inventario de una panadería. Permite registrar, editar y dar de baja productos, controlar las existencias y registrar los movimientos de entrada y salida de mercancía.",
      "Incluye un módulo de reportes para consultar el estado del inventario y los movimientos por periodo.",
      "El proyecto se desarrolló bajo arquitectura MVC y separación de responsabilidades, con el fin de mantener el código organizado y fácil de mantener.",
    ]),
  },
  {
    _id: "turismo-rivera",
    name: "Turismo Rivera",
    slug: "turismo-rivera",
    tagline: "Portal turístico del municipio de Rivera, Huila",
    projectUrl: "",
    repository: "",
    coverImage: {
      image: "/img/project/rivera-huilaWeb.png",
      alt: "Portal de turismo de Rivera mostrando la sección de presentación turística",
      lqip: "",
    },
    description: paragraphs([
      "Portal turístico del municipio de Rivera, Huila. El sitio presenta destinos, prestadores de servicios turísticos, deporte, economía y noticias del municipio.",
      "El trabajo incluyó la construcción y organización de las páginas, la creación de vistas responsivas y el ajuste del contenido para que la experiencia se sintiera única frente al turismo de la región.",
      "Se trabajó con WordPress y Elementor, permitiendo personalizar componentes y secciones de acuerdo con las necesidades de cada área del portal.",
    ]),
  },
];