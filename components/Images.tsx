import Image from "next/image";
import azureSmall from "../public/images/azure-icon-sm.png";
import courseActiveDirectory from "../public/images/course-active-directory.png";
import courseAzure from "../public/images/course-azure.png";
import courseExchange from "../public/images/course-exchange-server.png";
import courseNetworking from "../public/images/course-networking.png";
import courseOffice from "../public/images/course-office.png";
import courseWindows10 from "../public/images/course-windows-10-edst.png";
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
export const CourseAzure = () => <Image src={courseAzure} alt="server icon" />
export const CourseWindows10 = () => <Image src={courseWindows10} alt="server icon" />
export const CourseActiveDirectory = () => <Image src={courseActiveDirectory} alt="server icon" />
export const CourseExchange = () => <Image src={courseExchange} alt="server icon" />
export const CourseNetworking = () => <Image src={courseNetworking} alt="server icon" />
export const CourseOffice = () => <Image src={courseOffice} alt="server icon" />
