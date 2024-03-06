import { ArrowRightIcon, CheckIcon } from "@heroicons/react/solid";
import { HurryUp, images, Statistics } from "../components";

export default function Contact() {
  return (
    <>
      <section className="p-8 lg:p-12">
        <div className="items-center lg:flex lg:space-x-2">
          <div className="lg:pl-20 lg:w-7/12">
            <h1 className="text-4xl font-bold lg:text-7xl text-darkerText">
              Become a part of a Global Community
            </h1>
            <ul className="pl-4 mt-8 border-l-2 border-orange-500 md:text-xl lg:mt-16">
              {[
                "Virtual classes available",
                "Money back guarantee",
                "Lifetime free course",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between w-56 md:w-72"
                >
                  <span>{item}</span>
                  <span>
                    <CheckIcon className="w-4 h-4 text-green-500" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-8 lg:w-5/12 lg:mt-0">
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
        <div className="w-full p-8 space-y-4 bg-gray-200 lg:rounded-lg lg:p-20 lg:space-y-20">
          <div className="items-center w-full lg:flex lg:space-x-8">
            <div className="space-y-4 lg:w-1/3">
              <h3 className="text-3xl font-bold text-darkerText">
                Have a query?
              </h3>
              <h4 className="pb-4 text-lg font-bold text-gray-600 lg:pb-12">
                Get in touch with us and our friendly and professional staff
                will guide you step by step to resolve your queries.
              </h4>
              <a target={"_blank"} rel="noreferrer"
                className="flex items-center justify-center w-64 space-x-4 btn btn-outline-primary"
                href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ym9HIoi1Mk29lHyvGTXTatrzVUYRhrRGpLyZwK3J4j9UMU4yV0FWS1ZWUENWM1ZIUjlHMDFLOFUwNCQlQCN0PWcu&embed=true" title="Get In Touch"
              >
                <span>Get in touch</span>
                <span>
                  <ArrowRightIcon className="w-5 h-5 text-orange-500" />
                </span>
              </a>
            </div>
            <div className="mt-4 lg:w-2/3 lg:mt-0">
              <img
                src={images.contact.map}
                alt="A picture of a google map"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="items-center justify-between space-y-6 lg:flex lg:space-y-0">
            <div className="flex items-center space-x-2 lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.phone}
                  alt="An icon of phone"
                  className="w-16"
                />
              </span>
              <span>
                <a href="tel:+912235506193">+91-22-35506193</a> <br />
                <a href="tel:+912231889106">+91-22-31889106</a> <br />
                <a href="tel:+917400166036">+91-7400166036</a>
              </span>
            </div>
            <div className="flex items-center space-x-2 lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.mail}
                  alt="An icon of phone"
                  className="w-12"
                />
              </span>
              <span>
                <a href="mailto:info@learning.loyalbytes.com">info@learning.loyalbytes.com</a>
              </span>
            </div>
            <div className="flex items-center space-x-2 lg:w-1/3">
              <span>
                <img
                  src={images.contact.icons.location}
                  alt="An icon of phone"
                  className="w-20"
                />
              </span>
              <span>
                Address :- B - 202, Mathuria Apartment, next to Vishal Hall,
                above Bank of India, 49 Sir M V road. Andheri East Mumbai -
                400069
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="px-8 mb-16 lg:px-16">
        <HurryUp />
      </section>
    </>
  );
}
