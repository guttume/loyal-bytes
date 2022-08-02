import Link from "next/link";
import { images, Statistics } from "../components";

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
              <h1 className="text-5xl lg:text-7xl font-bold text-darkerText">
                Make your career fly with{" "}
                <span className="text-orange-500">Loyal Bytes</span>
              </h1>
              <h2 className="text-xl font-bold text-gray-500">
                Attend the batch for the same courses as many times as you wish
                to,{" "}
                <span className="block text-gray-800">
                  without any extra cost
                </span>
              </h2>
            </div>
            <div className="flex space-x-4">
              <span>
                <img
                  src={images.windowsLogo}
                  alt="A picture of windows logo"
                  className="h-16 w-auto"
                />
              </span>
              <span>
                <img
                  src={images.awsLogo}
                  alt="A picture of AWS logo"
                  className="h-16 w-auto"
                />
              </span>
              <span>
                <img
                  src={images.gcpLogo}
                  alt="A picture of Google Cloud logo"
                  className="h-16 w-auto"
                />
              </span>
            </div>
            <div className="flex lg:block space-x-4">
              <Link href={"/courses"}>
                <a className="btn btn-primary border border-orange-500 w-48">
                  View Courses
                </a>
              </Link>
              <Link href={"/courses"}>
                <a className="btn btn-outline-primary">View All Courses</a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-500 px-8 lg:px-12">
        <div className="lg:flex">
          <div className="lg:w-1/2 relative flex justify-center pt-12">
            <span className="blur-md">
              <img
                src={images.about.profile}
                alt="A picture of a working man"
              />
            </span>
            <p className="absolute bottom-0 left-1/2 mb-12 transform -translate-x-1/2 w-48 text-center text-white font-semibold">
              &quot;We are the pioneers of the IT in India and abroad&quot;
            </p>
          </div>
          <div className="lg:w-1/2 py-16">
            <div className="flex items-center space-x-4 mb-16">
              <div>
                <span className="block h-12 w-12 bg-orange-500 rounded-full">
                  <img
                    src={images.about.profile}
                    alt="A picture of a working man"
                    className="object-contain rounded-full"
                  />
                </span>
              </div>
              <div>
                <h3 className="text-2xl text-white font-bold">Ronak Shah</h3>
                <h4 className="text-lg text-gray-100">
                  Principal Solutions Architect
                </h4>
              </div>
            </div>
            <div className="text-gray-100 text-lg space-y-4 mb-16">
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
            <div className="flex justify-center lg:justify-start space-x-8">
              <img
                src={images.about.microsoft}
                alt="Microsoft cerfiticication log"
                className="h-16 w-auto"
              />
              <img
                src={images.about.certificate}
                alt="A picture of a microsoft certificate"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="px-8 lg:px-12 py-16 relative"
        style={{
          backgroundColor: "#F2F6FF",
          backgroundImage: "url('/images/about/bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:flex items-center">
          <div className="text-darkerText px-0 lg:px-16 mb-8 lg:mb-0">
            <h3 className="text-4xl lg:text-8xl font-bold">
              Understand technology and play with it
            </h3>
            <p className="text-right text-xl lg:text-3xl italic font-bold">
              &ndash; Ronak Shah
            </p>
          </div>
          <div className="space-y-6">
            <p>
              Loyal Bytes Learning Services has an advanced learning center
              specifically created to provide training in quality management to
              working professionals. Loyal Bytes Learning Service's expertise in
              the design and management of distributed education programs that
              provide student learning environments, technology platforms, and
              related educational processes and services created should have
              holistic teaching and learning experience. Our IT training
              programs and IT certifications help professionals master the
              cutting-edge technologies deployed in today's organizations and
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
              today's organizations and get an edge over their peers.
            </p>
            <p>
              The combination of these, as well as academic alliances, ensures
              an incredibly rich educational experience.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="px-8 lg:px-12 my-16">
        <div className="lg:flex lg:space-x-6">
          <div className="space-y-6 mt-4">
            <h3 className="text-5xl font-bold text-darkerText">
              We help you to
              <br className="hidden" /> achieve your goals
            </h3>
            <h4 className="text-xl text-gray-500">
              We love what we do and we do it with passion. We value the
              experimentation of the message and smart incentives.
            </h4>
            <Link href={"/corporate-training"}>
              <a className="btn btn-primary inline-block">Corporate Training</a>
            </Link>
          </div>
          <div className="flex space-x-4 items-center mt-4 lg:mt-0">
            <div className="flex space-x-4">
              <img
                src={images.about.grids.one}
                alt="A Picture of a man"
                className="lg:w-[360px] lg:h-[408px]"
              />
            </div>
            <div>
              <img
                src={images.about.grids.two}
                alt="A Picture of a man"
                className="lg:w-[360px] lg:h-[408px]"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          <img
            src={images.about.grids.three}
            alt="A Picture of a man"
            className="lg:w-[363px] lg:h-[408px]"
          />
          <img
            src={images.about.grids.four}
            alt="A Picture of a man"
            className="lg:w-[363px] lg:h-[408px]"
          />
          <img
            src={images.about.grids.five}
            alt="A Picture of a man"
            className="lg:w-[363px] lg:h-[408px]"
          />
          <img
            src={images.about.grids.six}
            alt="A Picture of a man"
            className="lg:w-[363px] lg:h-[408px]"
          />
        </div>
      </section> */}
      <section>
        <Statistics />
      </section>
      <section className="my-16">
        <div>
          <div className="text-center">
            <h2 className="font-semibold text-2xl mb-4">
              Over 32k+ software businesses growing with Ar Shakir.
            </h2>
          </div>
          <div className="flex justify-center space-x-6 flex-wrap my-12">
            {Object.values(images.placement.brands)
              .slice(0, 8)
              .map((brand, index) => (
                <div key={index.toString()} className="w-32">
                  <img src={brand} alt="" />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
