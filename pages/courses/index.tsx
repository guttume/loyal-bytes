import Link from "next/link";
import { images } from "../../components";
import { Queries } from "../../layouts";
export default function index() {
  const courseCategories = [
    {
      title: "Fundamentals (100)",
      image: images.course.fundamentals,
      url: "/courses/fundamentals",
    },
    {
      title: "Associate (200)",
      image: images.course.associate,
      url: "/courses/associate",
    },
    {
      title: "Expert (300)",
      image: images.course.expert,
      url: "/courses/expert",
    },
    {
      title: "Speciality",
      image: images.course.speciality,
      url: "/courses/speciality",
    },
  ];
  return (
    <>
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-600 p-8 lg:p-12">
        <div className="space-y-8 lg:space-y-0 lg:flex justify-center lg:space-x-20">
          <div className="text-center lg:text-left text-white font-bold space-y-4 lg:w-96">
            <ul>
              <li className="font-semibold text-orange-500">Instructor Led Training</li>
              <li className="font-semibold text-orange-500">Live Virtual Classroom</li>
              <li className="font-semibold text-orange-500">Boot Camp Trainings</li>
              <li className="font-semibold text-orange-500">Personalized 1 on 1 Training</li>
            </ul>
            <h1 className="text-7xl">30K+ STUDENTS TRUST US</h1>
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
        <div className="lg:grid grid-cols-4 gap-8">
          {courseCategories.map((category) => (
            <div key={category.url}>
              <Link href={category.url}>
                <a>
                  <img src={category.image} alt={category.title} />
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
