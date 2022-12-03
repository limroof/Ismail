import React from "react";
import Banner from "./Components/Banner.jsx";
import SectionTwo from "./Components/SectionTwo.jsx";
import SectionThree from "./Components/SectionThree.jsx";
import SectionFour from "./Components/SectionFour.jsx";
import SectionFive from "./Components/SectionFive.jsx";
import SectionSix from "./Components/SectionSix.jsx";
import SectionSev from "./Components/SectionSev.jsx";
import Footer from "./Components/Footer.jsx";

import { Main } from "./Styles/Home.js";
export default function Home() {
  return (
    <React.Fragment>
      <Main>
        <Banner />
        <SectionTwo></SectionTwo>
        <SectionThree></SectionThree>
        <SectionFour></SectionFour>
        <SectionFive></SectionFive>
        <SectionSix></SectionSix>
        <SectionSev></SectionSev>
      </Main>
    </React.Fragment>
  );
}
