import styled from "styled-components";
import { Link } from "react-router-dom";

export const TopBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  position: relative;
  z-index: 10;
  background-color: #45c14e;
  color: white;
  font-size: 13px;
  font-weight: 500;
  transform: translateY(-100%);
  transition: transform 500ms ease;
  &.--active {
    transform: translateY(0%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 40px;
  align-items: center;
  padding: 0 40px;
  height: 100px;
`;
export const ImgLogo = styled.img``;
export const StyledLink = styled(Link)`
  color: #99adb7;
  font-weight: 500;
  display: flex;
  &:hover {
    color: #002c43;
  }
`;
