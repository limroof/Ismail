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
    max-width: 480px;
    width: 100%;
    margin: 0;
  }

  @media (max-width: 717px) {
    height: 873px;
  }
`;
export const H1 = styled.h1`
  font-weight: 400;
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
  @media (max-width: 1021px) {
    align-items: center;
    text-align: center;
    padding-top: 30px;
  }
`;
export const BackgroundImage = styled.div`
  background-image: url(${`${bgImage}`});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: -20%;
  width: 2000px;
  height: 100%;
}
`;

export const Container = styled.div`
  position: relative;
  z-index: 2;
  width: 43.9%;
  width: 100%;
  min-height: 100px;
  min-width: 600px;
  display: flex;
  margin: 0 auto;
  bottom: 150px;
  transform: scale(0.75);
  transform-origin: 58% 0%;
  > div {
    width: fit-content;
    position: relative;
    display: flex;
    position: relative;
    align-items: flex-end;
  }
  @media (max-width: 1021px) {
    bottom: -50px;
  }
  @media (max-width: 717px) {
    transform-origin: 50% 0%;
    justify-content: center;
    bottom: -80px;
    min-width: 100%;
  }
  @media (max-width: 580px) {
    bottom: -60px;
  }
`;
export const PartOne = styled.div`
  left: -330px;
  left: -34px;
  bottom: -65px;
  > div {
    @media (max-width: 717px) {
      display: none;
    }
  }
`;
export const PartTwo = styled.div`
    left: 37.5%;
    @media (max-width: 717px){
      left:0;
    }
  }
`;
export const DarkLeaf = styled.div`
  background-image: url(${`${darkLeaf}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(135.62222px + 136.37778 * (100vw - 718px) / 722);
  height: calc(182.49167px + 183.50833 * (100vw - 718px) / 722);
  @media (max-width: 717px) {
    display: none;
  }
`;
export const LightLeaf = styled.div`
  background-image: url(${`${lightLeaf}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(82.76944px + 83.23056 * (100vw - 718px) / 722);
  height: calc(182.49167px + 183.50833 * (100vw - 718px) / 722);
  position: absolute;
  left: 80%;
  @media (max-width: 717px) {
    display: none;
  }
`;

export const Laptop = styled.div`
  background-image: url(${`${laptop}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(227.36667px + 228.63333 * (100vw - 718px) / 722);
  height: calc(227.36667px + 228.63333 * (100vw - 718px) / 722);
  z-index: 1;
  position: absolute;
  left: -115.8%;
  bottom: 5%;
  @media (max-width: 717px) {
    display: none;
  }
`;

export const Phone = styled.div`
  position: relative;
  z-index: 2;
  background-image: url(${`${phone}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  height: calc(288.69583px + 290.30417 * (100vw - 718px) / 722);
  width: calc(148.58611px + 149.41389 * (100vw - 718px) / 722);
  position: relative;
  bottom: 8px;
  @media (max-width: 717px) {
    height: calc(424.36px + 103.64 * (100vw - 375px) / 342);
    transform: scale(2);
  }
`;

export const GrassHopper = styled.div`
  background-image: url(${`${grassHopper}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: calc(283.70972px + 285.29028 * (100vw - 718px) / 722);
  height: calc(293.18333px + 294.81667 * (100vw - 718px) / 722);
  position: absolute;
  bottom: -30.5%;
  left: -14.8%;
  @media (max-width: 717px) {
    display: none;
  }
`;
export const CloudLight = styled.div`
  background-image: url(${`${cloudLight}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 1;
  width: calc(184.48611px + 185.51389 * (100vw - 718px) / 722);
  height: calc(62.825px + 63.175 * (100vw - 718px) / 722);
  bottom: 4%;
  right: 60%;
  @media (max-width: 717px) {
    transform: scale(2);
  }
`;

export const CloudDark = styled.div`
  background-image: url(${`${cloudDark}`});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  z-index: 2;
  width: calc(135.12361px + 135.87639 * (100vw - 718px) / 722);
  height: calc(45.37361px + 45.62639 * (100vw - 718px) / 722);
  bottom: -1%;
  right: 60%;
  @media (max-width: 717px) {
    transform: scale(2);
  }
`;
