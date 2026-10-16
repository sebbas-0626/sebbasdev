import Image from "next/image";
import { socialLinks } from "../../data/social";
import RefLink from "./RefLink";

export default function Social({ type }: { type: "social" | "publication" }) {
  const links = socialLinks.filter((item) => item.status === type);

  if (links.length === 0) return null;

  return (
    <ul className="flex items-center flex-wrap gap-3 my-8">
      {links.map((value) => (
        <li key={value.id}>
          <RefLink
            href={value.url}
            className="group grid place-items-center h-11 w-11 dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 dark:group-hover:border-zinc-600 border-zinc-200 group-hover:border-zinc-400 rounded-md transition-colors"
          >
            <span title={value.name}>
              {value.icon ? (
                <value.icon className="h-5 w-5 text-zinc-500 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors" />
              ) : (
                <Image
                  src={value.logo ?? ""}
                  alt={value.name}
                  width={24}
                  height={24}
                  unoptimized
                  className={`h-5 w-5 ${
                    value.invertOnDark ? "dark:invert" : ""
                  }`}
                />
              )}
            </span>
          </RefLink>
        </li>
      ))}
    </ul>
  );
}