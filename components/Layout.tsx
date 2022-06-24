import { PropsWithChildren } from "react";
import { Nav } from "./Nav";

export const Layout = ({children}: PropsWithChildren) => {
    return (
        <header>
            <Nav />
            <main>{children}</main>
        </header>
    );
}
