import { HeroText } from "./HeroText";
import { images } from "./Images";
export const HeroBanner = () => {
  return (
    <section className="flex-row-reverse items-center justify-between w-full md:bg-transparent md:flex">
      <div className="absolute hidden w-2/3 md:block -z-10">
        <img src={images.heroRings} title="Rings" alt="rings" />
      </div>
      <div className="relative">
        <div className="absolute w-full h-full transform md:hidden -translate-y-1/4 top-1/2">
          <img src={images.heroRingsSm} title="Rings" alt="rings" />
        </div>
        <div className="flex justify-center transform md:-translate-x-1/2">
          <div className="w-[80vw] md:w-[30vw]">
            <img src={images.heroImageLarge} title="Hero" className="animate-wiggle" />
          </div>
        </div>
      </div>
      <div className="my-4 md:w-1/2">
        <HeroText />
      </div>
    </section>
  );
};
