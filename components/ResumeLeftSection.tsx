import React from "react";
import ResumeAchievementsSection from "./ResumeAchievementsSection";
import ResumeEducationSection from "./ResumeEducationSection";
import ResumeSkillsSection from "./ResumeSkillsSection";

const ResumeLeftSection = () => {
  return (
    <div className="w-[55%] h-full flex flex-col items-start justify-between gap-3">
      <ResumeEducationSection />
      <ResumeSkillsSection />
      <ResumeAchievementsSection />
    </div>
  );
};

export default ResumeLeftSection;
