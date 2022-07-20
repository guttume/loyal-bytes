import { images } from "../components";

export default function Placement() {
  return (
    <>
      <section className="relative h-[calc(100vh+100px)]">
        <div className="absolute -z-10">
          <img
            src={images.placement.hero}
            alt="Hero image"
            className="w-full"
          />
        </div>
        <div className="px-12 space-y-6 w-full max-w-2xl">
          <h1 className="text-6xl font-bold text-white pt-32">
            Become Affiliated Become Global
          </h1>
          <h2 className="text-xl text-white">
            Our students have been placed in the top tech companies across the
            globe.
          </h2>
          <div className="space-y-6 pt-4">
            <button className="btn btn-primary block w-1/2">
              Hear from our students
            </button>
            <button className="btn btn-outline-secondary block w-1/2">
              Inquire now
            </button>
          </div>
        </div>
      </section>
      <section className="my-16 px-12">
        <div>
          <h3 className="text-5xl text-darkerText text-center font-bold">
            Our Top Placements
          </h3>
          <h4 className="text-center text-xl text-gray-600 w-full max-w-5xl mx-auto mt-4">
            At MSA we make sure that every participant stepping out in the
            industry has enough knowledge to substantiate his or her expertise
            in the subject matter.
          </h4>
          <div className="bg-gray-200 rounded-lg p-4 mt-8">
            <div className="space-y-4">
              <div className="flex justity-between">
                <img
                  src={images.placement.brands.google}
                  alt="Google logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.cisco}
                  alt="cisco logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.ford}
                  alt="ford logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
              </div>
              <div className="flex justity-between">
                <img
                  src={images.placement.brands.google}
                  alt="Google logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.cisco}
                  alt="cisco logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.ford}
                  alt="ford logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
              </div>
              <div className="flex justity-between">
                <img
                  src={images.placement.brands.google}
                  alt="Google logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.cisco}
                  alt="cisco logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.ford}
                  alt="ford logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
              </div>
              <div className="flex justity-between">
                <img
                  src={images.placement.brands.google}
                  alt="Google logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.cisco}
                  alt="cisco logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.ford}
                  alt="ford logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
                <img
                  src={images.placement.brands.dell}
                  alt="dell logo"
                  className="w-1/5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-16 px-12">
        <div className="flex space-x-4 items-center">
          <div className="w-1/2">
            <h3 className="text-2xl font-semibold mb-8">
              Our professionals are serving at:
            </h3>
            <p className="text-lg">
              Microsoft , Miraki Networks, cisco, cap Gemini, Accenture, wipro,
              hcl, hdfc bank, sbi, mphasys, Infosys, atos, Verizon, jp morgan,
              reliance, tata communications, tata tele services, netmagic,
              microland, dell, hp, data craft, l&t infotech, trafigura, patni
              computers, TCS, Colgate Palmolive global IT servives, Enernoc,
              KPIT, Accenture, Continuum Managed Services, Gravitas, RCF, BPCL,
              HPCL, Reserve Bank of India, ICICI Bank, HDFC Bank, Royal Bank of
              Scotland, Bank of America, and counting
            </p>
          </div>
          <div className="w-1/2">
            <img src={images.placement.side} alt="A women working" />
          </div>
        </div>
      </section>
      <section className="bg-orange-500 px-12 py-12">
        <div className="flex px-20 justify-between">
          <div>
            <h3 className="text-3xl text-white font-bold">
              Apply now and get early birds offers
            </h3>
            <h4 className="text-lg text-white font-semibold">
              Apply for the course of your choice and avail attractive early
              birds offers.
            </h4>
          </div>
          <button className="btn btn-outline-secondary">Apply now</button>
        </div>
      </section>
    </>
  );
}
