import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { GoPrimitiveDot } from "react-icons/go";

const ResumeAchievementsSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <Text className="!text-gray-400 text-xl">ACHIEVEMENTS</Text>
      <Text
        className="!text-gray-700 text-sm !font-['Poppins']"
        _before={{ content: `"•  "` }}
      >
        <AchievementBold>3 Star</AchievementBold> |{" "}
        <AchievementBold>1759 pts</AchievementBold> on CodeChef.
      </Text>
      <Text
        className="!text-gray-700 text-sm !font-['Poppins']"
        _before={{ content: `"• "` }}
      >
        <AchievementBold>5 Star</AchievementBold> at HackerRank in{" "}
        <AchievementBold>Problem Solving</AchievementBold>,{" "}
        <AchievementBold>C</AchievementBold>,{" "}
        <AchievementBold>C++</AchievementBold>,{" "}
        <AchievementBold>Java</AchievementBold> and{" "}
        <AchievementBold>Javascript</AchievementBold>.
      </Text>
      <Text
        className="!text-gray-700 text-sm !font-['Poppins']"
        _before={{ content: `"• "` }}
      >
        Global rank <AchievementBold>37 of 3000+</AchievementBold> in CodeChef
        May Lunchtime 2022 (Div. 3).
      </Text>
    </div>
  );
};

export default ResumeAchievementsSection;

export const AchievementBold = ({ children }: { children: ReactNode }) => {
  return <span className="text-emerald-700 font-bold">{children}</span>;
};
