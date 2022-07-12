import { GetStaticProps } from "next";
import Link from "next/link";
import {
  Accordion,
  CourseHero,
  Highlight,
  images,
  PortfolioSummary,
  Testimonial,
} from "../../components";
import {
  CourseContent,
  getAllCourseSlugs,
  getCourseData,
} from "../../lib/courses";

export default function Course({ content }: CoursePageProps) {
  return (
    <div>
      <CourseHero title={content.title} subtitle={content.subtitle} />
      <section className="flex bg-gradient-to-t from-indigo-700 via-indigo-700 to-indigo-500 shadow-2xl shadow-indigo-300">
        <div className="w-1/3 flex justify-center items-center">
          <img
            src={content.courseDetail.displayImage}
            alt="course detail image"
            className="h-96"
          />
        </div>
        <div className="w-2/3 px-12 py-11">
          <h3 className="text-3xl text-blue-50 font-bold">Course Highlights</h3>
          <p className="text-lg text-blue-50 mt-2.5">
            {content.courseDetail.duration} |{" "}
            {content.courseDetail.certification} |{" "}
            {content.courseDetail.batchInfo}
          </p>
          <div className="flex justify-between my-6">
            {content.courseDetail.highlights.map((highlight) => (
              <Highlight
                key={highlight.heading}
                color="bg-orange-500"
                heading={highlight.heading}
                subheading={highlight.subheading}
              />
            ))}
          </div>
          <p className="mb-6 text-blue-50">
            <span className="line-clamp-3">
              {content.courseDetail.description}
            </span>
            <Link href="#">
              <a className="underline">View more</a>
            </Link>
          </p>
          <div className="flex space-x-6 items-center">
            <button className="btn btn-primary">Apply now</button>
            <button className="btn btn-outline-secondary">
              Download brochure
            </button>
            <Link href={"#"}>
              <a className="underline text-blue-50">Demo certificate</a>
            </Link>
          </div>
        </div>
      </section>
      <section className="my-28 flex px-12">
        <h4 className="w-4/12 text-5xl font-bold border-r border-orange-500 flex items-center">
          This course is ideal for
        </h4>
        <div className="w-8/12 pl-32 text-lg">{content.idealFor}</div>
      </section>
      <section className="relative">
        <div className="absolute w-[650px] -mt-96 top-0 left-0 transform -translate-x-1/2 -z-10">
          <img src={images.homePageRings} alt="background ring image" />
        </div>
        <div className="px-12">
          <h3 className="text-center text-5xl font-bold">
            What you&apos;ll learn
          </h3>
          <p className="text-center text-xl my-8">
            {content.learningObjectives}
          </p>
          <Accordion data={content.modules} />
        </div>
      </section>
      <section className="relative my-16">
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-700 mx-12 px-28 rounded-xl py-12 shadow-2xl shadow-indigo-300">
          <div className="w-2/3">
            <h3 className="text-5xl text-indigo-50 font-bold mb-11">
              After completing this course, you will be able to
            </h3>
            <ul className="list-disc space-y-4">
              {content.onCompletion.map((item, index) => (
                <li key={index} className="text-xl text-indigo-50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute w-72 top-0 right-0 mr-16 mt-12">
            <img src={images.courseOutcome} alt="books image" />
          </div>
          <div className="absolute top-0 right-0 w-96 transform translate-x-1/2">
            <img src={images.whiteRings} alt="white ring background image" />
          </div>
        </div>
      </section>
      <section className="px-56">
        <h3 className="text-5xl text-center font-bold">Batches Available</h3>
        <table className="table-fixed w-full mt-16">
          <thead className="text-lg text-indigo-500 font-bold">
            <tr>
              <td>ID</td>
              <td>Days</td>
              <td>Mode</td>
              <td>Time</td>
              <td>Duration</td>
            </tr>
          </thead>
          <tbody>
            {content.batches.map((batch, index) => (
              <tr key={index}>
                <td>{batch.id}</td>
                <td>{batch.days}</td>
                <td>{batch.mode}</td>
                <td>{batch.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-16 text-lg">
          <Link href={"#"}>
            <a className="underline">View Terms &amp; Conditions</a>
          </Link>
        </div>
      </section>
      <section className="-mt-32">
        <Testimonial />
      </section>
      <section>
        <PortfolioSummary />
      </section>
      <section className="bg-orange-500 px-20 py-12 mt-16">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-5xl font-bold text-orange-50 mb-4">
              Still have queries?
            </p>
            <p className="text-xl text-orange-50 font-bold">
              Reach out to us and our friendly staff will be more than happy to
              assist you.
            </p>
          </div>
          <div>
            <button className="btn btn-outline-secondary">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllCourseSlugs();

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const courseData = getCourseData(params?.slug);
  return {
    props: {
      content: courseData.default,
    },
  };
};

interface CoursePageProps {
  content: CourseContent;
}
