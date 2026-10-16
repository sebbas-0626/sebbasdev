import Link from "next/link";
import {
  BiEnvelope,
  BiGlobe,
  BiLogoGithub,
  BiLogoLinkedinSquare,
  BiMapPin,
  BiPhone,
} from "react-icons/bi";
import UnmountStudio from "./Unmount";
import { profile } from "@/app/data/profile";

const navLinks = [
  { id: "inicio", title: "Inicio", href: "/" },
  { id: "sobre-mi", title: "Sobre mí", href: "/about" },
  { id: "educacion", title: "Educación", href: "/educacion" },
  { id: "proyectos", title: "Proyectos", href: "/projects" },
  { id: "blog", title: "Blog", href: "/blog" },
];

const contactLinks = [
  {
    id: "portfolio",
    label: "Portfolio",
    href: profile.contact.website,
    icon: BiGlobe,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: profile.contact.linkedin,
    icon: BiLogoLinkedinSquare,
  },
  {
    id: "github",
    label: "GitHub",
    href: profile.contact.github,
    icon: BiLogoGithub,
  },
  {
    id: "phone",
    label: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    icon: BiPhone,
  },
  {
    id: "email",
    label: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: BiEnvelope,
  },
];

export default function Footer() {
  return (
    <UnmountStudio>
      <footer className="border-t dark:border-zinc-800 border-zinc-100 mt-44">
        <div className="max-w-7xl mx-auto md:px-16 px-6 py-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10">
            <div>
              <h3 className="font-incognito font-semibold tracking-tight text-lg mb-1">
                {profile.fullName}
              </h3>
              <p className="dark:text-primary-color text-tertiary-color text-sm">
                {profile.role}
              </p>
              <p className="flex items-center gap-x-2 text-sm text-zinc-500 mt-2">
                <BiMapPin className="text-base shrink-0" />
                {profile.location}
              </p>
            </div>

            <nav>
              <h3 className="text-sm text-zinc-500 mb-4">Navegación</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <Link
                      href={link.href}
                      className="text-sm dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white duration-300"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm text-zinc-500 mb-4">Contacto</h3>
              <ul className="space-y-2">
                {contactLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="flex items-center gap-x-2 text-sm dark:text-zinc-400 text-zinc-600 hover:text-zinc-900 dark:hover:text-white duration-300 break-all"
                    >
                      <link.icon className="text-base shrink-0" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t dark:border-zinc-800 border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-y-2">
            <small className="text-zinc-500">
              Copyright &copy; {profile.fullName} {new Date().getFullYear()}{" "}
              Todos los derechos reservados
            </small>
            <small className="text-zinc-500">
              Hecho con Next.js y Tailwind CSS
            </small>
          </div>
        </div>
      </footer>
    </UnmountStudio>
  );
}