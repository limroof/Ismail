import styled from "styled-components";
import FloatingHopperImg from "../../../public/img/grasshopper__practice__meditate.svg";
import DevicesImage from "../../../public/img/devices.svg";

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
`;
export const H2 = styled.h2``;

export const FloatingHopper = styled.div`
  background-image: url(${`${FloatingHopperImg}`});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  width: 160px;
  height: 252px;
  position: absolute;
  left: 20px;
`;

export const Devices = styled.div`
  background-image: url(${`${DevicesImage}`});
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: contain;
  width: 192px;
  height: 137px;
  position: absolute;
  right: 20px;
`;
