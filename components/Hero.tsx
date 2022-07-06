import { HeroText } from "./HeroText";
import { images } from "./Images";
export const HeroBanner = () => {
  return (
    <section className="w-full">
      <div className="h-[450px] relative">
        <div className="h-full absolute w-full overflow-clip">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-y-32 -translate-x-1/2">
            <div className="-z-10 w-[150vw]">
              <img src={images.heroRings} alt="rings" />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[320px] lg:w-[320px]">
            <img src={images.heroImageLarge} />
          </div>
        </div>
      </div>
      <HeroText />
    </section>
  );
};
