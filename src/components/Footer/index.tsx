import { Box, Text } from "components-library";

const Footer = () => (
  <Box
    className="py-8 px-12 bg-white text-primary flex justify-between font-bold shadow-2xl"
    data-testid="footer"
  >
    <Box className="flex">
      <Text className="pr-1">Privacy policy</Text>
      <Text className="pl-1">Terms of service</Text>
    </Box>
    <Text data-testid="copyright">© 2025 WhatDoWeEat</Text>
  </Box>
);

export default Footer;
