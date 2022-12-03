import React from "react";
import {
  Section,
  Container,
  H2,
  Paragraph,
  FloatingHopper,
  Devices,
} from "../Styles/SectionFour.js";
export default function SectionFour() {
  return (
    <Section>
      <Container>
        <FloatingHopper></FloatingHopper>
        <H2 className="section-columns__column__title">
          Learn to code anywhere.
        </H2>
        <Paragraph>
          Grasshopper is available on Android and all web browsers. Your
          progress syncs seamlessly between devices.
        </Paragraph>
        <Devices></Devices>
      </Container>
    </Section>
  );
}
