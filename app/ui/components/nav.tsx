import Sidhra from "@/app/ui/sidhra-logo";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
const Navigation = () => {
  return (
    <nav className="w-full py-4 backdrop-blur-md">
      <Sidhra />
      <ul>
        <li>
          <Link href="/articles"> articles</Link>
        </li>
        <li>
          <Link href="/record"> Achievements</Link>
        </li>
        <li>
          <Link href="/about"> About Me</Link>
        </li>
        <li className=" hover:caret-pink-500">
          <MoonIcon className="h-10 w-10 text-blue-50" />
          {/* <SunIcon className="h-10 w-10 text-blue-50" /> */}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
