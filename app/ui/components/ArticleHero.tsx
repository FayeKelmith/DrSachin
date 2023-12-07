"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/typing.json";
import { TypeAnimation } from "react-type-animation";
const ArticleHero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:min-w-96 justify-center ">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="md:text-5xl md:w-[36rem] text-3xl px-2 my-auto py-10 ">
        <p className="inline">Here is what I </p>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "Think",
            2000, // wait 1s before replacing "Mice" with "Hamsters"
            "Wrote",
            2000,
            "Found Out",
            2000,
            "Composed",
            2000,
          ]}
          wrapper="span"
          speed={90}
          style={{
            display: "inline",
            color: "#EB455F",
          }}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default ArticleHero;
