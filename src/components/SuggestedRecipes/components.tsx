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
}) => <Box className="rounded-lg shadow-2xl overflow-hidden">{children}</Box>;

export const RecipeButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className="w-full bg-primary hover:bg-accent-dark shadow-2xl"
  />
);

export const DescriptionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => <Box className="p-6">{children}</Box>;
