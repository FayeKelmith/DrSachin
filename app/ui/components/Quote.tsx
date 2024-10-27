"use client";
import Lottie from "lottie-react";
import animationData from "@/public/animations/quotation-mark.json";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
const Quote = () => {
  return (
    <Card className="lg:px-20 px-10">
      <CardTitle className="w-20 h-20">
        <Lottie animationData={animationData} loop />
      </CardTitle>
      <CardContent className="text-2xl md:text-4xl">
        He begins working calculus problems in his head as soon as he awakens.
        He did calculus while driving in his car, while sitting in the living
        room, and while lying in bed at night.
      </CardContent>
      <CardDescription className="text-right text-2xl py-10">
        ~divorce complaint of Richard Feynman&apos;s second wife
      </CardDescription>

      <CardFooter className="w-full flex flex-col md:flex-row md:space-y-2 justify-between text-lg">
        <p className=" py-4 ">
          last updated: <span>25th Dec. 2023</span>
        </p>

        <Link href="#">More on this blog &rarr;</Link>
      </CardFooter>
    </Card>
  );
};

export default Quote;
