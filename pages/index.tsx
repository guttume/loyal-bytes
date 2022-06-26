import { HeroBanner } from "../components";
import { HeroText } from "../components/HeroText";
import { PopularCourseItem } from "../components/PopularCourseItem";
import { Statistics } from "../components/Statistics";

export default function Index() {
  return (
    <>
      <div>
        <HeroBanner />
        <HeroText />
      </div>
      <Statistics />
      <div>
        <h2>Popular Courses</h2>
        <p>Courses with industry pioneers that will give your career wings</p>
        <div>
          <PopularCourseItem course={"azure"} title="Microsoft Azure" color={"bg-yellow-500"}>
            Implementing Microsoft Azure Infrastructure Solutions, Architecting Microsoft Azure Solutions
          </PopularCourseItem>
          <PopularCourseItem course={"windows"} title="Windows 10 EDST" color={"bg-rose-500"}>
            Configuring Windows 8, Supporting Windows 8.1, Deploying Windows Desktops and Enterprise Applications
          </PopularCourseItem>
          <PopularCourseItem course={"exchange"} title="Microsoft Exchange Server" color={"bg-amber-500"}>
            Core Solutions of Microsoft Exchange Server 2013, Advanced Solutions of Microsoft Exchange Server 2013
          </PopularCourseItem>
          <PopularCourseItem course={"directory"} title="Active Directory Right Management Services" color={"bg-green-500"}>
            This four-day instructor-led course provides students with the knowledge and skills
          </PopularCourseItem>
          <PopularCourseItem course={"networking"} title="MTA Networking Fundamentals" color={"bg-orange-500"}>
            This training course helps you prepare for Microsoft Technology Associate Exam 98-366
          </PopularCourseItem>
          <PopularCourseItem course={"office"} title="Microsoft Office 365" color={"bg-blue-500"}>
            Implementing Office 365, Managing Office 365 Identities and Services
          </PopularCourseItem>
        </div>
      </div>
    </>
  );
}
