import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  color: string;
}

export const Button = ({ color, children }: ButtonProps) => {
  return (
    <button className={`shadow rounded px-6 py-3 ${color}`}>{children}</button>
  );
};
