import { Section, H2, Columns, Item } from "../Styles/SectionTwo.js";
import img1 from "../../../public/img/adventure__waving.svg";
import img2 from "../../../public/img/adventure__coding.svg";
import img3 from "../../../public/img/adventure__journey.svg";

export default function SectionTwo() {
  return (
    <Section>
      <H2 className="section-touts__title">
        The best way to start your coding adventure.
      </H2>

      <Columns>
        <Item>
          <img src={img1} alt={img1}></img>
          <p>
            Learn with fun, quick lessons on your phone that teach you to write
            real JavaScript.
          </p>
        </Item>
        <Item>
          <img src={img2} alt={img1}></img>
          <p>
            Move through progressively challenging levels as you develop your
            abilities.
          </p>
        </Item>
        <Item>
          <img src={img3} alt={img1}></img>
          <p>
            Graduate with fundamental programming skills for your next step as a
            coder.
          </p>
        </Item>
      </Columns>
    </Section>
  );
}
