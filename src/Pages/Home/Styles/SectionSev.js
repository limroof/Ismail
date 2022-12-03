import styled from "styled-components";
import ImgHopperMama from "../../../public/img/section--get-started__grasshopper-mama.svg";
import cloud from "../../../public/img/section--get-started__cloud.svg";
import { keyframes } from "styled-components";

export const Section = styled.section`
  width: 100%;
  background-color: #4ce8e3;
  position: relative;
  overflow: hidden;
`;
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 140px;
  padding-right: 40px;
  padding-top: 124px;
  padding-bottom: 94px;
  position: relative;
  z-index: 1;
`;

export const H2 = styled.h2`
  font-weight: 500;
  max-width: 560px;
`;

export const Button = styled.button`
  font-weight: 500;
  max-width: 560px;
`;

export const GrassHopperMama = styled.div`
  background-image: url(${ImgHopperMama});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  z-index: 1;
  width: 249px;
  height: 729px;
  top: 20%;
  right: 15%;
`;

const moveRight = keyframes`
0% { 
    transform: translatex(-1400%);
  }
50%{
    transform: translatex(400%);
  }
100% {
    transform: translatex(-1400%);
`;
const moveLeft = keyframes`
0% { 
    transform: translatex(200%);
  }
50%{
    transform: translatex(-1000%);
  }
100% {
    transform: translatex(200%);
`;

export const Cloud1 = styled.div`
  background-image: url(${cloud});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 13%;
  right: 3%;
  width: 119.94px;
  height: 40.31px;
  animation: ${moveRight} 120s linear infinite normal;
  transform: translatex(-1400%);
`;
export const Cloud2 = styled.div`
  background-image: url(${cloud});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  width: 196px;
  height: 67px;
  top: 30%;
  right: 6%;
  animation: ${moveLeft} 120s linear infinite normal;
  transform: translatex(200%);
`;
export const Cloud3 = styled.div`
  background-image: url(${cloud});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  bottom: 28%;
  right: 30%;
  width: 119.94px;
  height: 40.31px;
  animation: ${moveRight} 120s linear infinite normal;
  transform: translatex(-1400%);
`;
