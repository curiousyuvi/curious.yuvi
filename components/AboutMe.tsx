import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import DownButton from "./DownButton";

const AboutMe = () => {
  return (
    <div
      id="about-me"
      className="w-full min-h-screen flex flex-col items-start justify-center p-4"
    >
      <Heading>ABOUT ME</Heading>
      <span className="my-4" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 gap-y-12">
        <AboutMeItem
          icon="/develop.png"
          heading="DEVELOPER"
          body="I'm a Full-stack app developer, most proficient in Front-end development."
        />
        <AboutMeItem
          icon="/design.png"
          heading="DESIGNER"
          body="I also do Graphic and UI Designing as a hobby."
        />
        <AboutMeItem
          icon="/cp.png"
          heading="PROGRAMMER"
          body="I find competitive programming quite fun and it gives me a great dopamine rush seeing those test cases pass."
        />
        <AboutMeItem
          icon="/write.png"
          heading="WRITER"
          body="I also do technical writing sometimes."
        />
      </div>
    </div>
  );
};

const AboutMeItem = ({
  icon,
  heading,
  body,
}: {
  icon: string;
  heading: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start">
        <Image src={icon} alt="" height={25} width={35} />
        <span className="mx-2" />
        <Heading fontSize="xl">{heading}</Heading>
      </div>
      <span className="my-2" />
      <Text className="opacity-70 text-sm">{body}</Text>
    </div>
  );
};

export default AboutMe;
