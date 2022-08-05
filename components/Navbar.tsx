import { Heading, Text } from "@chakra-ui/react";
import React from "react";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <header className="w-full">
      <MobileNavbar />
      <DesktopNavbar />
    </header>
  );
};

export default Navbar;
