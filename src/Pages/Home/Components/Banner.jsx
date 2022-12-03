import {
  Section,
  BannerContainer,
  H1,
  Button,
  BackgroundImage,
  Container,
  PartOne,
  PartTwo,
  Laptop,
  Phone,
  GrassHopper,
  DarkLeaf,
  LightLeaf,
  CloudLight,
  CloudDark,
} from "../Styles/Banner";
export default function Banner() {
  return (
    <Section>
      <BannerContainer>
        <H1 className="hero__title">
          Welcome to Grasshopper,
          <br />
          the coding app for beginners
        </H1>
        <p className="hero__subtitle">Learning to code</p>
        <Button className="cta-button start-coding">Start coding today</Button>
      </BannerContainer>
      <BackgroundImage></BackgroundImage>
      <Container>
        <PartOne>
          <DarkLeaf></DarkLeaf>
          <LightLeaf></LightLeaf>
        </PartOne>
        <PartTwo>
          <Laptop></Laptop>
          <Phone></Phone>
          <GrassHopper></GrassHopper>
          <CloudLight></CloudLight>
          <CloudDark></CloudDark>
        </PartTwo>
      </Container>
    </Section>
  );
}
