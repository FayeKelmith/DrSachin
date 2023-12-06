import Image from "next/image";
const LandingHero = () => {
  return (
    <>
      <Image
        src="/images/hero-image.png"
        alt="Hero image"
        width={640}
        height={768}
      />
    </>
  );
};

export default LandingHero;
