import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Button,
  HeroBanner,
  images,
  Section,
  SectionSubTitle,
  SectionTitle,
  TestimonialItem
} from "../components";
import { HeroText } from "../components/HeroText";
import { PopularCourseItem } from "../components/PopularCourseItem";
import { Statistics } from "../components/Statistics";

export default function Index() {
  return (
    <>
      <div className="lg:flex flex-row-reverse">
        <HeroBanner />
        <HeroText />
      </div>
      <Statistics />
      <Section>
        <div className="pb-8 text-center">
          <SectionTitle>Popular Courses</SectionTitle>
          <SectionSubTitle>
            Courses with industry pioneers that will give your career wings
          </SectionSubTitle>
        </div>
        <div className="space-y-8 lg:space-y-0 lg:grid grid-cols-3 gap-16">
          <PopularCourseItem
            imageUrl={images.courseAzure}
            title="Microsoft Azure"
            color={"bg-yellow-500 text-yellow-50"}
          >
            Implementing Microsoft Azure Infrastructure Solutions, Architecting
            Microsoft Azure Solutions
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseWindows10}
            title="Windows 10 EDST"
            color={"bg-rose-500 text-rose-50"}
          >
            Configuring Windows 8, Supporting Windows 8.1, Deploying Windows
            Desktops and Enterprise Applications
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseExchange}
            title="Microsoft Exchange Server"
            color={"bg-amber-500 text-amber-50"}
          >
            Core Solutions of Microsoft Exchange Server 2013, Advanced Solutions
            of Microsoft Exchange Server 2013
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseActiveDirectory}
            title="Active Directory Right Management Services"
            color={"bg-green-500 text-green-50"}
          >
            This four-day instructor-led course provides students with the
            knowledge and skills
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseNetworking}
            title="MTA Networking Fundamentals"
            color={"bg-orange-500 text-orange-50"}
          >
            This training course helps you prepare for Microsoft Technology
            Associate Exam 98-366
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseOffice}
            title="Microsoft Office 365"
            color={"bg-blue-500 text-blue-50"}
          >
            Implementing Office 365, Managing Office 365 Identities and Services
          </PopularCourseItem>
        </div>
      </Section>
      <Section>
        <div className="text-center mb-8">
          <SectionTitle>Open Doors of Opportunities</SectionTitle>
          <SectionSubTitle>
            MONEY BACK GUARANTEE even in the last lecture
          </SectionSubTitle>
        </div>
        <div className="flex justify-center">
          <Button color="bg-orange-500 text-orange-50">View All Courses</Button>
        </div>
        <div className="mt-16 lg:relative lg:h-96">
          <div className="lg:border lg:absolute lg:w-full lg:px-16 lg:pl-24 lg:py-16 lg:rounded-lg bg-gradient-to-r from-teal-50 via-yellow-50 to-red-50">
            <div className="lg:w-[600px]">
              <SectionTitle>Corporate Trainings</SectionTitle>
              <SectionSubTitle>
                MSA&apos;s Corporate Training Programs, targeted at both large
                enterprises and Small and Medium Businesses (SMBs), deliver
                training that is focused and meets the requirements of a 21st
                century technology powered workplace.
              </SectionSubTitle>
              <SectionSubTitle>
                These corporate training programs additionally integrate proven
                best practices into business processes and redirect surplus
                training capital into core business solutions.
              </SectionSubTitle>
              <div className="flex justify-center lg:block my-4">
                <Button color="bg-black text-white">Know more</Button>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:w-[500px] lg:right-0 lg:mt-8 lg:mr-40">
            <img src={images.corporateTrainings} alt="corporate trainings" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="lg:mt-48 lg:h-[450px]">
          <div className="text-center mb-12">
            <SectionTitle>What Our Students Say About Us</SectionTitle>
          </div>
          <Swiper
            spaceBetween={10}
            slidesPerView={"auto"}
            freeMode={true}
            autoplay
            modules={[Pagination, FreeMode]}
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
      </Section>
      <Section>
        <div className="text-center">
          <SectionTitle>Over top business placements</SectionTitle>
        </div>
        <div>{/* images of brands goes here */}</div>
      </Section>
      <Section>
        <div className="bg-blue-800 text-blue-50 p-4 rounded-lg shadow-md lg:flex items-center justify-between lg:px-16 lg:py-12">
          <div>
            <p className="font-bold text-lg mb-3">Hurry up!</p>
            <p>
              We have limited seats. Apply now for courses and avail discounts.
            </p>
          </div>
          <div className="mt-6">
            <Button color="bg-white text-gray-800">View All Courses</Button>
          </div>
        </div>
      </Section>
      <section className="mt-4 -mx-12 px-8 bg-blue-500 pb-8">
        <div className="p-4 w-full max-w-3xl mx-auto lg:ml-12">
          <h2 className="text-2xl font-bold text-blue-50 mb-4 mt-16">
            Professional Web Design
          </h2>
          <p className="text-blue-50">
            Hi! My name is Dmitrii Rogoza and I&apos;m an expert in web design
            and branding. I can help you make your website more attractive.
          </p>
          <Button color="bg-black text-white border border-white mt-4">
            Get started
          </Button>
        </div>
      </section>
      <footer className="hidden lg:grid grid-cols-[2fr_1fr_1fr_1fr] text-white bg-black px-16 py-8 -mx-12 text-sm">
        <section className="w-64 text-xs ml-12">
          <div className="w-40">
            <img src={images.logo} alt="logo" />
          </div>
          <p className="mt-4">
            High level experience in web design and development knowledge,
            producing quality work.
          </p>
        </section>
        <section>
          <h3 className="font-semibold mb-4">Use Cases</h3>
          <ul>
            <li>Web designers</li>
            <li>Marketers</li>
            <li>Small Business</li>
            <li>Website Builder</li>
          </ul>
        </section>
        <section>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul>
            <li>
              <a href="">About us</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Teams</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </section>
        <section>
          <h3 className="mb-4">Follow us</h3>
          <ul className="flex space-x-2">
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-7 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2.5 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M10.006 18.443L6.326 7.118h7.36l-3.68 11.325zm0 0L1.168 7.118h5.158l3.68 11.325zM1.168 7.118l8.838 11.325-9.68-7.032a.762.762 0 0 1-.276-.852l1.118-3.441zm0 0L3.385.296a.38.38 0 0 1 .724 0l2.217 6.822H1.168zm8.838 11.325l3.68-11.325h5.157l-8.837 11.325zm8.837-11.325l1.119 3.441a.762.762 0 0 1-.277.852l-9.68 7.032 8.838-11.325zm0 0h-5.157L15.902.296a.38.38 0 0 1 .725 0l2.216 6.822z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091 2.026 2.026 0 0 1-.872-.39 1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813.282.186.566.28.852.28.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234 5.314 5.314 0 0 1-1.223-.507 3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365-.177-.564-.266-1.215-.266-1.952 0-1.049.342-1.942 1.027-2.68-.32-.788-.29-1.673.091-2.652.252-.079.625-.02 1.119.175.494.195.856.362 1.086.5.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143.39.98.424 1.864.103 2.653.685.737 1.028 1.63 1.028 2.68 0 .737-.089 1.39-.267 1.957-.177.568-.407 1.023-.689 1.366-.282.343-.633.63-1.053.865-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M4.376 8.068A5.944 5.944 0 0 0 4.056 10c0 .734.132 1.437.376 2.086a5.946 5.946 0 0 0 8.57 3.045h.001a5.96 5.96 0 0 0 2.564-3.043H10.22V8.132h9.605a10.019 10.019 0 0 1-.044 3.956 9.998 9.998 0 0 1-3.52 5.71A9.958 9.958 0 0 1 10 20 9.998 9.998 0 0 1 1.118 5.401 9.998 9.998 0 0 1 10 0c2.426 0 4.651.864 6.383 2.302l-3.24 2.652a5.948 5.948 0 0 0-8.767 3.114z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
                  <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
                  <circle cx="15.156" cy="4.858" r="1.237"></circle>
                </svg>
              </a>
            </li>
            <li>
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -4 24 24"
                  width="24"
                  fill="currentColor"
                >
                  <path d="M20 1.907a8.292 8.292 0 0 1-2.356.637A4.07 4.07 0 0 0 19.448.31a8.349 8.349 0 0 1-2.607.98A4.12 4.12 0 0 0 13.846.015c-2.266 0-4.103 1.81-4.103 4.04 0 .316.036.625.106.92A11.708 11.708 0 0 1 1.393.754a3.964 3.964 0 0 0-.554 2.03c0 1.403.724 2.64 1.824 3.363A4.151 4.151 0 0 1 .805 5.64v.05c0 1.958 1.415 3.591 3.29 3.963a4.216 4.216 0 0 1-1.08.141c-.265 0-.522-.025-.773-.075a4.098 4.098 0 0 0 3.832 2.807 8.312 8.312 0 0 1-5.095 1.727c-.332 0-.658-.02-.979-.056a11.727 11.727 0 0 0 6.289 1.818c7.547 0 11.673-6.157 11.673-11.496l-.014-.523A8.126 8.126 0 0 0 20 1.907z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </section>
      </footer>
    </>
  );
}
