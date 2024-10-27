"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/animations/wave.json";
const LandingHero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col py-20 px-8 items-center md:container mx-auto">
        <div className="w-full my-10 ">
          <div className="">
            <div className="text-5xl h-20 w-20 text-[#EB455F] font-semibold">
              Hola!
              <Lottie animationData={animationData} loop={true} />
            </div>
          </div>
          <h1 className="text-4xl my-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            dicta!
          </h1>

          <p className="hidden md:block mx-10 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius in
            nesciunt quos cupiditate inventore quaerat odio dolorem similique
            mollitia illum blanditiis voluptatibus consectetur libero vitae
            recusandae fugit necessitatibus beatae optio, fugiat accusantium ut.
            Tenetur praesentium eum pariatur. Vel, maiores saepe illum veritatis
            veniam eos ea excepturi odio. Laudantium, voluptas?
          </p>
        </div>

        <div className="lg:ml-20">
          <Image
            src="/images/hero-image.png"
            alt="Hero image"
            priority={true}
            width={640}
            height={768}
          />
        </div>
      </div>
    </>
  );
};

export default LandingHero;
