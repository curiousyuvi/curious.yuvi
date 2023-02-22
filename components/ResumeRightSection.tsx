import React from "react";
import ResumeExperienceSection from "./ResumeExperienceSection";
import ResumeProjectsSection from "./ResumeProjectsSection";

const ResumeRightSection = () => {
  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-5">
      <ResumeExperienceSection />
      <ResumeProjectsSection />
    </div>
  );
};

export default ResumeRightSection;
