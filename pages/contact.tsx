import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import { HurryUp, images, Statistics } from "../components";

export default function Contact() {
  return (
    <>
      <section className="p-8 lg:p-12">
        <div className="lg:flex items-center lg:space-x-2">
          <div className="lg:pl-20 lg:w-7/12">
            <h1 className="text-4xl lg:text-7xl font-bold text-darkerText">
              Become a part of a Global Community
            </h1>
            <ul className="mt-8 lg:mt-16 text-xl border-l-2 border-orange-500 pl-4">
              {[
                "Virtual classes available",
                "Money back guarantee",
                "Lifetime free course",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between w-72"
                >
                  <span>{item}</span>
                  <span>
                    <CheckIcon className="h-4 w-4 text-green-500" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:w-5/12 mt-8 lg:mt-0">
            <img
              src={images.contact.hero}
              alt="A picture of a boy having coffee"
            />
          </div>
        </div>
      </section>
      <section>
        <Statistics />
      </section>
      <section className="py-8 lg:p-24">
        <div className="w-full bg-gray-200 lg:rounded-lg p-8 lg:p-20 space-y-4 lg:space-y-20">
          <div className="w-full lg:flex lg:space-x-8 items-center">
            <div className="lg:w-1/3 space-y-4">
              <h3 className="text-3xl font-bold text-darkerText">
                Have a query?
              </h3>
              <h4 className="text-lg font-bold text-gray-600 pb-4 lg:pb-12">
                Get in touch with us and our friendly and professional staff
                will guide you step by step to resolve your queries.
              </h4>
              <a className="flex space-x-4 items-center btn btn-outline-primary w-64 justify-center" href="https://forms.office.com/r/VEQqdjwzZr">
                <span>Get in touch</span>
                <span>
                  <ArrowRightIcon className="h-5 w-5 text-orange-500" />
                </span>
              </a>
            </div>
            <div className="lg:w-2/3 mt-4 lg:mt-0">
              <img
                src={images.contact.map}
                alt="A picture of a google map"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="lg:flex space-y-6 lg:space-y-0 justify-between items-center">
            <div className="flex space-x-2 items-center lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.phone}
                  alt="An icon of phone"
                  className="w-12"
                />
              </span>
              <span>
                <a href="">+91 9769303625</a> / <a href="">022 67250749</a>
              </span>
            </div>
            <div className="flex space-x-2 items-center lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.mail}
                  alt="An icon of phone"
                  className="w-12"
                />
              </span>
              <span>
                <a href="">msacademy@hotmail.com</a> /{" "}
                <a href="">inquiryhotmail.com</a>
              </span>
            </div>
            <div className="flex space-x-2 items-center lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.location}
                  alt="An icon of phone"
                  className="w-20"
                />
              </span>
              <span>
                A-405, 4th floor, Mathuria Apt., next to Vishal Hall, 49 Sir
                M.V. Road, Andheri (East), Mumbai 400069
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-16 mb-16">
        <HurryUp />
      </section>
    </>
  );
}
