import Link from "next/link";

// @ts-ignore
export const PopularCourseItem = ({ imageUrl, title, color, children }) => {
  return (
    <div className="border border-gray-500 rounded-[40px] hover:animate-bounce">
      <div className="mt-1">
        <div className="lg:w-full">
          <img src={imageUrl} title={title} alt={title} className="rounded-[40px]"/>
        </div>
      </div>
      <div className="p-8 space-y-4 text-center">
        <h3 className="mt-4 text-xl font-bold">{title}</h3>
        <p>{children}</p>
          <a target={"_blank"} rel="noreferrer" href={"https://forms.office.com/Pages/ResponsePage.aspx?id=Ym9HIoi1Mk29lHyvGTXTatrzVUYRhrRGpLyZwK3J4j9UMU4yV0FWS1ZWUENWM1ZIUjlHMDFLOFUwNCQlQCN0PWcu&embed=true"} title="Join Now" className={`btn ${color} block mx-auto rounded-lg w-full max-w-[256px]`}>Join now</a>
      </div>
    </div>
  );
};
