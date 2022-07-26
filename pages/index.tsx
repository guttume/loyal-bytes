import Link from "next/link";
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

export default function Index() {
  return (
    <div className="lg:px-12">
      <div className="lg:flex flex-row-reverse">
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
          <div className="absolute left-1/2 lg:-ml-56 w-24 lg:-mt-12">
            <img src={images.patterns} alt="background art" />
          </div>
          <div className="absolute lg:left-1/2 left-0 lg:-ml-64 w-12 mt-24 -z-10">
            <img src={images.leftConfetti} alt="background art" />
          </div>
          <div className="absolute right-0 lg:left-1/2 lg:ml-48 w-20 mt-24 -z-10">
            <img src={images.rightConfetti} alt="background art" />
          </div>
          <SectionTitle>Open Doors of Opportunities</SectionTitle>
          <SectionSubTitle>
            MONEY BACK GUARANTEE even in the last lecture
          </SectionSubTitle>
        </div>
        <div className="flex justify-center">
          <Link href={"/courses"}>
            <a className="btn btn-primary">View All Courses</a>
          </Link>
        </div>
        <div className="mt-16 lg:relative lg:h-96">
          <div className="absolute w-5/12 top-0 -mt-40 -ml-56">
            <img src={images.homePageRings} alt="rings" />
          </div>
          <div className="lg:absolute lg:w-[500px] lg:right-0 lg:mt-8 lg:mr-40 z-10">
            <img src={images.corporateTrainings} alt="corporate trainings" />
          </div>
          <div className="lg:border lg:absolute lg:w-full lg:px-16 lg:pl-24 lg:py-16 lg:rounded-lg bg-gradient-to-r from-teal-50 via-yellow-50 to-red-50">
            <div className="lg:w-[600px] p-4">
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
