import Image from "next/image";
import type { SkillGroupType } from "@/types";

export default function SkillsList({
  groups,
}: {
  groups: SkillGroupType[];
}) {
  return (
    <div className="grid xl:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-x-12 gap-y-8">
      {groups.map((group) => (
        <div key={group.category} className="flex flex-col items-start">
          <h3 className="text-lg font-semibold tracking-tight mb-4">
            {group.category}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <li key={skill.name}>
                <span className="flex items-center gap-x-2 text-sm dark:bg-primary-bg bg-zinc-100 border dark:border-zinc-800 border-zinc-200 rounded-md px-2 py-1">
                  {skill.logo && (
                    <span className="grid place-items-center h-5 w-5 shrink-0 bg-white border border-zinc-200 rounded">
                      <Image
                        src={skill.logo}
                        alt={skill.name}
                        width={14}
                        height={14}
                        unoptimized
                        className="h-3.5 w-3.5"
                      />
                    </span>
                  )}
                  {skill.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}