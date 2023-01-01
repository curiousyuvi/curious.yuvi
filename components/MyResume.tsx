import { Divider, Text } from "@chakra-ui/react";
import React from "react";
import { BsPerson, BsPersonBadgeFill, BsPersonFill } from "react-icons/bs";
import {
  RiGithubFill,
  RiLinkedinBoxFill,
  RiLinkedinFill,
  RiMailFill,
} from "react-icons/ri";
import {
  SiCodechef,
  SiGeeksforgeeks,
  SiHackerrank,
  SiLeetcode,
} from "react-icons/si";
import ResumeDownSection from "./ResumeDownSection";
import ResumeTopSection from "./ResumeTopSection";

const MyResume = () => {
  return (
    <div
      //   ref={ref}
      className="aspect-[1/1.414] max-w-3xl w-full bg-white mx-auto px-8 py-8 text-gray-600 !font-['Raleway']"
    >
      <div className="w-full h-full flex flex-col items-center gap-4">
        <ResumeTopSection
          name="Yuvraj Singh"
          links={[
            {
              text: "ysgaur9919@gmail.com",
              icon: <RiMailFill />,
              href: "mailto:ysgaur9919@gmail.com",
            },
            {
              text: "Portfolio",
              icon: <BsPersonFill />,
              href: "https://curiousyuvi.vercel.app/",
            },
            {
              text: "Github",
              icon: <RiGithubFill />,
              href: "https://github.com/curiousyuvi",
            },
            {
              text: "Linkedin",
              icon: <RiLinkedinBoxFill />,
              href: "https://www.linkedin.com/in/yuvraj-singh-b85ab71b9",
            },
            {
              text: "Codechef",
              icon: <SiCodechef />,
              href: "https://www.codechef.com/users/curiousyuvi007",
            },
            {
              text: "HackerRank",
              icon: <SiHackerrank />,
              href: "https://www.hackerrank.com/curiousyuvi",
            },
            // { text: "Leetcode", icon: <SiLeetcode />, href: "" },
          ]}
        />
        <hr className="w-full !text-gray-500 border border-t-0 border-gray-400" />
        <ResumeDownSection />
      </div>
    </div>
  );
};

export default MyResume;
