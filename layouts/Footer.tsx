import Link from "next/link";
import { images } from "../components";

export const Footer = () => {
  return (
    <footer>
      <section className="bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 text-white px-8 py-16 lg:px-12 text-sm">
        <div className="space-y-12 lg:space-y-0 lg:flex items-start justify-between">
          <div className="space-y-4">
            <h2 className="text-xl font-bold w-24">
              <Link href={"/"}>
                <a>
                  <img src={images.logoWhite} alt="white logo" />
                </a>
              </Link>
            </h2>
            <div className="flex space-x-2 items-center text-white">
              <Link href={"https://www.facebook.com/LoyalBytes"}>
                <a>
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
                <a>
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
                <a>
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
            <p>9769303625</p>
            <p>info@loyalbytes.com </p>
            <p>rajesh.yadav@loyalbytes.com</p>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold border-b-2 border-white pb-1">
              Pages
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href={"/batches"}>
                  <a>Batches</a>
                </Link>
              </li>
              <li>
                <Link href={"/training-flexibility"}>
                  <a>Training Flexibility</a>
                </Link>
              </li>
              <li>
                <Link href={"/corporate-training"}>
                  <a>Corporate Training</a>
                </Link>
              </li>
              <li>
                <Link href={"/placement"}>
                  <a>Placements</a>
                </Link>
              </li>
              <li>
                <Link href={"/testimonials"}>
                  <a>Testimonials</a>
                </Link>
              </li>
              <li>
                <Link href={"/about"}>
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold border-b-2 border-white pb-1">
              Courses
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={"/courses/fundamentals/microsoft-365-fundamentals-900"}
                >
                  <a>Microsoft 365 Fundamentals - 900</a>
                </Link>
              </li>
              <li>
                <Link
                  href={"/courses/fundamentals/dynamics-365-fundamentals-920"}
                >
                  <a>Dynamics 365 Fundamentals (ERP) - 920</a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "/courses/associate/azure-administrator-associate-az-104"
                  }
                >
                  <a>Azure Administrator Associate AZ - 104</a>
                </Link>
              </li>
              <li>
                <Link href={"/courses/fundamentals/azure-ai-fundamentals-900"}>
                  <a>Azure AI Fundamentals - 900</a>
                </Link>
              </li>
              <li>
                <Link
                  href={"/courses/fundamentals/azure-data-fundamentals-900"}
                >
                  <a>Azure Data Fundamentals - 900</a>
                </Link>
              </li>
              <li>
                <Link href={"/courses/fundamentals/azure-fundamentals-900"}>
                  <a>Azure Fundamentals - 900</a>
                </Link>
              </li>
              <li>
                <Link
                  href={
                    "/courses/fundamentals/dynamics-365-fundamentals-910.js"
                  }
                >
                  <a>Dynamics 365 Fundamentals (CRM) - 910</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-xl font-bold border-b-2 border-white pb-1">
              Connect with us
            </h3>
            <p>You can contact us to send email to us</p>
            <Link href={"/contact"}>
              <a className="btn btn-white inline-block rounded-full">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-black text-white px-8 py-4">
        <p className="text-center text-xs">
          &copy; 2022 Loyal Bytes Learning | Developed and maintained by
          Bornopedia Media
        </p>
      </section>
    </footer>
  );
};
