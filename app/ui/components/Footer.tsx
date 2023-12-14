"use client";
import Link from "next/link";
import {
  FaXTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa6";
const Footer = () => {
  const circleClasses =
    "inline-block p-3 rounded-full mx-auto hover:bg-[#EB455F]";
  const iconStyles = { fontSize: "2rem" };
  return (
    <div className="">
      <div className="grid grid-cols-4 gap-2 w-full sm:w-96 mx-auto py-4">
        <Link href="/" className={circleClasses}>
          <FaFacebook style={iconStyles} />
        </Link>
        <Link href="/" className={circleClasses}>
          <FaXTwitter style={iconStyles} />
        </Link>
        <Link href="/" className={circleClasses}>
          <FaInstagram style={iconStyles} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/sachinsidhra/"
          className={circleClasses}
          target="_blank"
        >
          <FaLinkedin style={iconStyles} />
        </Link>
      </div>
      <div className="text-center">
        {/* copyright */}
        <p className="text-lg py-4">
          Designed & Developed by Karizmatik ©2024 🕊
        </p>
      </div>
    </div>
  );
};

export default Footer;
