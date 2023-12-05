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

const Navigation = () => {
  const { theme, setTheme } = useTheme();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  console.log(`Theme : ${theme}`);
  return (
    <nav className="bg-white text-black dark:bg-slate-800 dark:text-white ">
      <div className="flex max-w-screen-xl justify-between items-center flex-wrap mx-auto p-4">
        <Sidhra />
        <button
          className="md:hidden inline-flex hover:bg-gray-100 dark:hover:bg-slate-700 rounded-md focus:outline-none"
          onClick={toggleNav}
        >
          {/* Mobile view Nav */}
          <span className="">
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
          <ul className="flex flex-col md:flex-row">
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
