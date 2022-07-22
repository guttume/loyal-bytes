import { images } from "../components";
import { TestimonialItem } from "../features/testimonials";
import { Queries } from "../layouts";

export default function Testimonials() {
  return (
    <>
      <section className="relative">
        <div className="absolute top-0 left-0 transform -translate-x-1/2 -z-10 mt-16">
          <img
            src={images.testimonials.rings}
            alt="A image of three rings"
            className="w-[840px]"
          />
        </div>
        <div className="px-8 lg:px-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-darkerText text-center mt-16 w-full max-w-6xl mx-auto">
            Loyal Bytes has helped more than 30,000 students across the world to
            achieve their dreams
          </h1>
          <div className="lg:flex items-center lg:space-x-4 space-y-4 lg:space-y-0 mt-16">
            <div className="w-1/8 flex-1">
              <span className="w-full h-[290px] block bg-amber-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.one}
                  alt="Picture of a girl"
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
            <div className="lg:w-2/8 flex items-center space-x-4 lg:space-x-0 lg:block flex-1 lg:space-y-4">
              <span className="w-full h-[200px] block bg-beigeDark pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.two}
                  alt="Picture of a man"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="w-full h-[200px] block bg-teal-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.three}
                  alt="Picture of a working woman"
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
            <div className="w-2/8 flex-1">
              <span className="w-full h-[520px] block bg-yellow-400 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.four}
                  alt="Picture of a man"
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
            <div className="lg:w-2/8 flex lg:block items-center space-x-4 lg:space-x-0 flex-1 lg:space-y-4">
              <span className="w-full h-[200px] block bg-orange-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.five}
                  alt="Picture of a man"
                  className="w-full h-full object-contain"
                />
              </span>
              <span className="w-full h-[200px] block bg-blue-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.six}
                  alt="Picture of a girl"
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
            <div className="w-1/8 flex-1">
              <span className="w-full h-[290px] block bg-green-500 pt-4 rounded-lg">
                <img
                  src={images.testimonials.grids.seven}
                  alt="Picture of a girl"
                  className="w-full h-full object-contain"
                />
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 lg:px-12 mt-16 lg:mt-32">
        <h3 className="text-5xl font-bold text-darkerText text-center">
          What Our Students Say About Us
        </h3>
        <div className="flex justify-center mt-8 mb-16">
          <img src={images.testimonials.bar} alt="A picture of a bar" />
        </div>
        <div className="space-y-8">
          <div className="lg:flex lg:space-x-4">
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageOne}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageOne}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
          </div>
          <div className="lg:flex lg:space-x-4">
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageTwo}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageTwo}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
          </div>
          <div className="lg:flex lg:space-x-4">
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageOne}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageOne}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
          </div>
          <div className="lg:flex lg:space-x-4">
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageTwo}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
            <div>
              <TestimonialItem
                imageUrl={images.sliderImageTwo}
                dateText="May 8, 2020"
                title={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
                nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
                magna eget nibh in turpis. Consequat duis diam lacus arcu.
                Faucibus venenatis felis id augue sit cursus pellentesque enim
                arcu. Elementum felis magna pretium in tincidunt.
              </TestimonialItem>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16">
        <Queries />
      </section>
    </>
  );
}
