import { GetStaticProps } from "next";
import { useState } from "react";
import {
  Accordion,
  CourseHero,
  Highlight,
  images,
  PortfolioSummary,
  Testimonial
} from "../../components";
import { Queries } from "../../layouts";
import {
  CourseContent,
  getAllCourseSlugs,
  getCourseData
} from "../../lib/courses";

export default function Course({ content }: CoursePageProps) {
  const [showMore, setShowMore] = useState(true);
  return (
    <div>
      <CourseHero title={content.title} subtitle={content.subtitle} />
      <section className="mt-8 shadow-2xl lg:flex lg:mt-0 bg-gradient-to-t from-indigo-700 via-indigo-700 to-indigo-500 shadow-indigo-300">
        <div className="flex items-center justify-center pt-4 lg:w-1/3 lg:pt-4">
          <img
            src={content.courseDetail.displayImage}
            alt="course detail image"
            className="h-96"
          />
        </div>
        <div className="px-4 lg:w-2/3 lg:px-12 py-11">
          <h3 className="text-3xl font-bold text-center text-blue-50 lg:text-left">
            Course Highlights
          </h3>
          <p className="text-lg text-blue-50 mt-2.5 text-center lg:text-left">
            {content.courseDetail.duration} |{" "}
            {content.courseDetail.certification} |{" "}
            {content.courseDetail.batchInfo}
          </p>
          <div className="justify-between my-6 space-y-6 lg:flex lg:space-y-0">
            {content.courseDetail.highlights.map((highlight) => (
              <Highlight
                key={highlight.heading}
                color="bg-orange-500"
                heading={highlight.heading}
                subheading={highlight.subheading}
              />
            ))}
          </div>
          {content.courseDetail.description.length < 2 ? (
            <p className="mb-6 text-blue-50">
              {content.courseDetail.description[0]}
            </p>
          ) : (
            <ul className="mb-6 space-y-2 list-disc list-inside text-blue-50">
              {showMore ? (
                <li>{content.courseDetail.description[0]}</li>
              ) : (
                content.courseDetail.description.map((d, i) => (
                  <li key={i}>{d}</li>
                ))
              )}
              <button
                className="underline"
                onClick={() => setShowMore(!showMore)}
              >
                View {showMore ? "more" : "less"}
              </button>
            </ul>
          )}
          <div className="flex flex-col items-center space-x-6 space-y-6 lg:flex-row lg:space-y-0">
            <a
              target={"_blank"} rel="noreferrer"
              href={
                "https://forms.office.com/Pages/ResponsePage.aspx?id=Ym9HIoi1Mk29lHyvGTXTatrzVUYRhrRGpLyZwK3J4j9UMU4yV0FWS1ZWUENWM1ZIUjlHMDFLOFUwNCQlQCN0PWcu&embed=true"
              } title="Apply now"
              className="btn btn-primary"
            >
              Apply now
            </a>
            <a
              href={"/loyal-bytes-brochure.pdf"}
              className="btn btn-outline-secondary"
            >
              Download brochure
            </a>
            <a
              href={"/demo-certificate.pdf"}
              className="underline text-blue-50"
            >
              Demo certificate
            </a>
          </div>
        </div>
      </section>
      {content.idealFor.length > 0 && (
        <section className="px-4 my-28 lg:flex lg:px-12">
          <h4 className="flex items-center mb-4 text-5xl font-bold text-center lg:w-4/12 lg:text-left lg:mb-0 lg:border-r lg:border-orange-500">
            This course is ideal for
          </h4>
          {content.idealFor.length < 2 ? (
            <p className="text-lg lg:w-8/12 lg:pl-32">{content.idealFor[0]}</p>
          ) : (
            <ul className="space-y-2 text-lg list-disc list-inside lg:w-8/12 lg:pl-32">
              {content.idealFor.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          )}
        </section>
      )}
      <section className="relative my-32">
        <div className="absolute w-[650px] -mt-96 top-0 left-0 transform -translate-x-1/2 -z-10">
          <img src={images.homePageRings} title="Background Ring" alt="background ring image" />
        </div>
        <div className="px-4 lg:px-12">
          <h3 className="text-5xl font-bold text-center">
            What you&apos;ll learn
          </h3>
          <p className="my-8 text-xl text-center">
            {content.learningObjectives}
          </p>
          <Accordion data={content.modules} />
        </div>
      </section>
      <section className="relative my-16">
        <div className="px-8 py-12 overflow-x-hidden shadow-2xl bg-gradient-to-r from-indigo-500 via-indigo-500 to-indigo-700 lg:mx-12 lg:px-28 rounded-xl shadow-indigo-300">
          <div className="lg:w-2/3">
            <div className="mb-16 lg:hidden">
              <img src={images.courseOutcome} alt="books image" />
            </div>
            <h3 className="text-5xl font-bold text-indigo-50 mb-11">
              After completing this course, you will be able to
            </h3>
            <ul className="space-y-4 list-disc">
              {content.onCompletion.map((item, index) => (
                <li key={index} className="text-xl text-indigo-50">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="absolute top-0 right-0 hidden mt-12 mr-16 lg:block w-72">
            <img src={images.courseOutcome} alt="books image" />
          </div>
          <div className="absolute top-0 right-0 hidden transform lg:block w-96 lg:mr-8">
            <img src={images.whiteRings} alt="white ring background image" />
          </div>
        </div>
      </section>
      {/* <section className="hidden px-56 lg:block">
        <h3 className="text-5xl font-bold text-center">Batches Available</h3>
        <table className="w-full mt-16 table-fixed">
          <thead className="text-lg font-bold text-indigo-500">
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
        <div className="mt-16 text-lg text-center">
          <Link href={"#"}>
            <a className="underline">View Terms &amp; Conditions</a>
          </Link>
        </div>
      </section> */}
      <section className="px-8 lg:px-12 lg:-mt-32">
        <Testimonial />
      </section>
      <section className="px-8 mt-16 lg:px-12 lg:mt-0">
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
