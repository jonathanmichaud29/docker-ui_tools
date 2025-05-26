import FooterDefault from "../components/footers/FooterDefault";
import HeaderDefault from "../components/headers/HeaderDefault";

import HeroHome from "../components/heroes/HeroHome";
import ListExamples from "../components/examples/ListExamples";


export default function Home() {
  return (
    <>
      <HeaderDefault />
      <HeroHome />
      <ListExamples />
      <FooterDefault />
    </>
  );
}
