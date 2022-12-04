import styled from "styled-components";
import { Link } from "react-router-dom";
export const Footer = styled.footer`
  background-color: #00324b;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  li {
    margin-bottom: 5px;
  }
`;
export const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 40px;
  > div {
    display: flex;
    flex-direction: column;
  }
  @media (max-width: 530px) {
    flex-direction: column;
    row-gap: 30px;
  }
`;
export const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 50px 40px;
  color: white;
  text-align: center;
`;
export const StyledLink = styled(Link)`
  color: white;
  font-size: 16px;
  font-weight: 400;
  line-height: 28px;
  display: block;
`;
