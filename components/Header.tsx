import { images } from "./Images";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="h-24 flex items-center justify-between lg:px-12">
      <div className="w-40">
        <img src={images.logo} alt="logo" />
      </div>
      <Nav />
      <div className="hidden lg:block">
        <button className="btn btn-outline-primary">Make Enquiry</button>
      </div>
    </header>
  );
};
