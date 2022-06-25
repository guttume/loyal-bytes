import Image from "next/image";
import azureSmall from "../public/images/azure-icon-sm.png";
import heroImageLarge from "../public/images/hero-image-lg.png";
import heroImageSmall from "../public/images/hero-image-sm.png";
import logo from "../public/images/logo.png";
import office365Small from "../public/images/office-365-icon-sm.png";
import serverSmall from "../public/images/server-icon-sm.png";

export const Logo = () => <Image src={logo} alt="logo" />;
export const HeroImageSmall = () => <Image src={heroImageSmall} alt="hero" />
export const HeroImageLarge = () => <Image src={heroImageLarge} alt="hero" />
export const Office365ImageSmall = () => <Image src={office365Small} alt="office 365 icon" />
export const AzureImageSmall = () => <Image src={azureSmall} alt="azure icon" />
export const ServerImageSmall = () => <Image src={serverSmall} alt="server icon" />
