import { PropsWithChildren } from "react";

interface MenuItemProps extends PropsWithChildren {
  link: string;
}

export const MenuItem = ({ link, children }: MenuItemProps) => {
  return (
    <li>
        <a className="block py-2 border-b lg:border-0 font-bold lg:text-sm"  href={link}>
          {children}
        </a>
    </li>
  );
};
