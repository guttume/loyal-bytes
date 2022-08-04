import Link from "next/link";
import { images } from "../Images";

export const CourseHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="lg:relative lg:h-[calc(100vh-96px)]">
      <div className="hidden lg:block absolute w-[100vw] h-[calc(100vh-96px)] object-contain -z-10">
        <img
          src={images.azureAiHeroBg}
          alt="hero background"
          className="w-full h-full"
        />
      </div>
      <div className="lg:flex h-full px-4 lg:px-16">
        <div className="w-full lg:w-1/2 h-full py-12 flex justify-center items-center">
          <img
            src={images.azureAiHeroImage}
            alt="hero image"
            className="w-auto h-full"
          />
        </div>
        <div className="lg:w-1/2 h-full lg:flex justify-center items-center">
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-right">
              {title}
            </h1>
            <h2 className="text-xl lg:text-3xl my-4 text-right">{subtitle}</h2>
            <div className="flex space-x-12 justify-end my-16">
              <img src={images.awsLogo} alt="AWS logo" className="h-12" />
              <img src={images.gcpLogo} alt="GCP logo" className="h-12" />
              <img
                src={images.windowsLogo}
                alt="Windows logo"
                className="h-12"
              />
            </div>
            <div className="flex justify-end space-x-8">
              <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
                <a className="btn btn-primary">Apply Now</a>
              </Link>
                <a href={"/courses.html"} className="btn btn-outline-primary">View all courses</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
