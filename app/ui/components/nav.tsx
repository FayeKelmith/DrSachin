"use client";
import Sidhra from "@/app/ui/sidhra-logo";
import Link from "next/link";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useState } from "react";

const navItemStyling =
  "block my-auto mx-4 px-2 py-2 link-underline link-underline-black ";
const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={` text-black  dark:text-white fixed w-full md:h-auto top-0 backdrop-blur-sm font-semibold bg-transparent z-20 ${
        isNavOpen ? "h-screen" : ""
      }`}
    >
      <div className="grid grid-cols-2 w-full gap-x-40 items-center ">
        <Link className="" href="/">
          <Sidhra />
        </Link>

        <button
          className="md:hidden block hover:bg-gray-100 w-fit px-0 dark:hover:bg-slate-700 rounded-md"
          onClick={toggleNav}
        >
          {/* Mobile view Nav */}
          <span className="mx-4">
            {isNavOpen ? (
              <XMarkIcon className="w-10 h-10" />
            ) : (
              <Bars3Icon className="w-10 h-10" />
            )}
          </span>
        </button>
        {/* Desktop view Nav */}
        <div
          className={`md:block justify-center md:w-auto ${
            isNavOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-xl">
            <li className={navItemStyling}>
              <Link href="/articles"> Articles</Link>
            </li>
            <li className={navItemStyling}>
              <Link href="/record"> Achievements</Link>
            </li>
            <li className={navItemStyling}>
              <Link href="/about"> About Me</Link>
            </li>
            <li className="mx-4 py-2 px-2">
              <button className="" onClick={() => handleTheme()}>
                {theme === "light" ? (
                  <div>
                    <MoonIcon className="w-8 h-8 text-slate-800 hover:text-[#19a7ce]" />
                  </div>
                ) : (
                  <div>
                    <SunIcon className="w-8 h-8 text-blank hover:text-[#19a7ce]" />
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
