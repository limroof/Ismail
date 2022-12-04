import React from "react";
import {
  TopBar,
  Nav,
  MobileNav,
  ImgLogo,
  StyledLink,
  Drawer,
  Burger,
  CloseIcon,
} from "./Styles/StylesHeader";
import menuIcon from "../../public/img/menu-icon.svg";
import closeIcon from "../../public/img/close-icon.svg";

import { useEffect, useState } from "react";

export default function Header() {
  const [isDrawerOpen, setDrawer] = useState(false);

  useEffect(() => {
    document.getElementById("topBar").classList.add("--active");
  }, []);
  const openDrawer = () => {
    setDrawer(true);
  };
  const closeDrawer = () => {
    setDrawer(false);
  };
  return (
    <header>
      <TopBar id="topBar">Now available in French!</TopBar>
      <Nav>
        <StyledLink to="/">
          <ImgLogo />
        </StyledLink>
        <StyledLink to="/why-coding">What is Coding</StyledLink>
        <StyledLink to="/curriculum/fundamentals-1">Curriculum</StyledLink>
        <StyledLink to="/glossary/data-types">Glossary</StyledLink>
        <StyledLink to="/about">About Us</StyledLink>
        <StyledLink to="faq">FAQ</StyledLink>
      </Nav>

      <MobileNav>
        <ImgLogo />
        {isDrawerOpen && (
          <Drawer id="drawer">
            <CloseIcon
              onClick={() => {
                closeDrawer();
              }}
            >
              <img src={closeIcon} alt={menuIcon}></img>
            </CloseIcon>
            <StyledLink to="/"></StyledLink>
            <StyledLink to="/why-coding">What is Coding</StyledLink>
            <StyledLink to="/curriculum/fundamentals-1">Curriculum</StyledLink>
            <StyledLink to="/glossary/data-types">Glossary</StyledLink>
            <StyledLink to="/about">About Us</StyledLink>
            <StyledLink to="faq">FAQ</StyledLink>
            <button className="cta-button start-coding">Get the app</button>
          </Drawer>
        )}

        <Burger
          onClick={() => {
            openDrawer();
          }}
        >
          <img src={menuIcon} alt={menuIcon}></img>
        </Burger>
      </MobileNav>
    </header>
  );
}
