import { Box, Text, Input, Button } from "components-library";
import KitchenBackground from "@assets/kitchen.png";

export const HeroContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className="pt-40 pb-20 flex flex-col items-center justify-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed"
    style={{ backgroundImage: `url(${KitchenBackground})` }}
    data-testid="hero"
  >
    {children}
  </Box>
);

export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <Text as="h1" className="mb-4 text-white font-bold text-4xl">
    {children}
  </Text>
);

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as="h2" className="mb-4 text-white font-bold text-xl">
    {children}
  </Text>
);

export const HeroInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    {...props}
    type="text"
    className="max-w-80 min-w-20 bg-white outline-none"
  />
);

export const HeroButton = (props: React.ComponentProps<typeof Button>) => (
  <Button {...props} className="ml-4 bg-green-600" />
);

export const InputSpan = (props: React.ComponentProps<"span">) => (
  <span
    {...props}
    className="p-2 bg-green-200 text-green-600 hover:bg-green-300 flex items-center rounded-2xl cursor-pointer"
  />
);
