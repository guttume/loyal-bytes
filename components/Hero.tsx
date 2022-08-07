import { HeroText } from "./HeroText";
import { images } from "./Images";
export const HeroBanner = () => {

  return (
    <section className="w-full lg:h-[650px] lg:relative">
      <div className="h-[450px] lg:h-[650px] lg:-mx-12 lg:w-[60vw] relative lg:absolute lg:top-0 lg:right-0">
        <div className="h-full absolute w-full overflow-clip lg:overflow-y-clip lg:overflow-x-visible">
          <div className="absolute lg:w-full -z-10 top-1/2 left-1/2 lg:-ml-28 lg:-mt-12 transform -translate-y-32 lg:-translate-y-56 -translate-x-1/2">
            <div className="-z-10 w-[150vw] lg:w-[75vw]">
              <svg
                viewBox="0 0 1503 1503"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={751.5} cy={751.5} r={467.5} fill="url(#a)" />
                <circle
                  cx={751.5}
                  cy={751.5}
                  r={607}
                  stroke="#4FB0DA"
                  strokeOpacity={0.55}
                  strokeWidth={3}
                />
                <circle
                  cx={751.5}
                  cy={751.5}
                  r={750}
                  stroke="#4FB0DA"
                  strokeOpacity={0.55}
                  strokeWidth={3}
                />
                <defs>
                  <radialGradient
                    id="a"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="rotate(90 0 751.5) scale(467.5)"
                  >
                    <stop stopColor="#F2F2F2" stopOpacity={0.85} />
                    <stop offset={1} stopColor="#4FB0DA" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
            <img src={images.azureSmall} alt="logo" className="absolute top-[calc(75vw/2)] left-1/2 ml-[100px] animate-revolve" />
            <img src={images.serverSmall} alt="logo" className="absolute top-[calc(75vw/2)] left-1/2 ml-[100px] animate-server" />
            <img src={images.office365Small} alt="logo" className="absolute top-[calc(75vw/2)] left-1/2 ml-[100px] animate-office" />
          </div>
        </div>
        <div className="flex justify-center lg:absolute lg:top-1/2 lg:left-1/2 lg:transform lg:-translate-y-56 lg:-translate-x-56">
          <div className="w-[320px] lg:w-[420px]">
            <img src={images.heroImageLarge} className="animate-wiggle" />
          </div>
        </div>
      </div>
      <div className="lg:pt-40 lg:w-[800px]">
        <HeroText />
      </div>
    </section>
  );
};
