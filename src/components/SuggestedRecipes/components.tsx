import { Box, Button, Text } from "components-library";

export const RecipeSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as="h2" className="mb-15 font-bold text-xl">
    {children}
  </Text>
);

export const RecipeContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Box className="rounded-lg shadow-2xl">{children}</Box>;

export const RecipeButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className="ml-4 bg-primary hover:bg-accent-dark shadow-2xl"
  />
);
