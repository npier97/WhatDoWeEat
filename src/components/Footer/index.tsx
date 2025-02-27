import { Box, Text } from "components-library";

const Footer = () => (
  <Box
    className="flex justify-between bg-white text-green-600 font-bold shadow-lg shadow-t-2 py-4 px-12"
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
