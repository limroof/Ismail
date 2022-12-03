import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section`
  overflow: hidden;
  padding-top: 124px;
  padding-bottom: 94px;
`;
export const H2 = styled.h2`
  font-weight: 500;
  text-align: center;
  margin-bottom: 64px;
  margin-top: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  > div {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
  }
`;

const moveRight = keyframes`
0% { 
    transform: translatex(0);
  }
50%{
    transform: translatex(100%);
  }
100% {
    transform: translatex(0);
`;
const moveLeft = keyframes`
0% { 
    transform: translatex(0);
  }
  50% {
    transform: translatex(-100%);
 100% {
    transform: translatex(0%);
`;

export const Line1 = styled.div`
  animation: ${moveRight} 135s linear infinite normal;
  justify-content: center;
`;
export const Line2 = styled.div`
  animation: ${moveLeft} 180s linear infinite normal;
  justify-content: center;
`;
export const Line3 = styled.div`
  animation: ${moveRight} 210s linear infinite normal;
`;

export const Item = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 240px;
  height: 64px;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  background-color: #dff8ec;
  border-radius: 35.5px;
  margin-right: 12px;
`;
