import Link from "next/link";
import { images, Testimonial } from "../components";

export default function Placement() {
  return (
    <>
      <section className="relative lg:h-[calc(100vh+100px)]">
        <div className="absolute -z-10">
          <img
            src={images.placement.hero}
            alt="Hero image"
            className="w-full"
          />
        </div>
        <div className="px-8 lg:px-12 space-y-6 w-full max-w-2xl">
          <h1 className="text-6xl font-bold lg:text-white pt-28 lg:pt-32">
            <span className="text-white">Become Affiliated</span> Become Global
          </h1>
          <h2 className="text-xl lg:text-white">
            Our students have been placed in the top tech companies across the
            globe.
          </h2>
          <div className="flex justify-center lg:block space-x-4 lg:space-x-0 lg:space-y-6 pt-4">
            <Link href={"/testimonials"}>
              <a className="btn btn-primary flex justify-center w-1/2 text-center">
                Hear from our students
              </a>
            </Link>
            <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
              <a className="lg:hidden btn btn-outline-primary flex justify-center items-center w-1/2">
                Inquire now
              </a>
            </Link>
            <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
              <a className="hidden btn btn-outline-secondary justify-center lg:flex w-1/2">
                Inquire now
              </a>
            </Link>
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
            <div className="grid grid-cols-7 gap-4">
              {Object.values(images.placement.brands).map((brand, index) => (
                <div key={index.toString()}>
                  <img src={brand} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-12">
        <Testimonial />
      </section>
      <section className="my-16 px-8 lg:px-12">
        <div className="lg:flex space-y-8 lg:space-y-0 lg:space-x-4 items-center">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 lg:mb-8">
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
      <section className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-600 text-blue-50 mx-8 lg:mx-12 py-12 mb-16 rounded-xl">
        <div className="lg:flex lg:px-20 justify-between space-y-8 lg:space-y-0">
          <div className="space-y-4 lg:space-y-0">
            <h3 className="text-3xl text-white font-bold text-center lg:text-left">
              Apply now and get early birds offers
            </h3>
            <h4 className="text-lg text-white font-semibold text-center lg:text-left">
              Apply for the course of your choice and avail attractive early
              birds offers.
            </h4>
          </div>
          <div className="flex justify-center lg:block">
            <button className="btn btn-outline-secondary">Apply now</button>
          </div>
        </div>
      </section>
    </>
  );
}
