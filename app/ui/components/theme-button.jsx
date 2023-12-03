"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      {theme == "dark" ? (
        <div>
          <SunIcon className="w-8 h-8 text-blank" />
        </div>
      ) : (
        <div>
          <MoonIcon className="w-8 h-8 text-slate-900" />
        </div>
      )}
    </>
  );
};

export default ThemeSwitcher;
