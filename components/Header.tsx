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
      <div className="hidden lg:block">
        <Link href="https://forms.office.com/r/VEQqdjwzZr">
          <a className="btn-small btn-outline-primary">Make Enquiry</a>
        </Link>
      </div>
    </header>
  );
};
