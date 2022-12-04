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
  position: relative;
  > div {
    width: 50%;
    @media (max-width: 720px) {
      width: 100%;
    }
  }
`;
export const Description = styled.div`
  padding-left: 130px;
  position: relative;
  h2,
  img {
    animation: ${fadeIn} 0.75s forwards;
  }
  @media (max-width: 800px) {
    padding-left: 60px;
  }
  @media (max-width: 580px) {
    padding-left: 30px;
  }
`;
export const H2 = styled.h2`
  font-weight: 500;
  max-width: 460px;
  min-height: 140px;
  margin: 0;
  @media (max-width: 720px) {
    font-size: 28px;
  }
`;
export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;
`;
export const Image = styled.div`
  animation: ${fadeInTwo} 0.75s forwards;
  height: 712px;
  position: relative;
  display: flex;
  right: -15%;
  > img {
    position: absolute;
  }
  @media (max-width: 720px) {
    display: none;
  }
`;

export const DotContainer = styled.div`
  display: flex;
  column-gap: 14px;
  position: absolute;
  bottom: -45px;
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
