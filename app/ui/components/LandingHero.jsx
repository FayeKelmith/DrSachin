"use client";
import Image from "next/image";
import Lottie from "lottie-react";
import animationData from "@/public/animations/wave.json";
const LandingHero = () => {
  return (
    <>
      <div className="flex md:flex-row flex-col pt-20 items-center ">
        <div className="w-full m-10 ">
          <div className="">
            <p className="text-5xl h-20 w-20 text-[#EB455F] font-semibold">
              Hola!{" "}
              <span className="">
                <Lottie animationData={animationData} loop={true} />
              </span>
            </p>
          </div>
          <h1 className="text-2xl my-8 mx-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
            dicta!
          </h1>

          <p className="hidden md:block m-10 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum eius in
            nesciunt quos cupiditate inventore quaerat odio dolorem similique
            mollitia illum blanditiis voluptatibus consectetur libero vitae
            recusandae fugit necessitatibus beatae optio, fugiat accusantium ut.
            Tenetur praesentium eum pariatur. Vel, maiores saepe illum veritatis
            veniam eos ea excepturi odio. Laudantium, voluptas?
          </p>
        </div>

        <div></div>
        <Image
          src="/images/hero-image.png"
          alt="Hero image"
          width={640}
          height={768}
        />
      </div>
    </>
  );
};

export default LandingHero;
