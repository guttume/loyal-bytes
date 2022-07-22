import { DesktopComputerIcon } from "@heroicons/react/solid";
import { images } from "../components";

export default function CorporateTraining() {
  return (
    <>
      <section className="relative px-8 lg:px-0">
        <div className="hidden lg:block absolute top-0 right-0 w-[600px] transform translate-x-1/2">
          <img src={images.homePageRings} alt="rings picture" />
        </div>
        <div className="hidden lg:block absolute top-0 left-0 w-[900px] mt-48 transform -translate-x-1/2 -z-10">
          <img src={images.homePageRings} alt="rings picture" />
        </div>
        <h1 className="text-5xl lg:text-6xl text-center font-bold text-darkerText mt-12 leading-tight">
          Stay Ahead of Time with{" "}
          <span className="text-orange-500 block">Loyal Bytes</span>
        </h1>
        <h2 className="text-lg text-center w-full max-w-md mx-auto my-6">
          The holistic training outsourcing solutions provided by Loyal Bytes
          for Corporates
        </h2>
        <div className="flex items-center justify-center mt-4">
          <div className="lg:h-[590px]">
            <img
              src={images.corporateTrainingHero}
              alt="hero picture"
              className="h-full w-auto"
            />
          </div>
        </div>
      </section>
      <section className="lg:my-16 lg:px-12">
        <div className="bg-beige rounded-lg lg:flex px-8 lg:px-14 py-12 lg:space-x-8">
          <div className="lg:w-1/2">
            <span>
              <DesktopComputerIcon className="h-5 w-5 text-orange-500" />
            </span>
            <p className="font-semibold text-xl my-4">Corporate Trainings</p>
            <div className="space-y-4">
              <p>
                The holistic training outsourcing solutions provided by MSA for
                Corporates, are a suite of best-in-class training processes that
                enable customers to reduce costs, sharpen their business focus
                and obtain quantifiable results. These Corporate Learning
                Solutions leverage MSA&apos;s in-depth knowledge and widespread
                experience in Technology Training, Induction Training,
                Product/Application Roll-out Training, making the company a
                preferred training services partner.
              </p>
              <p>
                MSA&apos;s Corporate Training Programs, targeted at both large
                enterprises and Small and Medium Businesses (SMBs), deliver
                training that is focused and meets the requirements of a 21st
                century technology powered workplace.
              </p>
              <p>
                These corporate training programs additionally integrate proven
                best practices into business processes and redirect surplus
                training capital into core business solutions. MSA&apos;s
                Corporate Learning Solutions on high-end technologies and
                Managed Training Services (MTS) encompass Learning Content,
                Learning Delivery, Learning Technology and Learning
                Administration.
              </p>
              <p>
                In a world where technology is continuously evolving, it is not
                easy for your IT workforce to keep pace with what&apos;s
                emerging on the horizon and develop knowledge and skills while
                balancing work pressures and deadlines. At MSA, we understand
                what it takes for you to maintain your competitive advantage.
              </p>
              <p>
                Our training solutions are aimed at corporates that constantly
                need to adapt to new technologies and approaches within the
                business environment. These training programs enable users to
                quickly adapt to changes and perform efficiently in the
                real-time business environment. Whether it is change management,
                performance management or implementing new enterprise software,
                our roll-out training provides solutions for all.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2">
            {[0, 0, 0, 0, 0, 0].map((item, index) => (
              <div key={index} className="my-4">
                <img
                  src={images.corporateTrainingBrands}
                  alt="Brand Logo Picture"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-darkText px-8 lg:px-12">
        <div className="lg:flex py-16 items-center space-x-12">
          <div className="lg:w-1/2 bg-white rounded-xl flex justify-center py-8">
            <div>
              <img
                src={images.corporateTrainingVodafone}
                alt="vodafone logo"
                className="w-96"
              />
              <ul className="my-8 space-y-2 list-disc pr-4 pl-8">
                {[
                  "WINDOWS 10 FOR ENTERPRISE (Banglore)",
                  "WINDOWS SERVER 2012 and ADFS 3.0",
                  "WINDOWS 10 FOR ENTERPRISE (Pune)",
                  "WINDOWS 10 FOR ENTERPRISE (Kolkata)",
                  "WINDOWS 10 FOR ENTERPRISE (Chennai)",
                ].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src={images.corporateTrainingBoyOnPc}
              alt="A picture of a boy working on a computer"
              className="w-[600px]"
            />
          </div>
        </div>
      </section>
    </>
  );
}
