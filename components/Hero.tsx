import { images } from "./Images";
export const HeroBanner = () => {
  return (
    <section className="h-[450px] w-full relative overflow-clip lg:overflow-x-visible">
      <div
        className="h-[calc(100vw+240px)] w-[calc(100vw+240px)] lg:h-[calc(50vw+240px)] lg:w-[calc(50vw+240px)] rounded-full border border-sky-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-44 -z-50"
        // style={{ width: `calc(100vw + 240px)`, height: `calc(100vw + 240px)` }}
      >
        <div className="absolute left-1/2 -ml-16 top-0 -mt-6">
          <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
            <img src={images.office365Small} alt="Microsoft Office 365" />
          </span>
        </div>
        <div className="absolute right-[150px] top-[80px]">
          <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
            <img src={images.serverSmall} alt="server" />
          </span>
        </div>
      </div>
      <div
        className="h-[calc(100vw+120px)] w-[calc(100vw+120px)] lg:h-[calc(50vw+120px)] lg:w-[calc(50vw+120px)] rounded-full border border-sky-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-28 -z-50"
        // style={{ width: `calc(100vw + 120px)`, height: `calc(100vw + 120px)` }}
      >
        <div className="absolute left-[24px] top-[104px]">
          <span className="w-12 h-12 p-1 rounded-full bg-white shadow-lg flex justify-center items-center">
            <img src={images.azureSmall} alt="azure" />
          </span>
        </div>
      </div>
      <div className="w-[100vw] h-[100vw] lg:w-[50vw] lg:h-[50vw] rounded-full bg-sky-300 absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-12 -z-50"></div>
      <div className="flex justify-center mt-18">
        <div className="w-[320px] lg:w-[320px]">
          <img src={images.heroImageLarge} />
        </div>
      </div>
    </section>
  );
};
