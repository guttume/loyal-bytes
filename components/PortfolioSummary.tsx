import Link from "next/link";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./Images";

export const PortfolioSummary = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-semibold text-2xl my-4">
          Over 40 top business placements
        </h2>
      </div>
      <div>
        <Swiper
          scrollbar={true}
          spaceBetween={20}
          slidesPerView={3}
          autoplay={true}
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          className="brands"
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
      {/* <div className="flex justify-center space-x-6 flex-wrap my-12">
        <div className="flex justify-center space-x-6 flex-wrap my-12">
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
        <Link href={"/placement"}>
          <a className="underline text-xl font-bold text-gray-600">View all</a>
        </Link>
      </div>
    </div>
  );
};
