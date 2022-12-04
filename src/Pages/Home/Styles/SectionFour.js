import styled from "styled-components";
import FloatingHopperImg from "../../../public/img/grasshopper__practice__meditate.svg";
import DevicesImage from "../../../public/img/devices.svg";
import { keyframes } from "styled-components";

export const Section = styled.div`
  justify-content: space-between;
  background-color: #4ce8e3;
  padding: 90px 0;
  position: relative;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
`;
export const Paragraph = styled.p`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  font-size: 22px;
  margin-bottom: 20px;
  @media (max-width: 758px) {
    max-width: 500px;
  }
`;
export const H2 = styled.h2``;

const fadeOut1 = keyframes`
0% { 
  opacity:1;
  transform:translatex(0%;)
}
 50% { 
  opacity:0.5;
  transform:translatex(-100%) scale(0.5);
}
 100% { 
   transform:translatex(-200%) scale(0.5);
  opacity:0;
}
`;

const fadeOut2 = keyframes`
0% { 
  opacity:1;
}
 50% { 
  opacity:0.5;
  transform:translatex(100%) scale(0.5);
}
 100% { 
   transform:translatex(200%) scale(0.5);
  opacity:0;
}
`;

export const FloatingHopper = styled.div`
  background-image: url(${`${FloatingHopperImg}`});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  width: 160px;
  height: 252px;
  position: absolute;
  left: 130px;
  transition: all 0.3s;
  @media (max-width: 1200px) {
    transform: scale(0.8);
    left: 0px;
  }
  @media (max-width: 970px) {
    animation: ${fadeOut1} 0.6s forwards;
  }
`;

export const Devices = styled.div`
  background-image: url(${`${DevicesImage}`});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  width: 192px;
  height: 137px;
  position: absolute;
  right: 60px;
  transition: all 0.3s;
  @media (max-width: 1200px) {
    transform: scale(0.8);
    right: 0px;
    width: 161px;
  }
  @media (max-width: 970px) {
    animation: ${fadeOut2} 0.6s forwards;
  }
`;
