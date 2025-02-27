import { Navbar } from "components-library";
import Logo from "@/assets/logo.png";

const Header = () => (
  <Navbar
    logo={<img src={Logo} alt="Logo" width={"50px"} />}
    brand="WhatDoWeEat"
    links={[
      {
        href: "#",
        name: "Home",
      },
      {
        href: "#",
        name: "Recipes",
      },
    ]}
    size="md"
    fixed={true}
    shadowOnScroll={true}
    className="bg-white text-green-600"
  />
);

export default Header;
