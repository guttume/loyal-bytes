import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "./Images";
import { SectionTitle } from "./section";
import { TestimonialItem } from "./TestimonialItem";

export const Testimonial = () => {
  return (
    <div className="lg:mt-48 lg:h-[450px]">
      <div className="text-center mb-12">
        <SectionTitle>What Our Students Say About Us</SectionTitle>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={"auto"}
        freeMode={true}
        autoplay={true}
        modules={[Pagination, FreeMode, Autoplay]}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <TestimonialItem
            dateText={"May 8, 2000"}
            imageUrl={images.sliderImageOne}
            title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            fugiat facilis error, voluptatum, molestias assumenda pariatur ex
            eos sequi nisi corrupti atque quod impedit totam expedita ipsum enim
            culpa libero?
          </TestimonialItem>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            dateText={"May 8, 2000"}
            imageUrl={images.sliderImageTwo}
            title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            fugiat facilis error, voluptatum, molestias assumenda pariatur ex
            eos sequi nisi corrupti atque quod impedit totam expedita ipsum enim
            culpa libero?
          </TestimonialItem>
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem
            dateText={"May 8, 2000"}
            imageUrl={images.sliderImageOne}
            title={"Lorem ipsum dolor sit amet, consectetur adipisicing elit"}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            fugiat facilis error, voluptatum, molestias assumenda pariatur ex
            eos sequi nisi corrupti atque quod impedit totam expedita ipsum enim
            culpa libero?
          </TestimonialItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
