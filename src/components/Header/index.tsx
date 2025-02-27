import { Navbar } from "components-library";
import Logo from "../../assets/logo.png";

const Header = () => (
  <Navbar
    logo={<img src={Logo} alt="Logo" width={"50px"} />}
    brand="WhatDoWeEat"
    links={[
      {
        href: "/",
        name: "Home",
      },
      {
        href: "/recipes",
        name: "Recipes",
      },
    ]}
    size="md"
    fixed={true}
    shadowOnScroll={true}
    className="bg-white text-green-600"
    data-testid="navbar"
  />
);

export default Header;
