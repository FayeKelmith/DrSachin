import LandingHero from "./ui/components/LandingHero";
import Quote from "./ui/components/Quote";
import AboutMe from "./ui/components/AboutMe";
export default function Home() {
  return (
    <>
      <section>
        <LandingHero />
      </section>
      <section className="">
        <Quote />
      </section>
      <section className="">
        <AboutMe />
      </section>
    </>
  );
}
