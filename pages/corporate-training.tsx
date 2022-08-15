import { DesktopComputerIcon } from "@heroicons/react/solid";
import { useMediaQuery } from "react-responsive";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { images } from "../components";
import { courses } from "../data/training-courses";

export default function CorporateTraining() {
  const isMedium = useMediaQuery({ query: "(min-width: 768px)" });
  return (
    <>
      <section className="relative px-8 lg:px-0 overflow-clip">
        <div className="hidden lg:block absolute top-0 right-0 w-[600px] transform translate-x-1/2">
          <img src={images.homePageRings} alt="rings picture" />
        </div>
        <div className="hidden lg:block absolute top-0 left-0 w-[900px] mt-48 transform -translate-x-1/2 -z-10">
          <img src={images.homePageRings} alt="rings picture" />
        </div>
        <h1 className="mt-12 text-5xl font-bold leading-tight text-center lg:text-6xl text-darkerText">
          Stay Ahead of Time with{" "}
          <span className="block text-orange-500">Loyal Bytes</span>
        </h1>
        <h2 className="w-full max-w-md mx-auto my-6 text-lg text-center">
          The holistic training outsourcing solutions provided by Loyal Bytes
          for Corporates
        </h2>
        <div className="flex items-center justify-center mt-4">
          <div className="lg:h-[590px]">
            <img
              src={images.corporateTrainingHero}
              alt="hero picture"
              className="w-auto h-full"
            />
          </div>
        </div>
      </section>
      <section className="lg:my-16 lg:px-12">
        <div className="px-8 py-12 rounded-lg bg-beige lg:px-14">
          <div className="items-center space-y-4 lg:space-y-0 lg:flex lg:space-x-8">
            <div className="lg:w-1/2">
              <span>
                <DesktopComputerIcon className="w-5 h-5 text-orange-500" />
              </span>
              <p className="my-4 text-xl font-semibold">Corporate Trainings</p>
              <div className="space-y-4">
                <p className="text-justify">
                  The holistic training outsourcing solutions provided by LBLS
                  for Corporates are a suite of best-in-class training processes
                  that enable customers to reduce costs, sharpen their business
                  focus and obtain quantifiable results. These Corporate
                  Learning Solutions leverage LBLS&apos;s in-depth knowledge and
                  widespread experience in Technology Training, Induction
                  Training, and Product/Application Roll-out Training, making
                  the company a preferred training services partner.
                </p>
                <p className="text-justify">
                  LBLS&apos;s Corporate Training Programs, targeted at both
                  large enterprises and Small and Medium Businesses (SMBs),
                  deliver training that is focused and meets the requirements of
                  a 21st-century technology-powered workplace.
                </p>
                <p className="text-justify">
                  These corporate training programs additionally integrate
                  proven best practices into business processes and redirect
                  surplus training capital into core business solutions.
                  LBLS&apos;s Corporate Learning Solutions on high-end
                  technologies and Managed Training Services (MTS) encompass
                  Learning Content, Learning Delivery, Learning Technology, and
                  Learning Administration.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center lg:w-1/2">
              <img
                src={images.corporateTrainingBoyOnPc}
                alt="A picture of a boy working on a computer"
                className="w-[600px]"
              />
            </div>
          </div>
          <div className="mt-4 space-y-4">
            <p className="text-justify">
              In a world where technology is continuously evolving, it is not
              easy for your IT workforce to keep pace with what&apos;s emerging
              on the horizon and develop knowledge and skills while balancing
              work pressures and deadlines. At LBLS, we understand what it takes
              for you to maintain your competitive advantage.
            </p>
            <p className="text-justify">
              Our training solutions are aimed at corporates that constantly
              need to adapt to new technologies and approaches within the
              business environment. These training programs enable users to
              quickly adapt to changes and perform efficiently in the real-time
              business environment. Whether it is change management, performance
              management, or implementing new enterprise software, our roll-out
              training provides solutions for all.
            </p>
          </div>
        </div>
      </section>
      <section className="px-8 mb-32 bg-darkText lg:px-12">
        <div className="py-16">
          <div className="flex justify-center w-full max-w-6xl py-8 mx-auto bg-white rounded-xl">
            <Swiper
              scrollbar={false}
              spaceBetween={10}
              slidesPerView={isMedium ? 4 : 1}
              autoplay={true}
              speed={40}
              navigation={true}
              modules={[Navigation, Autoplay]}
            >
              {courses.map((course, index) => (
                <SwiperSlide key={index.toString()}>
                  <div className="mx-4">
                    <img
                      src={course.image}
                      alt="vodafone logo"
                      className="w-84"
                    />
                    <ul className="pl-8 pr-4 my-8 space-y-2 text-sm list-disc">
                      {course.courses.map((item, index) => (
                        <li key={index.toString()}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}
