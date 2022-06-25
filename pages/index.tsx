import { HeroBanner } from "../components";
import { HeroText } from "../components/HeroText";
import { Statistics } from "../components/Statistics";

export default function Index() {
  return (
    <>
      <div>
        <HeroBanner />
        <HeroText />
      </div>
      <Statistics />
    </>
  );
}
