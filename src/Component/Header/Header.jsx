import React from "react";
import {
  TopBar,
  Nav,
  MobileNav,
  ImgLogo,
  StyledLink,
  Drawer,
  Burger,
} from "./Styles/StylesHeader";
import logoImg from "../../public/img/logo.blue.svg";
import menuIcon from "../../public/img/menu-icon.svg";

import { useEffect } from "react";

export default function Header() {
  useEffect(() => {
    document.getElementById("topBar").classList.add("--active");
  }, []);

  return (
    <header>
      <TopBar id="topBar">Now available in French!</TopBar>
      <Nav>
        <StyledLink to="/">
          <ImgLogo src={logoImg}></ImgLogo>
        </StyledLink>
        <StyledLink to="/why-coding">What is Coding</StyledLink>
        <StyledLink to="/curriculum/fundamentals-1">Curriculum</StyledLink>
        <StyledLink to="/glossary/data-types">Glossary</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="faq">FAQ</StyledLink>
      </Nav>
      <MobileNav>
        <ImgLogo src={logoImg}></ImgLogo>
        <Drawer>
          <StyledLink to="/"></StyledLink>
          <StyledLink to="/why-coding">What is Coding</StyledLink>
          <StyledLink to="/curriculum/fundamentals-1">Curriculum</StyledLink>
          <StyledLink to="/glossary/data-types">Glossary</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
          <StyledLink to="faq">FAQ</StyledLink>
        </Drawer>
        <Burger>
          <img src={menuIcon} alt={menuIcon}></img>
        </Burger>
      </MobileNav>
    </header>
  );
}
