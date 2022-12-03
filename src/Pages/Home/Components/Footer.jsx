import React from "react";
import {
  Footer,
  Container,
  Top,
  Bottom,
  StyledLink,
} from "../Styles/Footer.js";
export default function SectionSev() {
  return (
    <Footer>
      <Container>
        <Top>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/">what is Coding</StyledLink>
            </li>
            <li>
              <StyledLink to="/">About</StyledLink>
            </li>
          </ul>
          <ul>
            <li>
              <StyledLink to="/">Email us</StyledLink>
            </li>
            <li>
              <StyledLink to="/">FAQ</StyledLink>
            </li>
          </ul>
          <ul>
            <li>
              <StyledLink to="/">Terms of service</StyledLink>
            </li>
            <li>
              <StyledLink to="/">Privacy policy</StyledLink>
            </li>
          </ul>
        </Top>
        <Bottom>Grasshopper Logo</Bottom>
      </Container>
    </Footer>
  );
}
