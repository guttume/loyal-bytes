import { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="lg:px-12">
      <header className="h-24">
        <Nav />
      </header>
        <main>{children}</main>
    </div>
  );
};
