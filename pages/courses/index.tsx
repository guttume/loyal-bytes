import Link from "next/link";
import { images } from "../../components";
import { Queries } from "../../layouts";
export default function index() {
  const courseCategories = [
    {
      image: images.course.fundamentals,
      url: "/courses/fundamentals",
    },
    {
      image: images.course.associate,
      url: "/courses/associate",
    },
    {
      image: images.course.expert,
      url: "/courses/expert",
    },
    {
      image: images.course.speciality,
      url: "/courses/speciality",
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 p-8 lg:p-12">
        <div className="space-y-8 lg:space-y-0 lg:flex justify-center lg:space-x-20">
          <div className="text-center lg:text-left text-white font-bold space-y-4 lg:w-96">
            <p className="text-orange-500">Online training</p>
            <h1 className="text-4xl">30K+ STUDENTS TRUST US</h1>
            <h2 className="text-lg font-semibold">
              Loyal Bytes stood true on more than 30,000 student&apos;s
              expections
            </h2>
          </div>
          <div className="lg:w-96">
            <img src={images.course.hero} alt="hero" />
          </div>
        </div>
      </section>
      <section className="p-8 lg:p-32">
        <div className="grid grid-cols-4 gap-8">
          {courseCategories.map((category) => (
            <div key={category.url}>
              <Link href={category.url}>
                <a>
                  <img src={category.image} alt="course image" />
                </a>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <Queries />
      </section>
    </>
  );
}
