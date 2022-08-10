import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./Images";

export const PortfolioSummary = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="my-4 text-xl font-semibold md:text-2xl">
          Over 40 top business placements
        </h2>
      </div>
      <div>
        <Swiper
          scrollbar={true}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={true}
          modules={[Autoplay]}
        >
          {images.placement.slides.map((brand, index) => (
            <SwiperSlide key={brand}>
              <div key={index} className="my-4">
                <img src={brand} alt="Brand Logo Picture" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className="flex flex-wrap justify-center my-12 space-x-6">
        <div className="flex flex-wrap justify-center my-12 space-x-6">
          {Object.values(images.placement.brands)
            .slice(0, 8)
            .map((brand, index) => (
              <div key={index.toString()} className="w-32">
                <img src={brand} alt="" />
              </div>
            ))}
        </div>
      </div> */}
      <div className="flex justify-center">
          <a href={"/placement.html"} className="text-xl font-bold text-gray-600 underline">View all</a>
      </div>
    </div>
  );
};
