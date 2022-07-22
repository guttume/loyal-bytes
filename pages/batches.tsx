import { Autoplay, FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { HurryUp, images, TestimonialItem } from "../components";
import { batches } from "../data/batches";

export default function Batches() {
  return (
    <>
      <section className="lg:flex bg-gray-200 items-center lg:h-[520px] px-8 lg:p-0">
        <div className="lg:w-1/2 lg:pl-12 space-y-8 py-12 lg:py-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-darkerText">
            Learn at your time in your comfort zones
          </h1>
          <h2 className="text-xl">
            With Loyal Bytes you get flexible choices course batches
          </h2>
          <button className="btn btn-primary">Hear from our students</button>
        </div>
        <div className="lg:w-1/2">
          <div className="pb-16 lg:pb-0 lg:mt-48">
            <img src={images.batchesHero} alt="hero picture" />
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-12 mt-16 lg:mt-40">
        <h3 className="text-center text-5xl font-bold text-darkText">
          Updated Batch Timings
        </h3>
        <h4 className="text-center text-xl my-6 text-gray-500">
          We regularly keep on updating batch timings
        </h4>
        <table className="table-fixed w-full max-w-7xl mx-auto">
          <thead className="bg-blue-800 text-blue-50">
            <tr>
              <th className="rounded-l py-3">Courses</th>
              <th>Days</th>
              <th>Batch Mode</th>
              <th className="hidden lg:block py-3">Time</th>
              <th className="rounded-r py-3">Duration</th>
            </tr>
          </thead>
          <tbody>
            {batches.map((batch) => (
              <tr key={batch.course} className="text-center even:bg-gray-200">
                <td className="py-4 px-2 rounded-l">{batch.course}</td>
                <td>{batch.days}</td>
                <td>{batch.mode}</td>
                <td className="hidden lg:block py-4">{batch.time}</td>
                <td className="rounded-r">{batch.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="mt-16 lg:mt-32">
        <h3 className="text-center text-5xl font-bold text-darkText">
          Our Students are Placed Globally
        </h3>
        <h4 className="text-center text-xl mt-6">
          More than 40 global companies
        </h4>
        <div className="flex justify-center space-x-6 flex-wrap lg:my-12">
          <div className="w-32 py-4">
            <img src={images.brandsZepplin} alt="Zepplin logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsOracle} alt="Oracle logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsMorpheus} alt="Morpheus logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsSamsung} alt="Samsung logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsMonday} alt="Monday logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsSegment} alt="Segment logo" />
          </div>
          <div className="w-32 py-4">
            <img src={images.brandsProtonet} alt="Protonet logo" />
          </div>
        </div>
        <div className="flex justify-center">
          <a href="#" className="underline text-xl font-bold text-gray-600">
            View all
          </a>
        </div>
      </section>
      <section className="px-8 lg:px-0 mt-16 lg:-mt-32">
        <div className="lg:mt-48 lg:h-[450px]">
          <h3 className="text-5xl font-bold text-darkText text-center mb-16">
            What Our Students Say About Us
          </h3>
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
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                fugiat facilis error, voluptatum, molestias assumenda pariatur
                ex eos sequi nisi corrupti atque quod impedit totam expedita
                ipsum enim culpa libero?
              </TestimonialItem>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                dateText={"May 8, 2000"}
                imageUrl={images.sliderImageTwo}
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                fugiat facilis error, voluptatum, molestias assumenda pariatur
                ex eos sequi nisi corrupti atque quod impedit totam expedita
                ipsum enim culpa libero?
              </TestimonialItem>
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialItem
                dateText={"May 8, 2000"}
                imageUrl={images.sliderImageOne}
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                }
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
                fugiat facilis error, voluptatum, molestias assumenda pariatur
                ex eos sequi nisi corrupti atque quod impedit totam expedita
                ipsum enim culpa libero?
              </TestimonialItem>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className="lg:px-12 my-6">
        <HurryUp />
      </section>
    </>
  );
}
