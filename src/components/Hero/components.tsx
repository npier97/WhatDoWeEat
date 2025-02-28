import { Box, Text, Input, Button } from "components-library";
import KitchenBackground from "../../assets/kitchen.png";

export const HeroContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className="min-h-screen pt-12 flex flex-col items-center justify-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${KitchenBackground})` }}
    data-testid="hero"
  >
    {children}
  </Box>
);

export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <Text as="h1" className="text-white font-bold text-4xl mb-4">
    {children}
  </Text>
);

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as="h2" className="text-white font-bold text-xl mb-4">
    {children}
  </Text>
);

export const HeroInput = (props: React.ComponentProps<typeof Input>) => (
  <Input {...props} className="max-w-80 bg-white" />
);

export const HeroButton = (props: React.ComponentProps<typeof Button>) => (
  <Button {...props} className="bg-green-600 ml-4" />
);
