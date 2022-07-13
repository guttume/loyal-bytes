import Link from "next/link";
import { PropsWithChildren } from "react";

interface MenuItemProps extends PropsWithChildren {
  link: string;
}

export const MenuItem = ({ link, children }: MenuItemProps) => {
  return (
    <li>
      <Link href={link}>
        <a className="block py-2 border-b lg:border-0 font-bold lg:text-sm">
          {children}
        </a>
      </Link>
    </li>
  );
};
