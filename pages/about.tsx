import { images, Statistics } from "../components";

export default function about() {
  return (
    <>
      <section className="px-12">
        <div className="absolute top-0 right-0 h-[calc(100vh+64px)] -z-10">
          <img
            src={images.about.hero}
            alt="A picture of a girl flying in clouds"
            className="h-full w-auto"
          />
        </div>
        <div className="h-[calc(100vh-126px)] w-2/3 flex items-center">
          <div className="space-y-12">
            <div className="space-y-6">
              <h1 className="text-7xl font-bold text-darkerText">
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
            <div className="space-x-4">
              <button className="btn btn-primary border border-orange-500 w-48">
                View Courses
              </button>
              <button className="btn btn-outline-primary">
                View All Courses
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 bg-gradient-to-r from-blue-500 via-indigo-500 to-indigo-500 px-12">
        <div className="flex">
          <div className="w-1/2 relative flex justify-center pt-12">
            <span className="blur-md">
              <img
                src={images.about.profile}
                alt="A picture of a working man"
              />
            </span>
            <p className="absolute bottom-0 left-1/2 mb-12 transform -translate-x-1/2 w-48 text-center text-white font-semibold">
              "We are the pioneers of the IT in India and abroad"
            </p>
          </div>
          <div className="w-1/2 py-16">
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
            <div className="flex space-x-8">
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
        className="px-12 py-16 relative"
        style={{
          backgroundColor: "#F2F6FF",
          backgroundImage: "url('/images/about/bg.png')",
          backgroundSize: "cover",
        }}
      >
        <div className="flex items-center">
          <div className="text-darkerText px-16">
            <h3 className="text-8xl font-bold">
              Understand technology and play with it
            </h3>
            <p className="text-right text-3xl font-bold">&ndash; Ronak Shah</p>
          </div>
          <div className="space-y-6">
            <p>
              MSACADEME was founded in September 2013 by professionals to
              explore technology to its best, share information and knowledge
              gained from experiences on projects on the latest trends in the
              industry and ultimately to inculcate the same expertise in
              professionals looking forward to us.Technology never stops
              changing and learning never ends and so we relentlessly keep on
              improvising our training methods and techniques. MSA assures you
              the finest training in industry on renowned certifications of I.T
              Infrastructure Management Services from Microsoft, VMWare, ITIL,
              etc. with MONEY BACK GUARANTEE even in the last lecture. The
              founder of this academy Ronak Shah is of the notion that
              “understand the technology and play with it rather than merely
              learning how to configure it because technology is an iceberg and
              most of it lies undiscovered unless u dig it out”. No doubt, at
              this young age he has trained the maximum number of participants
              and companies than any other consultant in Microsoft training
              domain. Unlike other training providers we do not dupe our
              participants or give them false hopes about successful careers. We
              assure and deliver to them what we commit. We deliver training
              exactly as per the needs of the industry and substantiate the
              level of expectation of the industry needs.
            </p>
            <p>
              The goal of MSA is to build a community of core professionals and
              tech geeks who can offer infrastructure management services in
              various facets of I.T. MSA&apos;s teaching techniques and courses
              change with the ever changing I.T landscape. MSA&apos;s prime
              target is to provide comprehensive trainings on industry
              certifications like MICROSOFT, CISCO, ITIL, CompTIA and others.
              MSA&apos;s training is more a group discussion where people
              participate to understand the technology with a deep dive, rather
              than just learning it for job.
            </p>
            <p>
              We provide best in class training which includes labs and exposure
              to real world scenarios. Trainings are conducted with thorough
              hands-on for students with an aim to create skilled professionals
              and expertise in the content to understand the facts of the
              technology and its application in any production environment. We
              assure any fresher a career with flying colors in the I.T
              industry.
            </p>
          </div>
        </div>
      </section>
      <section className="px-12 my-16">
        <div className="flex space-x-6">
          <div className="space-y-6 mt-4">
            <h3 className="text-5xl font-bold text-darkerText">
              We help you to
              <br /> achieve your goals
            </h3>
            <h4 className="text-xl text-gray-500">
              We love what we do and we do it with passion. We value the
              experimentation of the message and smart incentives.
            </h4>
            <button className="btn btn-primary">Corporate Training</button>
          </div>
          <div className="flex space-x-4">
            <img
              src={images.about.grids.one}
              alt="A Picture of a man"
              className="w-[360px] h-[408px]"
            />
          </div>
          <div>
            <img
              src={images.about.grids.two}
              alt="A Picture of a man"
              className="w-[360px] h-[408px]"
            />
          </div>
        </div>
        <div className="flex space-x-8 mt-4">
          <img
            src={images.about.grids.three}
            alt="A Picture of a man"
            className="w-[363px] h-[408px]"
          />
          <img
            src={images.about.grids.four}
            alt="A Picture of a man"
            className="w-[363px] h-[408px]"
          />
          <img
            src={images.about.grids.five}
            alt="A Picture of a man"
            className="w-[363px] h-[408px]"
          />
          <img
            src={images.about.grids.six}
            alt="A Picture of a man"
            className="w-[363px] h-[408px]"
          />
        </div>
      </section>
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
            <div className="w-32 py-4">
              <img src={images.brandsZepplin} alt="Zepplin logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsOracle} alt="Oracle logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsMorpheus} alt="Morpheus logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsSamsung} alt="Samsung logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsMonday} alt="Monday logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsSegment} alt="Segment logo" />
            </div>
            <div className="w-32 py-4">
              <img src={images.brandsProtonet} alt="Protonet logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
