import { FaGraduationCap, FaLanguage, FaUserTie } from "react-icons/fa";
import { HiCalendar, HiLocationMarker } from "react-icons/hi";
import { Slide } from "../../animation/Slide";
import SkillsList from "../shared/SkillsList";
import {
  education,
  languages,
  references,
  skillGroups,
} from "../../data/education";

function SectionTitle({ title }: { title: string }) {
  return (
    <Slide>
      <div className="mb-10">
        <h2 className="font-incognito text-4xl mb-4 font-bold tracking-tight">
          {title}
        </h2>
      </div>
    </Slide>
  );
}

export default function Education() {
  return (
    <>
      <section className="mt-10 mb-24">
        <SectionTitle title="Educación" />

        <Slide delay={0.1}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-10">
            {education.map((item) => (
              <div
                key={item._id}
                className="flex items-start lg:gap-x-5 gap-x-4 relative before:absolute before:bottom-0 before:top-[5rem] before:left-9 before:w-[1px] before:h-[calc(100%-70px)] dark:before:bg-zinc-800 before:bg-zinc-200"
              >
                <div className="grid place-items-center shrink-0 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 min-h-[80px] min-w-[80px] p-2 rounded-md relative">
                  <FaGraduationCap className="text-3xl text-zinc-500" />
                </div>
                <div className="flex flex-col items-start">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="dark:text-zinc-400 text-zinc-600">
                    {item.institution}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-500 mt-2">
                    <span className="flex items-center gap-x-1 uppercase tracking-widest">
                      <HiCalendar className="text-base" />
                      {item.year}
                    </span>
                    {item.location && (
                      <span className="flex items-center gap-x-1">
                        <HiLocationMarker className="text-base" />
                        {item.location}
                      </span>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-sm dark:text-zinc-500 text-zinc-500 italic mt-2">
                      {item.description}
                    </p>
                  )}
                  {item.inProgress && (
                    <span className="text-sm dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1 mt-3">
                      En curso
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Slide>
      </section>

      <section className="mb-24">
        <SectionTitle title="Habilidades" />

        <Slide delay={0.1}>
          <SkillsList groups={skillGroups} />
        </Slide>
      </section>

      <section className="mb-24">
        <SectionTitle title="Idiomas" />

        <Slide delay={0.1}>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8 max-w-3xl">
            {languages.map((language) => (
              <div
                key={language._id}
                className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-lg p-6"
              >
                <div className="flex items-center gap-x-3 mb-4">
                  <FaLanguage className="text-xl text-zinc-500" />
                  <h3 className="text-lg font-semibold tracking-tight">
                    {language.name}
                  </h3>
                </div>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="dark:text-zinc-400 text-zinc-600">
                    {language.level}
                  </span>
                  {language.scale && (
                    <span className="text-zinc-500">{language.scale}%</span>
                  )}
                </div>
                {language.scale ? (
                  <div className="w-full h-1.5 dark:bg-zinc-800 bg-zinc-200 rounded-full overflow-hidden">
                    <div
                      className="h-full dark:bg-primary-color bg-tertiary-color rounded-full"
                      style={{ width: `${language.scale}%` }}
                    />
                  </div>
                ) : null}
                {language.note && (
                  <p className="text-sm dark:text-zinc-500 text-zinc-500 italic mt-3">
                    {language.note}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Slide>
      </section>

      {references.length > 0 && (
        <section className="mb-24">
          <SectionTitle title="Referencias" />

          <Slide delay={0.1}>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-12 gap-y-8">
              {references.map((reference) => (
                <div
                  key={reference._id}
                  className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-lg p-6 flex items-start gap-x-4"
                >
                  <div className="grid place-items-center shrink-0 dark:bg-zinc-800 bg-zinc-100 rounded-full h-12 w-12">
                    <FaUserTie className="text-xl text-zinc-500" />
                  </div>
                  <div className="flex flex-col items-start">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {reference.name}
                    </h3>
                    <p className="dark:text-zinc-400 text-zinc-600">
                      {reference.role}
                    </p>
                    {reference.location && (
                      <span className="flex items-center gap-x-1 text-sm text-zinc-500 mt-2">
                        <HiLocationMarker className="text-base" />
                        {reference.location}
                      </span>
                    )}
                    {reference.phone && (
                      <a
                        href={`tel:+57${reference.phone}`}
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white duration-300"
                      >
                        +57 {reference.phone}
                      </a>
                    )}
                    {reference.email && (
                      <a
                        href={`mailto:${reference.email}`}
                        className="text-sm text-zinc-500 hover:text-zinc-900 dark:hover:text-white duration-300 break-all"
                      >
                        {reference.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Slide>
        </section>
      )}
    </>
  );
}