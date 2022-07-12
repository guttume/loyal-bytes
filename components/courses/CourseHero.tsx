import { images } from "../Images";

export const CourseHero = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <section className="relative h-[calc(100vh-96px)]">
      <div className="absolute w-[100vw] h-[calc(100vh-96px)] object-contain -z-10">
        <img
          src={images.azureAiHeroBg}
          alt="hero background"
          className="w-full h-full"
        />
      </div>
      <div className="flex h-full px-16">
        <div className="w-1/2 h-full py-12 flex justify-center items-center">
          <img
            src={images.azureAiHeroImage}
            alt="hero image"
            className="w-auto h-full"
          />
        </div>
        <div className="w-1/2 h-full flex justify-center items-center">
          <div>
            <h1 className="text-6xl font-bold text-right">{title}</h1>
            <h2 className="text-3xl my-4 text-right">{subtitle}</h2>
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
              <button className="btn btn-primary">Apply Now</button>
              <button className="btn btn-outline-primary">
                View all courses
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
