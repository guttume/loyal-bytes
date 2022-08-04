import { HurryUp, images, PortfolioSummary, Testimonial } from "../components";
import { batches } from "../data/batches";

export default function Batches() {
  return (
    <>
      <section className="lg:flex bg-gray-200 items-center h-[635px] lg:h-[520px] px-8 lg:p-0">
        <div className="lg:w-1/2 lg:pl-12 space-y-8 py-12 lg:py-0">
          <h1 className="text-5xl lg:text-6xl font-bold text-darkerText">
            Learn at your time in your comfort zones
          </h1>
          <h2 className="text-xl">
            With Loyal Bytes you get flexible choices course batches
          </h2>
            <a href={"/testimonials.html"} className="btn btn-primary inline-block">
              Hear from our students
            </a>
        </div>
        <div className="lg:w-1/2">
          <div className="pb-16 lg:pb-0 lg:transform lg:translate-y-24 -mx-8 lg:-mx-0">
            <img src={images.batchesHero} alt="hero picture" />
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-12 mt-16 lg:mt-40">
        <h3 className="text-center text-5xl font-bold text-darkText">
          Updated Batch Timings
        </h3>
        <h4 className="text-center text-xl my-6 text-gray-500">
          We regularly keep on updating batch timings
        </h4>
        <div className="overflow-y-auto h-[500px]">
          <table className="table-fixed w-full max-w-7xl mx-auto">
            <thead className="bg-blue-800 text-blue-50 sticky top-0">
              <tr>
                <th className="rounded-l py-3">Courses</th>
                <th>Days</th>
                <th>Batch Mode</th>
                <th className="hidden">Time</th>
                <th className="rounded-r py-3">Duration</th>
              </tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.course} className="text-center even:bg-gray-200">
                  <td className="py-4 px-2 rounded-l">{batch.course}</td>
                  <td>{batch.days}</td>
                  <td>{batch.mode}</td>
                  <td className="rounded-r">{batch.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mt-16 lg:mt-32">
        <h3 className="text-center text-5xl font-bold text-darkText">
          Our Students are Placed Globally
        </h3>
        <PortfolioSummary />
      </section>
      <section className="px-8 lg:px-12 mt-16 lg:-mt-32">
        <Testimonial />
      </section>
      <section className="lg:px-12 my-6">
        <HurryUp />
      </section>
    </>
  );
}
