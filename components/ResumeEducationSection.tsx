import { Text } from "@chakra-ui/react";
import React from "react";

const ResumeEducationSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <Text className="!text-gray-400 text-xl">EDUCATION</Text>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-emerald-700 text-sm font-extrabold">
          INSTITUTE OF ENGINEERING AND TECHNOLOGY BAREILLY
        </Text>
        <Text className="!text-gray-700 text-sm font-bold !font-['Poppins']">
          B.TECH IN COMPUTER SCIENCE & INFORMATION TECHNOLOGY
        </Text>
        <Text className="!text-gray-600 text-sm !font-['Poppins']">
          2020-2024 | Bareilly, India
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-emerald-700 text-sm font-extrabold">
          HELIGER BORDEN EDUCATION CENTER
        </Text>
        <Text className="!text-gray-700 text-sm font-bold !font-['Poppins']">
          CLASS 12th | 85%
        </Text>
        <Text className="!text-gray-600 text-sm !font-['Poppins']">
          2018-2020 | Kanpur, India
        </Text>
      </div>
    </div>
  );
};

export default ResumeEducationSection;
