import { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <header>
        <Nav />
      </header>
        <main>{children}</main>
    </>
  );
};
