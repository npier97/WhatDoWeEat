import { Box, Text, Input, Button } from "components-library";
import KitchenBackground from "@assets/kitchen.png";

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
    className="max-w-80 min-w-20 grow border-none outline-none"
  />
);

export const HeroButton = (props: React.ComponentProps<typeof Button>) => (
  <Button {...props} className="bg-green-600 ml-4" />
);

export const InputContainer = ({ children }: { children: React.ReactNode }) => (
  <Box className="bg-white flex flex-row-reverse p-2 items-center gap-2 border border-gray-200 rounded-md overflow-x-hidden overflow-y-auto transition-all ease-in-out duration-150">
    {children}
  </Box>
);

export const InputSpan = (props: React.ComponentProps<"span">) => (
  <span
    {...props}
    className="p-2 flex items-center bg-green-200 text-green-600 rounded-2xl"
  />
);
