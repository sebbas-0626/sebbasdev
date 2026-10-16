import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  BiBuilding,
  BiCode,
  BiEnvelope,
  BiGlobe,
  BiLink,
  BiMapPin,
  BiPhone,
  BiUser,
} from "react-icons/bi";
import { expertise, profile } from "../data/profile";
import { skillGroups } from "../data/education";
import { Slide } from "../animation/Slide";
import RefLink from "../components/shared/RefLink";
import SkillsList from "../components/shared/SkillsList";
import { siteImage } from "@/lib/site";

const title = "Sobre mí";
const description = `Perfil profesional de ${profile.fullName}, ${profile.role}. ${profile.summary}`;

export const metadata: Metadata = {
  title: `${title} | Team Innovasoft`,
  description,
  openGraph: {
    title: `${title} | Team Innovasoft`,
    description,
    images: siteImage,
  },
};

const contactLinks = [
  {
    id: "website",
    label: "Portfolio",
    value: "sebbasdev0626.netlify.app",
    href: profile.contact.website,
    icon: BiGlobe,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "linkedin.com/in/sebbasdev",
    href: profile.contact.linkedin,
    icon: BiLink,
  },
  {
    id: "github",
    label: "GitHub",
    value: "github.com/sebbas-0626",
    href: profile.contact.github,
    icon: BiCode,
  },
  {
    id: "phone",
    label: "Teléfono",
    value: profile.contact.phone,
    href: `tel:${profile.contact.phone.replace(/\s/g, "")}`,
    icon: BiPhone,
  },
  {
    id: "email",
    label: "Correo",
    value: profile.contact.email,
    href: `mailto:${profile.contact.email}`,
    icon: BiEnvelope,
  },
];

export default function About() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="flex xl:flex-row flex-col-reverse xl:items-center items-start xl:justify-between gap-x-12 gap-y-10 mb-16">
        <Slide>
          <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-4 lg:leading-[3.7rem] leading-tight">
            {profile.fullName}
          </h1>
          <p className="dark:text-primary-color text-tertiary-color text-xl mb-4">
            {profile.role}
          </p>
          <span className="flex items-center gap-x-2 text-sm text-zinc-500 mb-6">
            <BiMapPin className="text-base" />
            {profile.location}
          </span>
          <p className="text-base max-w-2xl dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            <Link
              href="/educacion"
              className="font-incognito dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 hover:dark:border-zinc-700 hover:border-zinc-300 rounded-md px-4 py-2 text-sm duration-300"
            >
              Educación y habilidades
            </Link>
            <Link
              href="/projects"
              className="font-incognito dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 hover:dark:border-zinc-700 hover:border-zinc-300 rounded-md px-4 py-2 text-sm duration-300"
            >
              Ver proyectos
            </Link>
          </div>
        </Slide>

        <Slide delay={0.1}>
          <div className="w-full xl:w-80 shrink-0">
            <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-lg overflow-hidden">
              {profile.photo.src ? (
                <Image
                  src={profile.photo.src}
                  alt={profile.photo.alt}
                  width={640}
                  height={800}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full aspect-[4/5] grid place-items-center text-center p-6">
                  <div className="flex flex-col items-center">
                    <BiUser className="text-5xl text-zinc-500 mb-4" />
                    <p className="font-incognito text-lg mb-1">Tu foto aquí</p>
                    <p className="text-sm text-zinc-500 max-w-[220px]">
                      Coloca tu imagen en <code>public/fotos/</code> y define la
                      ruta en <code>app/data/profile.ts</code>.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Slide>
      </section>

      <section className="mb-24">
        <Slide delay={0.14}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Resumen
          </h2>
          <p className="max-w-3xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
            {profile.summaryExtra}
          </p>
        </Slide>
      </section>

      <section className="mb-24">
        <Slide delay={0.18}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Áreas de experiencia
          </h2>
          <p className="dark:text-zinc-400 text-zinc-600 max-w-2xl">
            Las áreas en las que más he trabajado durante mi carrera como
            desarrollador.
          </p>
        </Slide>

        <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 mt-12">
          {expertise.map((area) => (
            <Slide key={area.id} delay={0.2}>
              <article className="h-full flex items-start gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg">
                <BiBuilding className="text-2xl text-zinc-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg tracking-wide mb-1">{area.title}</h3>
                  <p className="text-sm dark:text-zinc-400 text-zinc-600 leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </article>
            </Slide>
          ))}
        </div>
      </section>

      <section className="mb-24">
        <Slide delay={0.22}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Habilidades
          </h2>
        </Slide>

        <div className="mt-10">
          <SkillsList groups={skillGroups} />
        </div>
      </section>

      <section className="mb-12">
        <Slide delay={0.26}>
          <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
            Contacto
          </h2>
        </Slide>

        <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-5 mt-10">
          {contactLinks.map((link) => (
            <Slide key={link.id} delay={0.28}>
              <RefLink
                href={link.href}
                className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-6 rounded-lg"
              >
                <link.icon className="text-2xl text-zinc-500 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-sm text-zinc-500">{link.label}</h3>
                  <p className="tracking-tight break-all">{link.value}</p>
                </div>
              </RefLink>
            </Slide>
          ))}
        </div>
      </section>
    </main>
  );
}