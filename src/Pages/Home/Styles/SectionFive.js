import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section``;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 0;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  position: relative;
`;

const fadeIn = keyframes`
 0% { 
    opacity:0;
    transform: translatex(10%);
  }
 100% {
    opacity:1;
    transform: translatex(0%); }
`;
const fadeInTwo = keyframes`
 0% { 
    opacity:0;
  }
 100% {
    opacity:1;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  min-width: 100%;
  > div {
    width: 50%;
  }
`;
export const Description = styled.div`
  padding-left: 130px;
  animation: ${fadeIn} 0.75s forwards;
`;
export const H2 = styled.h2`
  font-weight: 500;
  max-width: 460px;
  min-height: 140px;
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
export const Image = styled.div`
  animation: ${fadeInTwo} 0.75s forwards;
  height: 850px;
  padding-left: 50px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  column-gap: 14px;
  position: absolute;
  padding-left: 130px;
  bottom: 36%;
`;
export const Dot = styled.button`
  display: block;
  background-color: #99adb7;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  outline: none;
  &.active {
    background-color: #00324b;
  }
`;
