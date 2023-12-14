"use client";
import Image from "next/image";
import animationData from "@/public/animations/namaste.json";
import Lottie from "lottie-react";
const About = () => {
  return (
    <div className="pt-20 flex flex-col md:flex-row container mx-auto justify-between  px-4">
      <div className=" md:mx-10">
        {/* Text content */}
        <div className="w-36">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="text-5xl py-4">
          Namaste, <br /> I&apos;m Dr. Sachin Sidhra
        </h1>
        <p className="p-8 text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed
          quibusdam non at fugit reiciendis deserunt magni, necessitatibus odio
          soluta dolorem similique autem nesciunt tempora repudiandae ipsam
          praesentium. Iure maxime dolor cupiditate eaque deleniti ipsa possimus
          repellendus exercitationem veritatis voluptatibus provident ad labore
          fugit, eveniet modi cum doloribus ipsum. Sapiente?
        </p>
        <p className="p-8 text-2xl">
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
          className="rounded-xl drop-shadow-xl"
        />
      </div>
    </div>
  );
};

export default About;
