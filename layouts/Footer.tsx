import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <section className="px-8 py-16 text-sm text-white bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 lg:px-12">
        <div className="items-start justify-between space-y-12 lg:space-y-0 lg:flex">
          <div className="space-y-4">
            {/* <h2 className="w-24 text-xl font-bold">
              <Link href={"/"}>
                <a>
                  <img src={images.logoWhite} alt="white logo" />
                </a>
              </Link>
            </h2> */}
            <div className="flex items-center space-x-2 text-white">
              <Link href={"https://www.facebook.com/LoyalBytes"}>
                <a target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-7 -2 24 24"
                    width="18"
                    fill="currentColor"
                  >
                    <path d="M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z"></path>
                  </svg>
                </a>
              </Link>
              <Link
                href={"https://www.linkedin.com/company/loyalbytes/mycompany/"}
              >
                <a target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    width="18"
                    fill="currentColor"
                  >
                    <path d="M19.959 11.719v7.379h-4.278v-6.885c0-1.73-.619-2.91-2.167-2.91-1.182 0-1.886.796-2.195 1.565-.113.275-.142.658-.142 1.043v7.187h-4.28s.058-11.66 0-12.869h4.28v1.824l-.028.042h.028v-.042c.568-.875 1.583-2.126 3.856-2.126 2.815 0 4.926 1.84 4.926 5.792zM2.421.026C.958.026 0 .986 0 2.249c0 1.235.93 2.224 2.365 2.224h.028c1.493 0 2.42-.989 2.42-2.224C4.787.986 3.887.026 2.422.026zM.254 19.098h4.278V6.229H.254v12.869z"></path>
                  </svg>
                </a>
              </Link>
              <Link href={"https://www.instagram.com/loyalbytes/"}>
                <a target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="-2 -2 24 24"
                    width="18"
                    fill="currentColor"
                  >
                    <path d="M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z"></path>
                    <path d="M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z"></path>
                    <circle cx="15.156" cy="4.858" r="1.237"></circle>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="space-y-2">
              <a className="block" href="tel:919769303625">+919769303625</a>
              <a className="block" href="mailto:info@loyalbytes.com">info@loyalbytes.com</a>
              <a className="block" href="mailto:rajesh.yadav@loyalbytes.com">rajesh.yadav@loyalbytes.com</a>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="pb-1 text-xl font-bold border-b-2 border-white">
              Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={"/batches.html"}>Batches</a>
              </li>
              <li>
                <a href={"/training-flexibility.html"}>Training Flexibility</a>
              </li>
              <li>
                <a href={"/corporate-training.html"}>Corporate Training</a>
              </li>
              <li>
                <a href={"/placement.html"}>Placements</a>
              </li>
              <li>
                <a href={"/testimonials.html"}>Testimonials</a>
              </li>
              <li>
                <a href={"/about.html"}>About</a>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="pb-1 text-xl font-bold border-b-2 border-white">
              Courses
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={"/course/azure-solutions-architect-expert.html"}>
                  Azure Solution Architect Expert
                </a>
              </li>
              <li>
                <a href={"/course/azure-ai-fundamentals-900.html"}>
                  Azure AI Fundamental
                </a>
              </li>
              <li>
                <a href={"/course/azure-data-scientist-associate-100.html"}>
                  Azure Administrator Associate
                </a>
              </li>
              <li>
                <a href={"/course/microsoft-azure-iot-developer-az-220.html"}>
                  Microsoft Azure IoT
                </a>
              </li>
              <li>
                <a href={"/course/microsoft-azure-iot-developer-az-220.html"}>
                  Microsoft Azure IoT
                </a>
              </li>
              <li>
                <a
                  href={
                    "/course/microsoft-security-operations-analyst-sc-200.html"
                  }
                >
                  Microsoft Security Operations Analyst
                </a>
              </li>
              <li>
                <a href="/course/security-compliance-and-identity-fundamentals-900.html">
                  Security, Compliance, and Identity
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="pb-1 text-xl font-bold border-b-2 border-white">
              Connect with us
            </h3>
            <p>You can contact us to send email to us</p>
            <Link href={"/contact"}>
              <a className="inline-block rounded-full btn btn-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="px-8 py-4 text-white bg-black">
        <p className="text-xs text-center">
          &copy; 2022 Loyal Bytes Learning | Developed and maintained by
          Bornopedia Media
        </p>
      </section>
    </footer>
  );
};
