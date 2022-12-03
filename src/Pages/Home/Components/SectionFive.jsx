import React from "react";
import {
  Section,
  Container,
  ButtonsContainer,
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

  return (
    <Section>
      <Container>
        {CurrSlide !== undefined && (
          <React.Fragment>
            {/* <Slide item={SliderList[CurrSlide]} /> */}
            {SliderList.map((elem, index) => {
              return (
                index === CurrSlide && (
                  <Item>
                    <Description>
                      <Icon src={elem.icon} alt=""></Icon>
                      <H2>{elem.paragraph}</H2>
                    </Description>
                    <Image>
                      <img src={elem.picture}></img>
                    </Image>
                  </Item>
                )
              );
            })}
            <ButtonsContainer>
              {SliderList.map((elem, index) => {
                return (
                  <Dot
                    className={index === CurrSlide && "active"}
                    key={`Dot${index}`}
                    onClick={() => setCurrSlide(index)}
                  ></Dot>
                );
              })}
            </ButtonsContainer>
          </React.Fragment>
        )}
      </Container>
    </Section>
  );
}
