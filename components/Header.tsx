import Link from "next/link";
import { images } from "./Images";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <header className="flex items-center justify-between h-24 pl-4 lg:px-12">
      <div className="w-64">
        <Link href="/">
          <a>
            <img src={images.logo} title="Loyalbyte logo" alt="Loyalbyte logo" />
          </a>
        </Link>
      </div>
      <Nav />
      <div className="hidden xl:flex xl:space-x-2">
        <a href="https://loyalbytes.com/" className="bg-blue-500 btn-small text-blue-50">Professional Solutions</a>
          <a className="text-white btn-small btn-primary" target="_blank" rel="noreferrer"  href="https://forms.office.com/Pages/ResponsePage.aspx?id=Ym9HIoi1Mk29lHyvGTXTatrzVUYRhrRGpLyZwK3J4j9UMU4yV0FWS1ZWUENWM1ZIUjlHMDFLOFUwNCQlQCN0PWcu&embed=true" title="Make Enquiry">Make Enquiry</a>
      </div>
    </header>
  );
};
