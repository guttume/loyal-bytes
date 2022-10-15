import { HurryUp, images, PortfolioSummary, Testimonial } from "../components";
import { batches } from "../data/batches";

export default function Batches() {
  return (
    <>
      <section className="items-center px-8 bg-gray-200 lg:flex lg:p-0">
        <div className="py-12 space-y-8 lg:w-1/2 lg:pl-12">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-darkerText">
            Learn at your time in your comfort zones
          </h1>
          <h2 className="text-xl md:text-2xl">
            With Loyal Bytes you get flexible choices course batches
          </h2>
            <a href={"/testimonials.html"} title="Hear from our students" className="inline-block btn btn-primary">
              Hear from our students
            </a>
        </div>
        <div className="lg:w-1/2">
          <div className="-mx-8 lg:transform lg:translate-y-24 lg:-mx-0">
            <img src={images.batchesHero} alt="hero picture" />
          </div>
        </div>
      </section>
      <section className="px-8 mt-16 lg:px-12 lg:mt-40">
        <h3 className="text-3xl font-bold text-center text-darkText">
          Updated Batch Timings
        </h3>
        <h4 className="my-6 text-lg text-center text-gray-500">
          We regularly keep on updating batch timings
        </h4>
        <div className="overflow-y-auto h-[500px]">
          <table className="w-full mx-auto text-sm table-auto md:table-fixed">
            <thead className="sticky top-0 bg-blue-800 text-blue-50">
              <tr>
                <th className="py-3 rounded-l">Courses</th>
                <th>Days</th>
                <th>Batch Mode</th>
                <th>Time</th>
                <th className="py-3 rounded-r">Duration</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.course} className="text-center even:bg-gray-200">
                  <td className="px-2 py-4 rounded-l">{batch.course}</td>
                  <td className="px-2 py-4 whitespace-nowrap">{batch.days}</td>
                  <td className="px-2 py-4">{batch.mode}</td>
                  <td className="px-2 py-4 whitespace-nowrap">{batch.time}</td>
                  <td className="px-2 py-4 rounded-r whitespace-nowrap">{batch.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="px-8 my-16">
        <h3 className="text-3xl font-bold text-center md:text-4xl text-darkText">
          Our Students are Placed Globally
        </h3>
        <PortfolioSummary />
      </section>
      <section className="px-8 mt-16 lg:px-12 lg:-mt-32">
        <Testimonial />
      </section>
      <section className="my-6 lg:px-12">
        <HurryUp />
      </section>
    </>
  );
}
