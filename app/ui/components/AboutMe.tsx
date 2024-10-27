"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "../utils/my-data";

const AboutMe = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl md:text-6xl font-semibold ml-8">
        Who{" "}
        <span className="text-transparent bg-clip-text bg-[#EB455F] ">
          am I?
        </span>
      </h1>

      <div className="mx-auto grid grid-cols-3 md:grid-cols-5 gap-y-4 items-center md:max-w-4xl px-6 md:py-10">
        {images.map((image, idx) => (
          <motion.div
            key={"images" + idx}
            style={{
              rotate: Math.random() * 20 - 10,
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            whileTap={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
            className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
          >
            <Image
              src={image}
              alt="bali images"
              width="500"
              height="500"
              className="rounded-lg  md:h-60 md:w-60 object-cover flex-shrink-0"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
