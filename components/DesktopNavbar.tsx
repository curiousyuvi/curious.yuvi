import { Button, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { resumeURL } from "../constants";

const DesktopNavbar = () => {
  return (
    <div
      className={`hidden sm:flex w-full justify-center items-center backdrop-blur fixed z-10 ${useColorModeValue(
        "bg-emerald-500/10",
        "bg-white/10"
      )}`}
    >
      <div className="w-full max-w-6xl flex items-center justify-between p-2">
        <Heading>
          CURIOUSYUVI
          <span className="text-emerald-500">.</span>
        </Heading>
        <div className="flex items-center font-bold">
          <ScrollIntoView selector="#home">
            <Text className="cursor-pointer text-sm lg:text-base">HOME</Text>
          </ScrollIntoView>
          <span className="mx-2 md:mx-4" />
          <ScrollIntoView selector="#about-me">
            <Text className="cursor-pointer text-sm lg:text-base">ABOUT</Text>
          </ScrollIntoView>
          <span className="mx-2 md:mx-4" />
          <ScrollIntoView selector="#projects">
            <Text className="cursor-pointer text-sm lg:text-base">
              PROJECTS
            </Text>
          </ScrollIntoView>
          <span className="mx-2 md:mx-4" />
          <ScrollIntoView selector="#education">
            <Text className="cursor-pointer text-sm lg:text-base">
              EDUCATION
            </Text>
          </ScrollIntoView>
          <span className="mx-2 md:mx-4" />
          <ScrollIntoView selector="#skills">
            <Text className="cursor-pointer text-sm lg:text-base">SKILLS</Text>
          </ScrollIntoView>
          <span className="mx-2 md:mx-4" />
          <ScrollIntoView selector="#resume">
            <Button bgColor="green.500" textColor="white">
              RESUME
            </Button>
          </ScrollIntoView>
        </div>
      </div>
    </div>
  );
};

export default DesktopNavbar;
