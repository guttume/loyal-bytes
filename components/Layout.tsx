import { PropsWithChildren } from "react";
import { CookieConsent } from "react-cookie-consent";
import { Footer } from "../layouts/Footer";
import { Header } from "./Header";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="OK"
        cookieName="LBCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        We use cookies and other tracking technologies to improve your browsing
        experience on our website and targeted ads, to analyze our website
        traffic, and to understand where our visitors are coming from.
      </CookieConsent>
    </div>
  );
};
