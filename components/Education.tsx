import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import DownButton from "./DownButton";

const Education = () => {
  return (
    <div
      id="education"
      className="w-full min-h-screen flex flex-col items-start justify-center p-4"
    >
      <Heading>EDUCATION</Heading>
      <span className="my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 gap-y-12">
        <EducationItem
          duration="2020 - PRESENT"
          heading="I.E.T. Rohilkhand University, Bareilly"
          body="Bachelor of Technology in Computer Science & Information Technology"
        />
        <EducationItem
          duration="2018 - 2020"
          heading="Heliger Borden Education Centre, Kanpur (ISC) - 12th"
          body="Percentage: 86%"
        />
        <EducationItem
          duration="2016 - 2018"
          heading="Sri Ram Education Centre, Kanpur (ICSE) - 10th"
          body="Percentage: 91%"
        />
      </div>
    </div>
  );
};

const EducationItem = ({
  duration,
  heading,
  body,
}: {
  duration: string;
  heading: string;
  body: string;
}) => {
  return (
    <div className="flex flex-col">
      <Heading fontSize="2xl">{duration}</Heading>
      <span className="my-1" />
      <Text>{heading}</Text>
      <span className="my-1" />
      <Text className="opacity-70">{body}</Text>
    </div>
  );
};

export default Education;
