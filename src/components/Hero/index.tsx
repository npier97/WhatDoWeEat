import { HeroContainer, HeroSubtitle, HeroTitle } from './components';
import HeroTag from './HeroTag';
import HeroActions from './HeroActions';

const Hero = () => (
  <HeroContainer>
    <HeroTitle>What&apos;s In Your Fridge?</HeroTitle>
    <HeroSubtitle>Unleash culinary creativity with what you have!</HeroSubtitle>
    <HeroActions />
    <HeroTag />
  </HeroContainer>
);

export default Hero;
