import { Box, Button, Text } from 'components-library';

export const RecipeSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h2' className='mb-15 font-bold text-xl'>
    {children}
  </Text>
);

export const RecipeContainer = ({
  children
}: {
  children: React.ReactNode;
}) => (
  <Box className='max-w-xs h-400px flex flex-col rounded-lg shadow-2xl overflow-hidden'>
    {children}
  </Box>
);

export const RecipeButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className='w-full bg-primary hover:bg-accent-dark shadow-2xl'
  />
);

export const DescriptionContainer = ({
  children
}: {
  children: React.ReactNode;
}) => <Box className='p-6'>{children}</Box>;

export const DescriptionTitle = ({
  children
}: {
  children: React.ReactNode;
}) => <Text className='font-bold'>{children}</Text>;

export const DescriptionText = ({
  children
}: {
  children: React.ReactNode;
}) => <Text className='mb-8 line-clamp-5'>{children}</Text>;
