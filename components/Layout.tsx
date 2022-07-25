import { PropsWithChildren } from "react";
import { Footer } from "../layouts/Footer";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
