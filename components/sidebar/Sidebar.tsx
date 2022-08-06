import { XCircleIcon } from "@heroicons/react/solid";
import { menuItems } from "../../data";
import { images } from "../Images";
import { MenuButton } from "../MenutButton";
import { MenuItem } from "./MenuItem";

export const Sidebar = ({ hidden, onClose }: { hidden: boolean, onClose: () => void }) => {

  if (hidden) {
    return <></>;
  }

  return (
    <div className="h-full w-full fixed top-0 left-0 z-[999]">
      <div
        className="h-full w-full absolute"
        style={{ backgroundColor: `rgba(0,0,0,0.5)` }}
      ></div>
      <div className="px-4 w-2/3 absolute right-0 bg-white h-full">
        <div className="flex justify-between items-start py-4 mb-16">
          <div className="w-40">
            <img src={images.logo} alt="logo" />
          </div>
          <button onClick={onClose}>
            <XCircleIcon className="h-8 w-8 text-red-500" />
          </button>
        </div>
        <div className="flex justify-center mb-8">
          <MenuButton />
        </div>
        <ul className="text-center">
          {menuItems.map((item) => (
            <MenuItem key={item.title} link={item.link}>
              {item.title}
            </MenuItem>
          ))}
        </ul>
      </div>
    </div>
  );
};
