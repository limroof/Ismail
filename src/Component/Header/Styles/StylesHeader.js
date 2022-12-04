import styled from "styled-components";
import { Link } from "react-router-dom";
import logoImg from "../../../public/img/logo.blue.svg";
import logoTablette from "../../../public/img/demo__logo-grasshopper-lockup.svg";
import { keyframes } from "styled-components";
export const Header = styled.div`
  position: relative;
`;
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
  height: 100px;
  display: flex;
  column-gap: 40px;
  align-items: center;
  padding: 0 40px;
  @media (max-width: 960px) {
    display: none;
  }
`;
export const ImgLogo = styled.div`
  background-image: url(${logoImg});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  width: 163px;
  height: 28px;
  @media (max-width: 717px) {
    background-image: url(${logoTablette});
    width: 128px;
    height: 28px;
  }
`;
export const StyledLink = styled(Link)`
  color: #99adb7;
  font-weight: 500;
  display: flex;
  &:hover {
    color: #002c43;
  }
  @media (max-width: 960px) {
    font-size: 28px;
    margin-bottom: 50px;
  }
`;

export const MobileNav = styled.nav`
  display:flex;
  height: 100px;
  align-items: center;
  justify-content: space-between;
  padding-left: 40px;
  padding-right: 40px;
  position:relative;
  @media (max-width: 717px) {
    height: 60px;
    padding-left: 20px;
    padding-right: 20px;
  }
}
`;

const openDrawer = keyframes`
 0% { transform: translatex(-150%); }
 100% { transform: translatex(0%); }
`;
export const Drawer = styled.div`
  height: calc(100vh - 40px);
  width: 100%;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #00324b;
  z-index: 100;
  transform: translatex(-150%);
  padding: 20px;
  animation: ${openDrawer} 0.5s forwards;
`;

export const Burger = styled.div`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 20px;
  span {
    font-size: 32px;
    font-weight: bold;
  }
`;
export const CloseIcon = styled.div`
  cursor: pointer;
  position: absolute;
  top: 18px;
  right: 20px;
  span {
    font-size: 32px;
    font-weight: bold;
  }
`;
