import {
  Button,
  Heading,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { RiDashboardFill, RiInformationFill } from "react-icons/ri";
import { BsBookHalf } from "react-icons/bs";
import { DiGhostSmall } from "react-icons/di";
import { FaCode } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import { resumeURL } from "../constants";

const MobileNavbar = () => {
  return (
    <>
      <div
        className={`sm:hidden w-full flex justify-center items-center p-2 backdrop-blur fixed z-10 ${useColorModeValue(
          "bg-emerald-500/10",
          "bg-white/10"
        )}`}
      >
        <Heading>
          CY<span className="text-emerald-500">.</span>
        </Heading>
      </div>

      <div
        className={`sm:hidden w-full flex justify-evenly items-center p-2 py-4 backdrop-blur fixed z-10 bottom-0 ${useColorModeValue(
          "bg-emerald-500/10",
          "bg-white/10"
        )}`}
      >
        <ScrollIntoView selector="#home">
          <AiFillHome className="text-2xl" />
        </ScrollIntoView>
        <ScrollIntoView selector="#about-me">
          <RiInformationFill className="text-2xl" />
        </ScrollIntoView>
        <ScrollIntoView selector="#projects">
          <RiDashboardFill className="text-2xl" />
        </ScrollIntoView>
        <ScrollIntoView selector="#education">
          <BsBookHalf className="text-2xl" />
        </ScrollIntoView>
        <ScrollIntoView selector="#skills">
          <FaCode className="text-2xl" />
        </ScrollIntoView>
        <Button bgColor="green.500" textColor="white">
          <ScrollIntoView selector="#resume">
            <DiGhostSmall className="text-2xl" />
          </ScrollIntoView>
        </Button>
      </div>
    </>
  );
};

export default MobileNavbar;
