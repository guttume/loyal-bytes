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
    <section className="lg:relative lg:h-[calc(100vh-96px)] lg:pb-16 xl:pb-0">
      <div className="hidden lg:block absolute w-[100vw] h-[calc(100vh-96px)] object-contain -z-10">
        <img
          src={images.azureAiHeroBg}
          alt="hero background"
          className="w-full h-full"
        />
      </div>
      <div className="h-full px-4 lg:flex lg:px-16">
        <div className="flex items-center justify-center w-full h-full py-12 lg:w-1/2">
          <img
            src={images.azureAiHeroImage}
            alt="hero image"
            className="w-auto h-full"
          />
        </div>
        <div className="items-center justify-center h-full lg:w-1/2 lg:flex">
          <div>
            <h1 className="text-4xl font-bold text-right lg:text-6xl">
              {title}
            </h1>
            <h2 className="my-4 text-xl text-right lg:text-3xl">{subtitle}</h2>
            <div className="flex justify-end my-16 space-x-12">
              <img src={images.awsLogo} alt="AWS logo" className="h-12" />
              <img src={images.gcpLogo} alt="GCP logo" className="h-12" />
              <img
                src={images.windowsLogo}
                alt="Windows logo"
                className="h-12"
              />
            </div>
            <div className="flex justify-end space-x-8">
              <Link href={"https://forms.office.com/Pages/ResponsePage.aspx?id=Ym9HIoi1Mk29lHyvGTXTatrzVUYRhrRGpLyZwK3J4j9UMU4yV0FWS1ZWUENWM1ZIUjlHMDFLOFUwNCQlQCN0PWcu&embed=true"}>
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
