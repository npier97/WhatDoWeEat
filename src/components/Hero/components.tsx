import { Box, Text, Input, Button } from 'components-library';

export const HeroContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    className='pt-40 max-[1023px]:px-4 pb-20 text-white flex flex-col items-center bg-hero bg-no-repeat bg-cover bg-center bg-fixed'
    style={{ backgroundImage: `url('images/kitchen.png')` }}
    data-testid='hero'
  >
    {children}
  </Box>
);

export const HeroTitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h1' className='mb-4 text-center font-bold text-4xl'>
    {children}
  </Text>
);

export const HeroSubtitle = ({ children }: { children: React.ReactNode }) => (
  <Text as='h2' className='mb-4 text-center font-semibold text-xl'>
    {children}
  </Text>
);

export const HeroInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    {...props}
    type='text'
    className='max-w-80 min-w-20 bg-white text-black outline-none shadow-2xl'
  />
);

export const HeroButton = (props: React.ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className='bg-primary hover:bg-accent-dark shadow-2xl'
    aria-label='Discover recipes'
  />
);

export const TagContainer = ({ children }: { children: React.ReactNode }) => (
  <Box
    id='tags'
    className='max-w-200 min-h-10 max-h-50 flex flex-wrap gap-2'
    data-testid='tag-span-container'
    role='list'
  >
    {children}
  </Box>
);

export const TagSpan = (props: React.ComponentProps<'span'>) => (
  <span
    {...props}
    className='p-2 bg-accent-light text-primary hover:bg-accent-medium shadow-2xl hover:ring-2 hover:ring-[#50A57A] flex items-center rounded-2xl cursor-pointer'
    role='listitem'
    tabIndex={0}
  />
);

export const GenerateRecipeButton = (
  props: React.ComponentProps<typeof Button>
) => (
  <Button
    {...props}
    className='p-2 bg-primary hover:bg-accent-dark shadow-2xl flex gap-1 items-center'
    aria-label='Generate random recipes'
  />
);
