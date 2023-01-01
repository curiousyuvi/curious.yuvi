import React from "react";
import ResumeLeftSection from "./ResumeLeftSection";
import ResumeRightSection from "./ResumeRightSection";

const ResumeDownSection = () => {
  return (
    <div className="w-full h-full flex items-center gap-4">
      <ResumeLeftSection />
      <ResumeRightSection />
    </div>
  );
};

export default ResumeDownSection;
