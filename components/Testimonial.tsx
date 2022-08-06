import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data/testimonials";
import { SectionTitle } from "./section";
import { TestimonialItem } from "./TestimonialItem";

export const Testimonial = () => {
  return (
    <div className="lg:mt-48 w-full">
      <div className="text-center mb-4">
        <SectionTitle>What Our Students Say About Us</SectionTitle>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        freeMode={true}
        scrollbar={true}
        autoplay={true}
        modules={[Pagination, FreeMode, Autoplay]}
        pagination={{ clickable: true }}
      >
        {testimonials.slice(0, 5).map((testimonial) => (
          <SwiperSlide key={testimonial.name}>
            <TestimonialItem
              company={testimonial.company}
              imageUrl={testimonial.image}
              title={testimonial.name}
              designation={testimonial.designation}
            >
              {testimonial.body.map((body, index) => (
                <p key={index.toString()}>{body}</p>
              ))}
            </TestimonialItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
