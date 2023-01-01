import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const ResumeSkillsSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <Text className="!text-gray-400 text-xl">SKILLS & TECHNOLOGIES</Text>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-sm font-extrabold">LANGUAGES</Text>
        <Text className="!text-gray-400 flex flex-wrap items-center">
          <SkillElement>C</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />
          <SkillElement>C++</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>HTML</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>CSS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>JAVASCRIPT</SkillElement>
          {/* <GoPrimitiveDot className="mx-1 text-[0.6rem]" /> */}

          <SkillElement>TYPESCRIPT</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>JAVA</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>DART</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>R</SkillElement>
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-sm font-extrabold">
          FRAMEWORKS & LIBRARIES
        </Text>
        <Text className="!text-gray-400 flex flex-wrap items-center">
          <SkillElement>REACTJS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />
          <SkillElement>NEXTJS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>REDUX</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>NODEJS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>EXPRESSJS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>MONGODB</SkillElement>
          {/* <GoPrimitiveDot className="mx-1 text-[0.6rem]" /> */}

          <SkillElement>SOCKET.IO</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>FLUTTER</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>FIREBASE</SkillElement>
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-sm font-extrabold">TOOLS</Text>
        <Text className="!text-gray-400 flex flex-wrap items-center">
          <SkillElement>GIT</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />
          <SkillElement>GITHUB</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>VS-CODE</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>ANDROID-STUDIO</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>R-STUDIO</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>FIGMA</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>POSTMAN</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>LINUX</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>DOCKER</SkillElement>
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-sm font-extrabold">
          COURSEWORK
        </Text>
        <Text className="!text-gray-400 flex flex-wrap items-center">
          <SkillElement>DATA STRUCTURES</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />
          <SkillElement>ALGORITHMS</SkillElement>
          {/* <GoPrimitiveDot className="mx-1 text-[0.6rem]" /> */}

          <SkillElement>OBJECT ORIENTED PROGRAMMING</SkillElement>
          {/* <GoPrimitiveDot className="mx-1 text-[0.6rem]" /> */}

          <SkillElement>DBMS</SkillElement>
          <GoPrimitiveDot className="mx-1 text-[0.6rem]" />

          <SkillElement>OPERATING SYSTEM</SkillElement>

          <SkillElement>COMPUTER NETWORKS</SkillElement>
          {/* <GoPrimitiveDot className="mx-1 text-[0.6rem]" /> */}
        </Text>
      </div>
    </div>
  );
};

export default ResumeSkillsSection;

export const SkillElement = ({ children }: { children: ReactNode }) => {
  return (
    <span className="!text-emerald-700 font-extrabold text-[0.85rem]">
      {children}
    </span>
  );
};
