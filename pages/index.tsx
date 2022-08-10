import Link from "next/link";
import { useRef } from "react";
import {
  HeroBanner,
  HurryUp,
  images,
  PortfolioSummary,
  Section,
  SectionSubTitle,
  SectionTitle,
  Testimonial
} from "../components";
import { PopularCourseItem } from "../components/PopularCourseItem";
import { Statistics } from "../components/Statistics";
import useIntersectionObserver from "../hooks";

export default function Index() {
  const ref = useRef<HTMLQuoteElement | null>(null)
  const entry = useIntersectionObserver(ref, {})
  const isVisible = !!entry?.isIntersecting
  return (
    <div className="lg:px-12">
      <div className="flex-row-reverse lg:flex">
        <HeroBanner />
      </div>
      <Statistics />
      <Section>
        <div className="pb-8 text-center">
          <SectionTitle>Popular Courses</SectionTitle>
          <SectionSubTitle>
            Courses with industry pioneers that will give your career wings
          </SectionSubTitle>
        </div>
        <div className="grid-cols-3 gap-16 space-y-8 lg:space-y-0 lg:grid">
          <PopularCourseItem
            imageUrl={images.courseAzure}
            title="Azure Cloud"
            color={"bg-yellow-500 text-yellow-50"}
          >
            Implementing Microsoft Azure Infrastructure Solutions, Architecting
            Microsoft Azure Solutions
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseWindows10}
            title="Windows Server MCSC"
            color={"bg-rose-500 text-rose-50"}
          >
            Configuring Windows 8, Supporting Windows 8.1, Deploying Windows
            Desktops and Enterprise Applications
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseM365}
            title="Microsoft 365"
            color={"bg-green-500 text-green-50"}
          >
            This four-day instructor-led course provides students with the
            knowledge and skills
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseOffice}
            title="Office 365"
            color={"bg-blue-500 text-blue-50"}
          >
            Implementing Office 365, Managing Office 365 Identities and Services
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseActiveDirectory}
            title="Active Directory"
            color={"bg-orange-500 text-orange-50"}
          >
            This training course helps you prepare for Microsoft Technology
            Associate Exam 98-366
          </PopularCourseItem>
          <PopularCourseItem
            imageUrl={images.courseExchange}
            title="Microsoft Exchange Server"
            color={"bg-amber-500 text-amber-50"}
          >
            Core Solutions of Microsoft Exchange Server 2013, Advanced Solutions
            of Microsoft Exchange Server 2013
          </PopularCourseItem>
        </div>
      </Section>
      <Section>
        <div className="mb-8 text-center">
          <div className="absolute w-24 left-1/2 lg:-ml-56 lg:-mt-12">
            <img src={images.patterns} alt="background art" />
          </div>
          <div className="absolute left-0 w-12 lg:left-1/2 lg:-ml-64 -z-10">
            <img src={images.leftConfetti} alt="background art" />
          </div>
          <div className="absolute right-0 w-20 lg:left-1/2 lg:ml-48 -z-10">
            <img src={images.rightConfetti} alt="background art" />
          </div>
          <SectionTitle>
            <span className="text-gray-400">Open Doors of Opportunities</span>
            </SectionTitle>
        <blockquote ref={ref} className={`p-4 text-xl font-bold animate__animated ${isVisible && 'animate__tada'}`}>
            &ldquo;MONEY BACK GUARANTEE even in the last lecture&rdquo;
          </blockquote>
        </div>
        <div className="flex justify-center">
          <Link href={"/courses"}>
            <a className="btn btn-primary">View All Courses</a>
          </Link>
        </div>
        <div className="mt-16 lg:relative lg:h-96">
          <div className="absolute top-0 w-5/12 -mt-40 -ml-56">
            <img src={images.homePageRings} alt="rings" />
          </div>
          <div className="lg:absolute lg:w-80 xl:w-[400px] 2xl:w-[500px] lg:right-0 lg:mt-8 lg:mr-4 xl:mr-8 2xl:mr-40 z-10">
            <img src={images.corporateTrainings} alt="corporate trainings" />
          </div>
          <div className="lg:border lg:absolute lg:w-full lg:px-4 2xl:pl-24 lg:py-16 lg:rounded-lg bg-gradient-to-r from-teal-50 via-yellow-50 to-red-50">
            <div className="lg:w-[600px] p-4">
              <SectionTitle>Corporate Trainings</SectionTitle>
              <SectionSubTitle>
                The holistic training outsourcing solutions provided by LBLS for
                Corporates are a suite of best-in-class training processes that
                enable customers to reduce costs, sharpen their business focus
                and obtain quantifiable results. These Corporate Learning
                Solutions leverage LBLS&apos;s in-depth knowledge and widespread
                experience in Technology Training, Induction Training, and
                Product/Application Roll-out Training, making the company a
                preferred training services partner.
              </SectionSubTitle>
              <SectionSubTitle>
                LBLS&apos;s Corporate Training Programs, targeted at both large
                enterprises and Small and Medium Businesses (SMBs), deliver
                training that is focused and meets the requirements of a
                21st-century technology-powered workplace.
              </SectionSubTitle>
              <div className="flex justify-center my-4 lg:block">
                <Link href={"/corporate-training"}>
                  <a className="btn btn-black">Know more</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <Testimonial />
      </Section>
      <Section>
        <PortfolioSummary />
      </Section>
      <Section>
        <HurryUp />
      </Section>
    </div>
  );
}
