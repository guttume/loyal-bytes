import { HeroText } from "./HeroText";
import { images } from "./Images";
export const HeroBanner = () => {
  return (
    <section className="w-full">
      <div className="relative">
        <div className="absolute w-full h-full transform -translate-y-1/4 top-1/2">
          <img src={images.heroRingsSm} alt="rings" />
        </div>
        <div className="flex justify-center">
          <div className="w-[90vw] lg:w-[420px]">
            <img src={images.heroImageLarge} className="animate-wiggle" />
          </div>
        </div>
      </div>
      <div className="my-4">
        <HeroText />
      </div>
    </section>
  );
};
