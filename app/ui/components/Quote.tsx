"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/quotation-mark.json";
import { quicksand } from "../fonts";
const Quote = () => {
  return (
    <div className="w-full lg:px-40 px-10">
      <div className="w-20 h-20">
        <Lottie animationData={animationData} loop />
      </div>
      <p className={`text-4xl `}>
        He begins working calculus problems in his head as soon as he awakens.
        He did calculus while driving in his car, while sitting in the living
        room, and while lying in bed at night.&apos;
      </p>
      <p className="text-right text-2xl py-10">
        ~divorce complaint of Richard Feynman&apos;s second wife
      </p>
      <p className="text-right text-lg py-4 italic">
        last updated: <span>25th Dec. 2023</span>
      </p>
    </div>
  );
};

export default Quote;
