import { MenuAlt3Icon } from "@heroicons/react/solid";
import { useState } from "react";
import { menuItems } from "../data";
import { images } from "./Images";
import { MenuButton } from "./MenutButton";
import { Sidebar } from "./sidebar";
import { MenuItem } from "./sidebar/MenuItem";

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="flex justify-between lg:justify-start items-center lg:space-x-16 p-5">
      <Sidebar hidden={!showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="w-40">
        <img src={images.logo} alt="logo" />
      </div>
      <div className="hidden lg:flex space-x-4 items-center">
        <div>
          <MenuButton />
        </div>
        <ul className="flex space-x-4">
          {menuItems.map((item) => (
            <MenuItem key={item.title} link={item.link}>
              {item.title}
            </MenuItem>
          ))}
        </ul>
        <div>
          <button className="rounded shadow text-sm px-3 py-2 bg-white text-orange-500 border border-orange-500">
            Make Enquiry
          </button>
        </div>
      </div>
      <button className="lg:hidden" onClick={() => setShowSidebar(true)}>
        <MenuAlt3Icon className="w-6 h-6 text-orange-500" />
      </button>
    </nav>
  );
};
