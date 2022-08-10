import { MenuAlt3Icon } from "@heroicons/react/solid";
import { useState } from "react";
import { menuItems } from "../data";
import { MenuButton } from "./MenutButton";
import { Sidebar } from "./sidebar";
import { MenuItem } from "./sidebar/MenuItem";

export const Nav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <nav className="flex justify-between xl:justify-start items-center xl:space-x-16 p-5">
      <Sidebar hidden={!showSidebar} onClose={() => setShowSidebar(false)} />
      <div className="hidden xl:flex space-x-12 items-center">
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
      </div>
      <button className="xl:hidden" onClick={() => setShowSidebar(true)}>
        <MenuAlt3Icon className="w-6 h-6 text-orange-500" />
      </button>
    </nav>
  );
};
