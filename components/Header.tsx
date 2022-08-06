import Link from "next/link";
import { images } from "./Images";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between pl-4 lg:px-12">
      <div className="w-64">
        <Link href="/">
          <a>
            <img src={images.logo} alt="logo" />
          </a>
        </Link>
      </div>
      <Nav />
      <div className="hidden lg:flex lg:space-x-2">
        <a href="https://loyalbytes.com/" className="btn-small bg-blue-500 text-blue-50">Professional Solutions</a>
          <a className="btn-small btn-primary text-white"  href="https://forms.office.com/r/VEQqdjwzZr">Make Enquiry</a>
      </div>
    </header>
  );
};
