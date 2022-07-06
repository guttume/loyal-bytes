import { PropsWithChildren } from "react";

export const SectionTitle = ({ children }: PropsWithChildren) => {
  return <h2 className="font-semibold text-2xl mb-4">{children}</h2>;
};
