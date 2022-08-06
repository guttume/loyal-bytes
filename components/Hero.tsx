import { HeroText } from "./HeroText";
import { images } from "./Images";
export const HeroBanner = () => {
  return (
    <section className="w-full lg:h-[650px] lg:relative">
      <div className="h-[450px] lg:h-[650px] lg:-mx-12 lg:w-[60vw] relative lg:absolute lg:top-0 lg:right-0">
        <div className="h-full absolute w-full overflow-clip lg:overflow-y-clip lg:overflow-x-visible">
          <div className="absolute lg:w-full -z-10 top-1/2 left-1/2 lg:-ml-28 lg:-mt-12 transform -translate-y-32 lg:-translate-y-56 -translate-x-1/2">
            <div className="-z-10 w-[150vw] lg:w-[75vw]">
              <img src={images.heroRings} alt="rings" />
            </div>
          </div>
        </div>
        <div className="flex justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-56 lg:-translate-x-56">
          <div className="w-[320px] lg:w-[420px]">
            <img src={images.heroImageLarge} />
          </div>
        </div>
      </div>
      <div className="lg:pt-40 lg:w-[800px]">
        <HeroText />
      </div>
    </section>
  );
};
