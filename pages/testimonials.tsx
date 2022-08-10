import { GoogleReviews, images, TestimonialItem } from "../components";
import { testimonials } from "../data/testimonials";
import { Queries } from "../layouts";

export default function Testimonials() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 left-0 mt-16 transform -translate-x-1/2 -z-10">
          <img
            src={images.testimonials.rings}
            alt="A image of three rings"
            className="w-[840px]"
          />
        </div>
        <div className="px-8 lg:px-12">
          <h1 className="w-full max-w-6xl mx-auto mt-16 text-2xl font-bold text-center md:text-5xl text-darkerText">
            Loyal Bytes has helped more than 30,000 students across the world to
            achieve their dreams
          </h1>
          <div className="items-center mt-16 space-y-4 lg:flex lg:space-x-4 lg:space-y-0">
            <div className="flex-1 w-1/8">
              <span className="w-full h-[290px] block bg-amber-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.one}
                  alt="Picture of a girl"
                  className="object-contain w-full h-full"
                />
              </span>
            </div>
            <div className="flex items-center flex-1 space-x-4 lg:w-2/8 lg:space-x-0 lg:block lg:space-y-4">
              <span className="w-full h-[200px] block bg-beigeDark pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.two}
                  alt="Picture of a man"
                  className="object-contain w-full h-full"
                />
              </span>
              <span className="w-full h-[200px] block bg-teal-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.three}
                  alt="Picture of a working woman"
                  className="object-contain w-full h-full"
                />
              </span>
            </div>
            <div className="flex-1 w-2/8">
              <span className="w-full h-[520px] block bg-yellow-400 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.four}
                  alt="Picture of a man"
                  className="object-contain w-full h-full"
                />
              </span>
            </div>
            <div className="flex items-center flex-1 space-x-4 lg:w-2/8 lg:block lg:space-x-0 lg:space-y-4">
              <span className="w-full h-[200px] block bg-orange-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.five}
                  alt="Picture of a man"
                  className="object-contain w-full h-full"
                />
              </span>
              <span className="w-full h-[200px] block bg-blue-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.six}
                  alt="Picture of a girl"
                  className="object-contain w-full h-full"
                />
              </span>
            </div>
            <div className="flex-1 w-1/8">
              <span className="w-full h-[290px] block bg-green-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.seven}
                  alt="Picture of a girl"
                  className="object-contain w-full h-full"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 mt-16 lg:px-12 lg:mt-32">
        <GoogleReviews />
        <h3 className="text-3xl font-bold text-center md:text-5xl text-darkerText">
          What Our Students Say About Us
        </h3>
        <div className="flex justify-center mt-8 mb-16">
          <img src={images.testimonials.bar} alt="A picture of a bar" />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.name}
              title={testimonial.name}
              company={testimonial.company}
              designation={testimonial.designation}
              imageUrl={testimonial.image}
            >
              {testimonial.body}
            </TestimonialItem>
          ))}
        </div>
      </section>
      <section className="mt-16">
        <Queries />
      </section>
    </>
  );
}
