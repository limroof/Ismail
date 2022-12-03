import {
  Section,
  H2,
  Columns,
  Profile,
  ProfileDescription,
  Strong,
  ButtonsContainer,
  Dot,
} from "../Styles/SectionThree.js";
import quotes from "../../../public/img/quotes.svg";
import listReviews from "../utils/reviews.json";
export default function SectionThree() {
  return (
    <Section>
      <H2 className="section-stories__title">Grasshopper stories</H2>
      <Columns>
        {listReviews.map((elem, index) => {
          return (
            <Profile
              className={index === 1 && "active"}
              key={`Profile${index}`}
            >
              <div>
                <img src={elem.picture} alt=""></img>
              </div>
              <ProfileDescription key={`Description${index}`}>
                <img src={quotes} alt=""></img>
                <p>{elem.paragraph}</p>
                <Strong>{elem.name}</Strong>
              </ProfileDescription>
            </Profile>
          );
        })}
      </Columns>
      <ButtonsContainer>
        {listReviews.map((elem, index) => {
          return (
            <Dot className={index === 0 && "active"} key={`Dot${index}`}></Dot>
          );
        })}
      </ButtonsContainer>
    </Section>
  );
}
