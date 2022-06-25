import { AzureImageSmall, HeroImageSmall, Office365ImageSmall, ServerImageSmall } from "./Images";

export const HeroBanner = () => {
  return (
    <section className="h-[450px] w-full relative overflow-clip">
      <div className="absolute right-[14px] top-[70px]">
        <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
          <ServerImageSmall />
        </span>
      </div>
      <div className="absolute left-[14px] top-[154px]">
        <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
          <AzureImageSmall />
        </span>
      </div>
      <div className="absolute left-1/2 -ml-16 top-[25px]">
        <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
          <Office365ImageSmall />
        </span>
      </div>
      <div
        className="rounded-full border border-sky-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-44 -z-50"
        style={{ width: `calc(100vw + 240px)`, height: `calc(100vw + 240px)` }}
      ></div>
      <div
        className="rounded-full border border-sky-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-28 -z-50"
        style={{ width: `calc(100vw + 120px)`, height: `calc(100vw + 120px)` }}
      ></div>
      <div className="w-[100vw] h-[100vw] rounded-full bg-sky-300 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-12 -z-50"></div>
      <div className="flex justify-center">
        <HeroImageSmall />
      </div>
    </section>
  );
};
