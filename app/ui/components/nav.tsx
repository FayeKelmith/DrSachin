"use client";
import Sidhra from "@/app/ui/sidhra-logo";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";

const Navigation = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(`Theme : ${theme}`);
  return (
    <nav className="bg-white text-black dark:bg-slate-800 dark:text-white ">
      <div className="flex max-w-screen-xl justify-between items-center">
        <Sidhra />

        <div>
          <ul className="flex w-full">
            <li>
              <Link href="/articles"> articles</Link>
            </li>
            <li>
              <Link href="/record"> Achievements</Link>
            </li>
            <li>
              <Link href="/about"> About Me</Link>
            </li>
            <li>
              <button
                className=" hover:caret-pink-500"
                onClick={() => handleTheme()}
              >
                {theme === "light" ? (
                  <div>
                    <MoonIcon className="w-8 h-8 text-slate-800" />
                  </div>
                ) : (
                  <div>
                    <SunIcon className="w-8 h-8 text-blank" />
                  </div>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
