import React from "react";
import { TopBar, Nav, ImgLogo, StyledLink } from "./Styles/StylesHeader";
import logoImg from "../../public/img/logo.blue.svg";
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
    </header>
  );
}
