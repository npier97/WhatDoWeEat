import { Box, Button, Input, Text } from "components-library";
import Kitchen from "../../assets/kitchen.png";

const Hero = () => (
  <Box
    className="h-screen pt-4 flex flex-col items-center justify-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${Kitchen})` }}
    data-testid="hero"
  >
    <Text as="h1" className="text-white font-bold text-4xl mb-4">
      What&apos;s In Your Fridge?
    </Text>
    <Text as="h2" className="text-white font-bold text-xl mb-4">
      Unleash culinary creativity with what you have!
    </Text>
    <Box className="w-full flex justify-center">
      <Input
        name="text"
        type="text"
        placeholder="Type ingredients and press Discover"
        className="max-w-128 bg-white"
      />
      <Button className="bg-green-600 ml-4">Discover recipes</Button>
    </Box>
  </Box>
);

export default Hero;
