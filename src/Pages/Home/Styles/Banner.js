import bgImage from "../../../public/img/hero__background-hills.svg";
import laptop from "../../../public/img/hero__macbook.png";
import phone from "../../../public/img/hero__pixel.png";

import darkLeaf from "../../../public/img/hero__tree-dark.svg";
import lightLeaf from "../../../public/img/hero__tree-skinny.svg";
import cloudLight from "../../../public/img/hero__bush-light.svg";
import cloudDark from "../../../public/img/hero__bush-dark.svg";
import grassHopper from "../../../public/img/hero__grasshopper.svg";

import styled from "styled-components";

export const Button = styled.button``;
export const Section = styled.section`
  position: relative;
  height: 972px;
  margin: auto;
  overflow: hidden;
  h1,
  p {
    margin: 0;
  }
`;

export const BannerContainer = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 74px 40px 0 40px;
  display: flex;
  flex-direction: column;
  row-gap: 22px;
  position: relative;
  z-index: 10;
`;
export const BackgroundImage = styled.div`
  background-image: url(${`${bgImage}`});
  background-position: 100% 28%;
  background-size: 110%;
  position: absolute;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  z-index: 1;
  top: 23.5%;
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 43.9%;
  width: 100%;
  max-width: 1200px;
  min-height: 100px;
  min-width: 600px;
  display: flex;
  margin: 0 auto;
  bottom: 150px;
  > div {
    width: fit-content;
    position: relative;
    display: flex;
    position: relative;
    align-items: flex-end;
  }
`;
export const PartOne = styled.div`
  left: -330px;
  left: -34px;
  bottom: -65px;
`;
export const PartTwo = styled.div`
  left: 37.5%;
`;
export const DarkLeaf = styled.div`
  background-image: url(${`${darkLeaf}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 272px;
  height: 366px;
`;
export const LightLeaf = styled.div`
  background-image: url(${`${lightLeaf}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 166px;
  height: 366px;
  position: absolute;
  left: 80%;
`;

export const Laptop = styled.div`
  height: 266px;
  width: 456px;
  position: relative;
  z-index: 1;
  background-image: url(${`${laptop}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: -345px;
  bottom: 124px;
`;

export const Phone = styled.div`
  height: 579px;
  width: 298px;
  position: relative;
  z-index: 2;
  background-image: url(${`${phone}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  bottom: 8px;
`;

export const GrassHopper = styled.div`
  background-image: url(${`${grassHopper}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 569px;
  height: 588px;
  position: absolute;
  bottom: -182px;
  left: -45px;
`;
export const CloudLight = styled.div`
  background-image: url(${`${cloudLight}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 1;
  width: 376px;
  height: 126px;
  bottom: 4%;
  right: 70%;
`;

export const CloudDark = styled.div`
  background-image: url(${`${cloudDark}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 2;
  width: 271px;
  height: 91px;
  bottom: -1%;
  right: 70%;
`;
