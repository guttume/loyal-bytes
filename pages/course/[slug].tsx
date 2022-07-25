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
import { Queries } from "../../layouts";
import {
  CourseContent,
  getAllCourseSlugs,
  getCourseData,
} from "../../lib/courses";

export default function Course({ content }: CoursePageProps) {
  return (
    <div>
      <CourseHero title={content.title} subtitle={content.subtitle} />
      <section className="lg:flex mt-8 lg:mt-0 bg-gradient-to-t from-indigo-700 via-indigo-700 to-indigo-500 shadow-2xl shadow-indigo-300">
        <div className="lg:w-1/3 pt-4 lg:pt-4 flex justify-center items-center">
          <img
            src={content.courseDetail.displayImage}
            alt="course detail image"
            className="h-96"
          />
        </div>
        <div className="lg:w-2/3 px-4 lg:px-12 py-11">
          <h3 className="text-3xl text-blue-50 font-bold text-center lg:text-left">
            Course Highlights
          </h3>
          <p className="text-lg text-blue-50 mt-2.5 text-center lg:text-left">
            {content.courseDetail.duration} |{" "}
            {content.courseDetail.certification} |{" "}
            {content.courseDetail.batchInfo}
          </p>
          <div className="lg:flex space-y-6 justify-between my-6">
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
          <div className="flex flex-col space-y-6 space-x-6 items-center">
            <Link href={"https://forms.office.com/r/VEQqdjwzZr"}>
              <a className="btn btn-primary">Apply now</a>
            </Link>
            <button className="btn btn-outline-secondary">
              Download brochure
            </button>
            <Link href={"#"}>
              <a className="underline text-blue-50">Demo certificate</a>
            </Link>
          </div>
        </div>
      </section>
      <section className="my-28 lg:flex px-4 lg:px-12">
        <h4 className="lg:w-4/12 text-center lg:text-left mb-4 lg:mb-0 text-5xl font-bold lg:border-r lg:border-orange-500 flex items-center">
          This course is ideal for
        </h4>
        <div className="lg:w-8/12 lg:pl-32 text-lg">{content.idealFor}</div>
      </section>
      <section className="relative">
        <div className="absolute w-[650px] -mt-96 top-0 left-0 transform -translate-x-1/2 -z-10">
          <img src={images.homePageRings} alt="background ring image" />
        </div>
        <div className="px-4 lg:px-12">
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
        <div className="bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-700 lg:mx-12 px-8 lg:px-28 rounded-xl py-12 shadow-2xl shadow-indigo-300">
          <div className="lg:w-2/3">
            <div className="lg:hidden mb-16">
              <img src={images.courseOutcome} alt="books image" />
            </div>
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
          <div className="absolute hidden lg:block w-72 top-0 right-0 mr-16 mt-12">
            <img src={images.courseOutcome} alt="books image" />
          </div>
          <div className="absolute hidden lg:block top-0 right-0 w-96 transform translate-x-1/2">
            <img src={images.whiteRings} alt="white ring background image" />
          </div>
        </div>
      </section>
      <section className="px-56 hidden lg:block">
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
      <section className="lg:-mt-32 px-4 lg:px-0">
        <Testimonial />
      </section>
      <section className="mt-16 lg:mt-0">
        <PortfolioSummary />
      </section>
      <section className="mt-16">
        <Queries />
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
  const courseData = await getCourseData(params?.slug);
  return {
    props: {
      content: courseData,
    },
  };
};

interface CoursePageProps {
  content: CourseContent;
}
