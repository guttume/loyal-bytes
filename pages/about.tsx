import { images, PortfolioSummary, Statistics } from "../components";

export default function about() {
  return (
    <>
      <section className="px-8 lg:px-12">
        <div className="hidden lg:block absolute top-0 right-0 lg:h-[calc(100vh+64px)] -z-10">
          <img
            src={images.about.hero}
            alt="A picture of a girl flying in clouds"
            className="lg:h-full lg:w-auto"
          />
        </div>
        <div className="lg:h-[calc(100vh-126px)] lg:w-2/3 flex items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold md:text-5xl xl:text-7xl text-darkerText lg:pr-32">
                Make your career fly with{" "}
                <span className="text-orange-500">Loyal Bytes</span>
              </h1>
              <h2 className="text-xl font-bold text-gray-500 lg:pr-32">
                Attend the batch for the same courses as many times as you wish
                to,{" "}
                <span className="inline-block text-gray-800 text-2xl">
                  Without any extra cost. Lifetime repetition free.
                </span>
              </h2>
            </div>
            <div className="flex space-x-4">
              <span>
                <img
                  src={images.windowsLogo}
                  alt="A picture of windows logo"
                  className="w-auto h-16"
                />
              </span>
              <span>
                <img
                  src={images.awsLogo}
                  alt="A picture of AWS logo"
                  className="w-auto h-16"
                />
              </span>
              <span>
                <img
                  src={images.gcpLogo}
                  alt="A picture of Google Cloud logo"
                  className="w-auto h-16"
                />
              </span>
            </div>
            <div className="space-x-0 space-y-4 md:space-y-0 md:space-x-4 md:flex">
                <a href={"/courses.html"} className="block w-48 border border-orange-500 btn btn-primary">
                  View Courses
                </a>
                <a href={"/courses.html"} className="block w-48 btn btn-outline-primary">View All Courses</a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 mt-16 lg:mt-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-500 lg:px-12">
        <div className="lg:flex">
          <div className="flex justify-center pt-12 lg:w-1/2">
            <span className="blur-md">
              <img
                src={images.about.profile}
                alt="A picture of a working man"
              />
            </span>
          </div>
          <div className="py-16 lg:w-1/2">
            <div className="flex items-center mb-16 space-x-4">
              <div>
                <span className="block w-12 h-12 bg-orange-500 rounded-full">
                  <img
                    src={images.about.profile}
                    alt="A picture of a working man"
                    className="object-contain w-12 h-12 rounded-full"
                  />
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Ronak Shah</h3>
                <h4 className="text-lg text-gray-100">
                  Principal Solutions Architect
                </h4>
              </div>
            </div>
            <div className="mb-16 space-y-4 text-lg text-gray-100">
              <p>
                A consultant and a Microsoft Certified Trainer since past 13
                years for Microsoft cloud and on-premise technologies. A
                Solution Expert and technology evangelist with 13+ years of IT
                experience in offering services on various facets. A
                down-to-earth person who enjoys seeing students light up when
                they leverage their technical skills by seeking knowledge
                transfer and a highly skilled solution architect to implement
                Microsoft products in the most complex environments.
              </p>
              <p>
                Approachable, knowledgeable -- can fulfil many roles, from being
                a trainer to consulting complex infrastructure deployments and
                maintenance. Has hands-on experience in many technologies of
                Microsoft portfolio. Can adapt to the seismic shifts of the
                industry and still come out a winner when serving clients.
              </p>
            </div>
            <div className="flex justify-center space-x-8 lg:justify-start">
              <img
                src={images.about.microsoft}
                alt="Microsoft cerfiticication log"
                className="w-auto h-16"
              />
              <img
                src={images.about.certificate}
                alt="A picture of a microsoft certificate"
                className="w-auto h-16"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="relative px-8 py-16 lg:px-12"
        style={{
          backgroundColor: "#F2F6FF",
          backgroundImage: "url('/images/about/bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="items-center xl:flex">
          <div className="px-0 mb-8 text-darkerText xl:px-16 xl:mb-0">
            <h3 className="text-4xl font-bold xl:text-8xl">
              Understand technology and play with it
            </h3>
            <p className="text-xl italic font-bold text-right lg:text-3xl">
              &ndash; Ronak Shah
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Loyal Bytes Learning Services has an advanced learning center
              specifically created to provide training in quality management to
              working professionals. Loyal Bytes Learning Service&apos;s expertise in
              the design and management of distributed education programs that
              provide student learning environments, technology platforms, and
              related educational processes and services created should have
              holistic teaching and learning experience. Our IT training
              programs and IT certifications help professionals master the
              cutting-edge technologies deployed in today&apos;s organizations and
              gain an edge over their peers. These, coupled with strategic
              academic alliances, provide a truly enriching learning experience
            </p>
            <p>
              With its Center for Advanced Learning, Loyal Bytes Learning
              Services provides working professionals with quality management
              education.
            </p>
            <p>
              In addition to the technology platform, student study
              environments, and allied education services and processes that
              make up the total teaching-learning experience, Loyal Bytes
              Learning Services provides design and management expertise in
              distributed education programs.
            </p>
            <p>
              Professionals from our training programs and IT Certifications
              gain expertise in cutting-edge technologies that are deployed in
              today&apos;s organizations and get an edge over their peers.
            </p>
            <p>
              The combination of these, as well as academic alliances, ensures
              an incredibly rich educational experience.
            </p>
          </div>
        </div>
      </section>
      <section>
        <Statistics />
      </section>
      <section className="my-16">
      <PortfolioSummary />
        {/*<div>
          <div className="text-center">
            <h2 className="px-8 mb-4 text-2xl font-semibold">
              Over 32k+ software businesses growing with Ar Shakir.
            </h2>
          </div>
          <div className="flex flex-wrap justify-center px-2 my-12 space-x-6">
            {Object.values(images.placement.brands)
              .slice(0, 8)
              .map((brand, index) => (
                <div key={index.toString()} className="w-32">
                  <img src={brand} alt="" />
                </div>
              ))}
          </div>
        </div>*/}
      </section>
    </>
  );
}
