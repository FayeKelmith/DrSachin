"use client";
import LandingHero from "./ui/components/LandingHero";
import Quote from "./ui/components/Quote";
export default function Home() {
  return (
    <section className=" mx-auto">
      <div>
        <LandingHero />
      </div>
      <div className="py-12 bg-grey dark:bg-[#232323]">
        <Quote />
      </div>
    </section>
  );
}
