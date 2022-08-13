import { ChevronDownIcon, MenuAlt3Icon } from "@heroicons/react/solid";
import {
  Menu,
  MenuButton as MenuButtonExt,
  MenuItem as MenuItemExt,
} from "@szhsin/react-menu";
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
          <li>
            <Menu
              menuButton={
                <MenuButtonExt className="flex items-cente py-2 border-b lg:border-0 font-bold lg:text-sm">
                  Students
                  <ChevronDownIcon className="w-5 h-5" />
                </MenuButtonExt>
              }
              transition
            >
              <MenuItemExt
                href="/batches.html"
                className="block py-2 border-b lg:border-0 font-bold lg:text-sm"
              >
                Batches
              </MenuItemExt>
              <MenuItemExt
                href="/placement.html"
                className="block py-2 border-b lg:border-0 font-bold lg:text-sm"
              >
                Placements
              </MenuItemExt>
              <MenuItemExt
                href="/training-flexibility.html"
                className="block py-2 border-b lg:border-0 font-bold lg:text-sm"
              >
                Training Flexibility
              </MenuItemExt>
            </Menu>
          </li>
          {menuItems.filter((item) => item.desktop).map((item) => (
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
