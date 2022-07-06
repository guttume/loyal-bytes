import { PropsWithChildren } from "react";

export const Section = ({ children }: PropsWithChildren) => {
  return <section className="my-16 px-8">{children}</section>;
};
