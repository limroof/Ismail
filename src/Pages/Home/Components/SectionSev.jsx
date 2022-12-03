import React from "react";
import {
  Section,
  Container,
  H2,
  Button,
  GrassHopperMama,
  Cloud1,
  Cloud2,
  Cloud3,
} from "../Styles/SectionSev.js";
import { Link } from "react-router-dom";

export default function SectionSev() {
  return (
    <Section>
      <Container>
        <H2>Get started on your adventure in coding with Grasshopper.</H2>
        <Button className="cta-button start-coding">
          <Link to="/">Get Started</Link>
        </Button>
      </Container>
      <GrassHopperMama></GrassHopperMama>
      <Cloud1></Cloud1>
      <Cloud2></Cloud2>
      <Cloud3></Cloud3>
    </Section>
  );
}
