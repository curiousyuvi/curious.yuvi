import { Heading, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import DownButton from "./DownButton";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen flex flex-col items-start justify-center p-4 pt-24"
    >
      <Heading>SKILLS</Heading>
      <span className="my-4" />
      <div className="w-full flex flex-col">
        <SkillsItem title="REACT-JS" progress={100} />
        <SkillsItem title="NEXT-JS" progress={100} />
        <SkillsItem title="NODE-JS" progress={100} />
        <SkillsItem title="EXPRESS-JS" progress={100} />
        <SkillsItem title="MONGO-DB" progress={100} />
        <SkillsItem title="SOCKET.IO" progress={100} />
        <SkillsItem title="FLUTTER" progress={100} />
        <SkillsItem title="FIREBASE" progress={100} />
        <SkillsItem title="GIT & GITHUB" progress={100} />
        <SkillsItem title="FIGMA" progress={80} />
        <SkillsItem title="POSTMAN" progress={80} />
        <SkillsItem title="DOCKER" progress={70} />
      </div>
    </div>
  );
};

const SkillsItem = ({
  title,
  progress,
}: {
  title: string;
  progress: number;
}) => {
  return (
    <div className="flex w-full items-center my-2">
      <div className="flex items-center w-full max-w-3xl">
        <div
          className={`px-4 py-2 sm:py-4  bg-emerald-500`}
          style={{ width: `${progress}%` }}
        >
          <Text fontSize="md" fontWeight="bold">
            {title}
          </Text>
        </div>
        <span className="mx-1" />
        <div
          className={`h-[0.2rem] ${useColorModeValue(
            "bg-gray-800",
            "bg-white"
          )}`}
          style={{ width: `${100 - progress}%` }}
        />
      </div>
      <span className="mx-2" />
      <Text>{`${progress}%`}</Text>
    </div>
  );
};

export default Skills;
