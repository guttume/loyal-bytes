import { PlayIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { images } from "../components";

export default function TrainingFlexibility() {
  const [showMoreOffer, setShowMoreOffer] = useState(false);
  const [viewMoreInstructorText, setViewMoreInstructorText] = useState(false);
  const [viewBootcampText, setViewBootcampText] = useState(false);
  return (
    <>
      <div className="fixed top-0 right-0 hidden w-1/2 lg:block -z-10">
        <img src={images.training.bg} alt="bg" />
      </div>
      <section className="px-8 lg:px-12">
        <div className="flex-row-reverse lg:flex lg:py-16 lg:items-center lg:space-x-4">
          <div className="w-full mx-auto">
            <img src={images.training.hero} alt="hero image" />
          </div>
          <div className="my-8">
            <h1 className="text-3xl font-bold text-center md:text-5xl lg:text-left text-darkerText">
              Learn from anywhere
            </h1>
            <h2 className="mt-4 text-lg">
              We&apos;re just one click away to help you take your career from
              great to incredible. Fill in the form and our friendly staff will
              be ready to assist you in your queries.
            </h2>
            <div className="flex justify-center md:block">
              <div className="justify-center my-6 space-y-4 md:space-y-0 md:space-x-2 md:flex md:justify-start">
                  <a href="/about.html" title="About us" className="btn btn-primary">Know about us</a>
                <div className="flex items-center space-x-2">
                  <PlayIcon className="w-12 h-12 text-sky-600" />
                  <p>See our impact</p>
                </div>
            </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 py-8 text-white bg-blue-700 lg:px-16">
        <div className="space-y-8 lg:flex lg:flex-row-reverse lg:items-center">
          <div className="lg:w-1/3">
            <img src={images.training.offer} alt="Offer" />
          </div>
          <div className="space-y-4 lg:w-2/3">
            <h3 className="pb-2 text-2xl font-bold tracking-wider border-b-2 border-yellow-400 md:text-3xl">
              What do we offer?
            </h3>
            <p>
              Loyal Bytes Learning Services has an advanced learning center
              specifically created to provide training in quality management to
              working professionals. Loyal Bytes Learning Service&apos;s
              expertise in the design and management of distributed education
              programs that provide student learning environments, technology
              platforms, and related educational processes and services created
              should have holistic teaching and learning experience. Our IT
              training programs and IT certifications help professionals master
              the cutting-edge technologies deployed in today&apos;s
              organizations and gain an edge over their peers. These, coupled
              with strategic academic alliances, provide a truly enriching
              learning experience.
            </p>
            <p>
              With its Center for Advanced Learning, Loyal Bytes Learning
              Services provides working professionals with quality management
              education.
            </p>
            {showMoreOffer && (
              <>
                <p>
                  In addition to the technology platform, student study
                  environments, and allied education services and processes that
                  make up the total teaching-learning experience, Loyal Bytes
                  Learning Services provides design and management expertise in
                  distributed education programs.
                </p>
                <p>
                  Professionals from our training programs and IT Certifications
                  gain expertise in cutting-edge technologies that are deployed
                  in today&apos;s organizations and get an edge over their
                  peers.
                </p>
                <p>
                  The combination of these, as well as academic alliances,
                  ensures an incredibly rich educational experience.
                </p>
              </>
            )}
            {showMoreOffer || (
              <button
                className="btn btn-outline-secondary"
                onClick={() => setShowMoreOffer(true)}
              >
                Read More
              </button>
            )}
          </div>
        </div>
      </section>
      <section className="relative py-8 bg-blue-700 lg:pb-16 overflow-clip">
        <div className="absolute top-0 left-0 w-1/3 mt-40 -ml-40">
          <img src={images.homePageRings} title="Rings" alt="rings" />
        </div>
        <h3 className="mb-4 text-3xl font-semibold tracking-wider text-center text-white">
          Our Methodology
        </h3>
        <div className="px-8 space-y-6 text-sm font-bold lg:flex lg:space-y-0 lg:space-x-8">
          <ol className="relative py-24 pl-8 pr-4 space-y-2 list-decimal bg-white rounded-2xl lg:w-1/3">
            <li>Custom Trainings based on thecorporate requirements.</li>
            <li>Training as per vendor&apos;s course ware.</li>
            <li>
              Remote trainings to small individualgroups and save travel &amp;
              miscellaneouscost.
            </li>
            <li>Qualified and experienced faculty</li>
          </ol>
          <ul className="py-24 pl-8 pr-4 space-y-2 list-decimal bg-white rounded-2xl lg:w-1/3">
            <li>Immediate practical session after theory session.</li>
            <li>
              Flexibility in medium of instruction viz English, Gujarati or
              Hindi, Flexibility in timing
            </li>
            <li>
              Hand-outs of particular topic before starting theory session
            </li>
            <li>Computer-Based Training</li>
          </ul>
          <ul className="py-24 pl-8 pr-4 space-y-2 list-decimal bg-white rounded-2xl lg:w-1/3">
            <li>Assignments before starting practical session</li>
            <li>Session wise topic break-up</li>
            <li>Quiz contests, seminars</li>
            <li>Tests, Gradation</li>
          </ul>
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <h3 className="text-3xl font-semibold text-center text-darkertext">
          Instructor Led Training
        </h3>
        <div className="w-full max-w-6xl p-4 mx-auto space-y-4 bg-white rounded-lg shadow-lg">
          {viewMoreInstructorText || (
            <p className="font-semibold">
              Classroom Training help individuals polish their IT skills while
              they are traveling to our training center. Classroom training at
              one of our centers proves to be a great learning experience for
              students where they interact & socialize with students from
              different work cultures. This type of training is facilitated by
              an instructor in a classroom setting. Instructor-led training
              allows for learners and instructors or facilitators to interact
              and discuss the training material, either individually or in a
              group setting...{" "}
              <button
                className="pl-4 text-blue-500 underline"
                onClick={() => setViewMoreInstructorText(true)}
              >
                Read more
              </button>
            </p>
          )}
          {viewMoreInstructorText && (
            <p className="font-semibold">
              Classroom Training help individuals polish their IT skills while
              they are traveling to our training center. Classroom training at
              one of our centers proves to be a great learning experience for
              students where they interact & socialize with students from
              different work cultures. This type of training is facilitated by
              an instructor in a classroom setting. Instructor-led training
              allows for learners and instructors or facilitators to interact
              and discuss the training material, either individually or in a
              group setting. When it comes to quality instruction in a classroom
              setting, Loyal Bytes Learning Services is the leader for Microsoft
              Technologies. Whether you&apos;re a student looking to advance
              your career or start a new one, or a team leader looking to make
              sense of new technology, you&apos;re virtually guaranteed to find
              a course at the right time, in the right location. Loyal Bytes
              Learning Services considers the classroom experience to be the
              foundation of our Integrated Learning Approach and we continue to
              make it more enriching, dynamic, and valuable for students and
              businesses.
            </p>
          )}
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/3">
            <img src={images.training.benefits.one} alt="image" />
          </div>
          <div className="lg:w-2/3 lg:px-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center mt-2 space-x-2">
                <img
                  src={images.training.iconBenefit}
                  alt="icon"
                  className="w-14 h-14"
                />
                <h5 className="text-xl font-bold">Benefits</h5>
              </div>
              <ul className="py-4 pl-8 pr-4 font-semibold list-disc bg-yellow-200 rounded-tl-[60px] rounded-br-[60px]">
                <li>Consistently the highest-rated training organization.</li>
                <li>
                  Thousands of training courses &mdash; from technical training
                  and desktop.
                </li>
                <li>Applications to virtualization and cloud computing.</li>
                <li>
                  Lectures and demonstrations reinforced by relevant, hands-on
                  lab exercises identical to real-world scenarios.
                </li>
                <li>
                  Online Learning Guide and additional Web-based reference
                  tools.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <h3 className="text-3xl font-semibold text-center text-darkertext">
          Personalized One-to-One Training
        </h3>
        <div className="w-full max-w-6xl p-4 mx-auto space-y-4 bg-white rounded-lg shadow-lg">
          <p className="font-semibold">
            Are you ready to get things done? Get one on one training and
            coaching, custom-tailored to your needs, experience, and skill
            level. Loyal Bytes Learning Services teaches the skills, knowledge,
            and competencies that are needed to perform a specific job within
            the workplace and work environment. Our personalized training uses
            the regular or existing workplace tools, machines, documents,
            equipment, knowledge, and skills necessary for an employee to learn
            to effectively perform his or her job.
          </p>
        </div>
      </section>
      <section className="p-8 bg-gray-100 lg:p-12">
        <div className="flex-row-reverse items-center lg:flex">
          <div className="lg:w-1/3">
            <img src={images.training.benefits.two} alt="image" />
          </div>
          <div className="lg:w-2/3 lg:px-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center mt-2 space-x-2">
                <img
                  src={images.training.iconBenefit}
                  alt="icon"
                  className="w-14 h-14"
                />
                <h5 className="text-xl font-bold">Benefits</h5>
              </div>
              <ul className="py-4 pl-8 pr-4 font-semibold list-disc bg-green-200 rounded-tr-[60px] rounded-bl-[60px]">
                <li>
                  Simplicity &mdash; Personalized training is useful and simple
                  to learn the jobs that can be learned by watching and doing.
                  Under it, the trainer need not explain and analyze the job
                  detail.
                </li>
                <li>
                  Economy &mdash; Personalized training is economical in the
                  sense that it does not require an extra cost burden for
                  arranging training needs.
                </li>
                <li>
                  Immediate Productivity &mdash; Since trainees are involved in
                  the actual work process, quick learning and immediate
                  productivity will be obtained from the work performed by the
                  trainees.
                </li>
                <li>
                  Quick Learning &mdash; this type of training provides a
                  favorable environment for quick learning. This is because
                  trainees are involved in the actual work process.
                </li>
                <li>
                  Multi-skill &mdash; As it is a practical approach, it develops
                  multi-skill in trainees. The employees can get quick feedback
                  about the correctness of their performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <h3 className="text-3xl font-semibold text-center text-darkertext">
          Boot Camp Trainings
        </h3>
        <div className="w-full max-w-6xl p-4 mx-auto space-y-4 bg-white rounded-lg shadow-lg">
          {viewBootcampText || (
            <p className="font-semibold">
              Due to the rapidly changing IT scenario, we need to ensure that
              employees go through quality training that provides excellent
              knowledge, skills, and practical hands-on experience in a limited
              time frame. Our accelerated Boot Camps are a boon considering the
              time & budget constraints most enterprises juggle...{" "}
              <button
                className="pl-4 text-blue-500 underline"
                onClick={() => setViewBootcampText(true)}
              >
                Read more
              </button>
            </p>
          )}
          {viewBootcampText && (
            <>
              <p className="font-semibold">
                Due to the rapidly changing IT scenario, we need to ensure that
                employees go through quality training that provides excellent
                knowledge, skills, and practical hands-on experience in a
                limited time frame. Our accelerated Boot Camps are a boon
                considering the time & budget constraints most enterprises
                juggle.
              </p>
              <p className="font-semibold">
                The most cost-effective training solution that has emerged as a
                successful training format for our IT professionals, is these
                Boot Camp training programs. Boot Camps are all about teaching
                specific skills, tools, or technologies over a limited period in
                a zero-distraction environment. Boot Camps have proven to be one
                of the most successful training formats for quickly and
                effectively delivering comprehensive skills to IT professionals
                at a low cost.
              </p>
              <p className="font-semibold">
                Our Boot Camps courses are designed to deliver the maximum
                amount of material over the shortest period. Our curriculum
                design utilizes key principles of accelerated learning and
                offers a framework for successful course delivery powered by
                skilled instructors that can maximize the learning experience by
                instilling a &ldquo;Yes You Can&rdquo; classroom attitude.
              </p>
            </>
          )}
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <div className="items-center lg:flex">
          <div className="lg:w-1/3">
            <img src={images.training.benefits.three} alt="image" />
          </div>
          <div className="lg:w-2/3 lg:px-12">
            <div className="space-y-4">
              <div className="flex items-center justify-center mt-2 space-x-2">
                <img
                  src={images.training.iconBenefit}
                  alt="icon"
                  className="w-14 h-14"
                />
                <h5 className="text-xl font-bold">Benefits</h5>
              </div>
              <ul className="py-4 pl-8 pr-4 font-semibold list-disc bg-sky-200 rounded-tl-[25px] rounded-br-[25px]">
                <li>It offers high productivity with less time span.</li>
                <li>It is reasonably quick and cost effective. </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <h3 className="text-3xl font-semibold text-center text-darkertext">
          Live Virtual Classroom
        </h3>
        <div className="w-full max-w-6xl p-4 mx-auto space-y-4 bg-white rounded-lg shadow-lg">
          <p className="font-semibold">
            Loyal Bytes Learning Services Live Virtual Classroom brings to you
            an engaging superlative training experience that lets you learn and
            gain knowledge from the comfort of your home or office. Attend
            intensive online training sessions, add to it the convenience of
            your place and time, minus the cost and hassle of travel &mdash; and
            you get the most rewarding learning experience ever!
          </p>
        </div>
      </section>
      <section className="p-8 bg-gray-100 lg:p-12">
        <div className="flex-row-reverse items-center lg:flex">
          <div className="lg:w-1/3">
            <img src={images.training.benefits.four} alt="image" />
          </div>
          <div className="lg:w-2/3 lg:px-12">
            <div className="space-y-6">
              <div className="flex items-center justify-center mt-2 space-x-2">
                <img
                  src={images.training.iconBenefit}
                  alt="icon"
                  className="w-14 h-14"
                />
                <h5 className="text-xl font-bold">Benefits</h5>
              </div>
              <ul className="py-4 pl-8 pr-4 font-semibold list-disc bg-teal-200 rounded-tr-[60px] rounded-bl-[60px]">
                <li>It offers training at your location in your comfort.</li>
                <li>
                  The latest and the next-generation method of training is
                  preferred by our working professionals across the country as
                  well as overseas.
                </li>
                <li>Live instructor-led training</li>
                <li>Certified experts as instructors</li>
                <li>
                  Official Curriculum and courseware, same as classroom training
                </li>
                <li>Flexible dates and timings as per your needs</li>
                <li>
                  The best solution for busy professionals who find it difficult
                  to travel or dedicate time to classroom learning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 space-y-4 bg-gray-100 lg:p-12">
        <h3 className="text-3xl font-semibold text-center text-darkertext">
          Train me where I AM
        </h3>
        <p className="w-full max-w-6xl p-4 mx-auto font-semibold bg-white rounded-tr-[25px] rounded-bl-[25px] shadow-lg">
          Tailored to suit the needs of our corporate clients,
          Train-me-where-I-am allows enterprises to have our experts conduct
          pieces of training on their premises. Given the huge costs associated
          with making entire teams travel to a different location, it becomes
          more feasible to fly a trainer to the client&apos;s location
        </p>
      </section>
    </>
  );
}
