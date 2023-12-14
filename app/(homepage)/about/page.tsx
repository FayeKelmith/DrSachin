"use client";
import Image from "next/image";
import animationData from "@/public/animations/namaste.json";
import Lottie from "lottie-react";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row container mx-auto justify-between  px-4">
      <div className=" md:mx-10">
        {/* Text content */}
        <div className="w-36 mx-auto md:mx-0">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <p className="text-5xl py-4">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hello!",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Namaste",
              2000, // wait 1s before replacing "Mice" with "Hamsters"
              "Ram Ram",
              2000,
              "Namaskaram",
              2000,
              "Sat Sri Akaal",
              2000,
              "Salaam",
              2000,
              "Pranam",
              2000,
            ]}
            wrapper="span"
            speed={80}
            style={{
              display: "inline",
              color: "#EB455F",
            }}
            repeat={Infinity}
          />
        </p>
        <h1 className="text-5xl py-4"> I&apos;m Dr. Sachin Sidhra</h1>
        <p className="p-8 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed
          quibusdam non at fugit reiciendis deserunt magni, necessitatibus odio
          soluta dolorem similique autem nesciunt tempora repudiandae ipsam
          praesentium. Iure maxime dolor cupiditate eaque deleniti ipsa possimus
          repellendus exercitationem veritatis voluptatibus provident ad labore
          fugit, eveniet modi cum doloribus ipsum. Sapiente?
        </p>
        <p className="hidden md:block p-8 text-2xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
          aperiam voluptatem soluta necessitatibus sapiente quae voluptate
          dolorem aut distinctio, recusandae labore placeat modi repellendus
          debitis eius architecto, facere explicabo commodi est? Tempora esse in
          perspiciatis. Sunt doloribus blanditiis expedita error!
        </p>
      </div>
      <div className="relative w-full h-[60vh] my-10 ">
        {/* Image */}
        <Image
          src="/images/suited.jpg"
          alt="Suited man"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="rounded-xl dark:hover:shadow-red-100 shadow-lg hover:shadow-slate-400"
        />
      </div>
    </div>
  );
};

export default About;
