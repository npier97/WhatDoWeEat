import { Box, Text } from 'components-library';

const Footer = () => (
  <Box
    className='py-8 px-12 bg-white text-primary flex max-[1023px]:flex-col justify-between items-center font-bold shadow-2xl max-[1023px]:gap-4'
    data-testid='footer'
  >
    <Box className='flex gap-4'>
      <Text>Privacy policy</Text>
      <Text>Terms of service</Text>
    </Box>
    <Text data-testid='copyright'>© 2025 WhatDoWeEat</Text>
  </Box>
);

export default Footer;
