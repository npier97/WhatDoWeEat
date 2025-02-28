import { Box } from "components-library";
import {
  HeroButton,
  HeroContainer,
  HeroInput,
  HeroSubtitle,
  HeroTitle,
} from "./components";

const Hero = () => (
  <HeroContainer>
    <HeroTitle>What&apos;s In Your Fridge?</HeroTitle>
    <HeroSubtitle>Unleash culinary creativity with what you have!</HeroSubtitle>

    <Box className="w-full flex justify-center xs:flex-col">
      <HeroInput
        name="text"
        type="text"
        placeholder="Type ingredients and press Discover recipes"
      />
      <HeroButton>Discover recipes</HeroButton>
    </Box>
  </HeroContainer>
);

export default Hero;
