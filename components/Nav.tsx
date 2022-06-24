import { MenuAlt3Icon } from "@heroicons/react/solid";
import { Logo } from "./Images";

export const Nav = () => {
  return (
    <nav className="flex justify-between p-5">
      <div className="w-40">
        <Logo />
      </div>
      <div>
        <MenuAlt3Icon className="w-6 h-6 text-orange-500" />
      </div>
    </nav>
  );
};
