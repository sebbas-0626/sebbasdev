import { profileQuery } from "@/lib/sanity.query";
import type { ProfileType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BiMapPin } from "react-icons/bi";
import HeroSvg from "./assets/icons/HeroSvg";
import {
  hero,
  heroSkills,
  profile as profileData,
} from "./data/profile";
import Job from "./components/pages/Job";
import Social from "./components/shared/Social";
import { Slide } from "./animation/Slide";
import { sanityFetch } from "@/lib/sanity.client";
import ContributionGraph from "./components/pages/GithubCalendarComponent";

export default async function Home() {
  const profile = await sanityFetch<ProfileType | null>({
    query: profileQuery,
    tags: ["profile"],
    fallback: null,
  });

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <section className="flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 mb-16">
        <div key={profile?._id} className="lg:max-w-2xl max-w-2xl">
          <Slide>
            <h1 className="font-incognito font-semibold tracking-tight text-3xl sm:text-5xl mb-4 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full">
              {profile?.fullName ?? profileData.fullName}
            </h1>
            <p className="dark:text-primary-color text-tertiary-color text-xl mb-4">
              {profile?.headline ?? profileData.role}
            </p>
            <span className="flex items-center gap-x-2 text-sm text-zinc-500 mb-4">
              <BiMapPin className="text-base" />
              {profile?.location ?? profileData.location}
            </span>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="inline-flex items-center gap-x-2 rounded-full border border-green-500/30 bg-green-500/10 px-3 py-1 text-sm text-green-700 dark:text-green-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {hero.availability}
              </span>
            </div>
            <p className="text-base dark:text-zinc-400 text-zinc-600 leading-relaxed">
              {profile?.shortBio ?? profileData.summary}
            </p>
          </Slide>
          <Slide delay={0.08}>
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
            <Social type="social" />
          </Slide>
          <Slide delay={0.12}>
            <p className="text-sm text-zinc-500 mb-3">
              Tecnologías con las que trabajo
            </p>
            <ul className="flex flex-wrap items-center gap-x-3 gap-y-3">
              {heroSkills.map((skill) => (
                <li
                  key={skill.name}
                  title={skill.name}
                  className="grid place-items-center h-11 w-11 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md"
                >
                  <Image
                    src={skill.src}
                    alt={skill.name}
                    width={24}
                    height={24}
                    unoptimized
                    className="h-6 w-6"
                  />
                </li>
              ))}
            </ul>
          </Slide>
        </div>
        <Slide delay={0.14}>
          <HeroSvg />
        </Slide>
      </section>
      <ContributionGraph />
      <Job />
    </main>
  );
}
