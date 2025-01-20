import { Box, Navbar } from "components-library";
import Logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <Navbar
      logo={<img src={Logo} alt="Logo" width={"50px"} />}
      links={[
        {
          href: "#",
          name: "Home",
        },
        {
          href: "#",
          name: "About",
        },
      ]}
      size="md"
      variant="transparent"
      fixed={true}
    >
      <Box>Navbar</Box>
    </Navbar>
  );
};
