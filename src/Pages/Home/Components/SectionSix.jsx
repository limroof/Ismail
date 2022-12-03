import React from "react";
import {
  Section,
  H2,
  Container,
  Line1,
  Line2,
  Line3,
  Item,
} from "../Styles/SectionSix.js";
import Lines from "../utils/Lines.json";

export default function SectionSix() {
  return (
    <Section>
      <H2>Learn concepts that apply to any programming language</H2>
      <Container>
        <Line1>
          {Lines[0].map((elem, index) => {
            return <Item>{elem}</Item>;
          })}
        </Line1>
        <Line2>
          {Lines[1].map((elem, index) => {
            return <Item>{elem}</Item>;
          })}
        </Line2>
        <Line3>
          {Lines[2].map((elem, index) => {
            return <Item>{elem}</Item>;
          })}
        </Line3>
      </Container>
    </Section>
  );
}
