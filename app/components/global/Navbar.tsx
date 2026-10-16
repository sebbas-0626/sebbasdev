import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import UnmountStudio from "./Unmount";
import MobileMenu from "./MobileMenu";
import { navLogo } from "@/lib/site";

export default function Navbar() {
  const data = [
    {
      title: "Sobre mí",
      href: "/about",
    },
    {
      title: "Proyectos",
      href: "/projects",
    },
    {
      title: "Educación",
      href: "/educacion",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Fotos",
      href: "/photos",
    },
  ];

  return (
    <UnmountStudio>
      <header className="text-sm py-6 md:px-16 px-6 border-b dark:border-zinc-800 border-zinc-200 z-30 md:mb-28 mb-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link href="/">
            <Image
              src={navLogo}
              width={52}
              height={32}
              alt="Sebastián Tovar Chávez"
              className="w-[52px] h-8 invert dark:invert-0"
            />
          </Link>

          <nav className="md:block hidden">
            <ul className="flex items-center gap-x-8">
              {data.map((link, id) => (
                <li key={id}>
                  <Link
                    href={link.href}
                    className="font-incognito dark:text-white text-zinc-600 dark:hover:text-primary-color hover:text-zinc-900 duration-300 text-base"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-x-4">
            <Theme />
            <MobileMenu />
          </div>
        </div>
      </header>
    </UnmountStudio>
  );
}
