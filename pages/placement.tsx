import { images, Testimonial } from "../components";

export default function Placement() {
  return (
    <>
      <section className="h-[52vw]">
        <div className="relative bg-gradient-to-tr from-blue-900 via-darkBlue to-blue-900 lg:bg-gradient-radial">
          <div className="absolute -z-10">
            <img
              src={images.placement.hero}
              alt="Hero image"
              className="hidden w-full lg:block"
            />
          </div>
          <div className="w-full max-w-2xl px-8 pb-12 space-y-6 lg:px-12">
            <h1 className="text-4xl font-bold text-white md:text-6xl pt-28 lg:pt-32">
              <p className="text-white">Get Affiliated</p>
              <p>Go Global</p>
            </h1>
            <h2 className="text-xl text-white">
              Our students have been placed in the top tech companies across the
              globe.
            </h2>
            <div className="flex justify-center pt-4 space-x-4 lg:block lg:space-x-0 lg:space-y-6">
                <a className="flex justify-center w-1/2 text-center btn btn-primary" href="/testimonials.html">
                  Hear from our students
                </a>
              <a
                className="flex justify-center w-1/2 btn btn-outline-secondary"
                href={"https://forms.office.com/r/VEQqdjwzZr"}
              >
                Inquire now
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="px-12 my-16">
        <div>
          <h3 className="text-3xl font-bold text-center md:text-5xl text-darkerText">
            Our Top Placements
          </h3>
          <h4 className="w-full max-w-5xl mx-auto mt-4 text-gray-600 md:text-center text- md:text-xl">
            At Loyal Bytes Learning we make sure that every participant stepping
            out in the industry has enough knowledge to substantiate his or her
            expertise in the subject matter.
          </h4>
          <div className="p-4 mt-8 bg-gray-200 rounded-lg">
            <div className="grid grid-cols-3 gap-4 md:grid-cols-5 lg:grid-cols-7">
              {Object.values(images.placement.brands).map((brand, index) => (
                <div key={index.toString()}>
                  <img src={brand} alt="" className="rounded-lg shadow-xl" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-12 lg:-mt-28">
        <Testimonial />
      </section>
      <section className="px-8 my-16 lg:px-12">
        <div className="items-center space-y-8 lg:flex lg:space-y-0 lg:space-x-4">
          <div className="lg:w-1/2">
            <h3 className="mb-4 text-2xl font-semibold lg:mb-8">
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
          <div className="lg:w-1/2">
            <img src={images.placement.side} alt="A women working" />
          </div>
        </div>
      </section>
      <section className="py-12 mx-8 mb-16 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-blue-50 lg:mx-12 rounded-xl">
        <div className="justify-between space-y-8 lg:flex lg:px-20 lg:space-y-0">
          <div className="px-4 space-y-4 lg:space-y-0">
            <h3 className="font-bold text-lg mb-3">
              Apply now and get early birds offers
            </h3>
            <p>
              Apply for the course of your choice and avail attractive early
              birds offers.
            </p>
          </div>
          <div className="flex justify-center lg:block">
            <a
              href={"https://forms.office.com/r/VEQqdjwzZr"}
              className="btn btn-outline-secondary"
            >
              Apply now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
