import React from "react";
import {
  Section,
  Container,
  DotContainer,
  Dot,
  Item,
  Description,
  Icon,
  H2,
  Image,
} from "../Styles/SectionFive.js";

import SliderList from "../utils/Slider.json";
import { useState } from "react";

export default function SectionFive() {
  const [CurrSlide, setCurrSlide] = useState(0);
  const Buttons = (
    <DotContainer>
      {SliderList.map((elem, index) => {
        return (
          <Dot
            className={index === CurrSlide && "active"}
            key={`Dot${index}`}
            onClick={() => setCurrSlide(index)}
          ></Dot>
        );
      })}
    </DotContainer>
  );
  return (
    <Section>
      <Container>
        <React.Fragment>
          {SliderList.map((elem, index) => {
            return (
              index === CurrSlide && (
                <Item>
                  <Description>
                    <Icon src={elem.icon} alt=""></Icon>
                    <H2>{elem.paragraph}</H2>
                    {Buttons}
                  </Description>
                  <Image>
                    <img src={elem.picture}></img>
                  </Image>
                </Item>
              )
            );
          })}
        </React.Fragment>
      </Container>
    </Section>
  );
}
