import { Text } from "@chakra-ui/react";
import React from "react";

const ResumeExperienceSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <Text className="!text-gray-400 text-xl">EXPERIENCE</Text>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-[0.8rem] font-extrabold">
          <a
            href="https://exhime.com"
            className="!text-emerald-700 text-base mr-2"
          >
            EXHIME
          </a>
          | BACK-END DEVELOPER INTERN
        </Text>
        <Text className="!text-gray-600 text-xs !font-['Poppins']">
          December 2022-Present | Remote
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-[0.8rem] font-extrabold">
          <a
            href="https://www.solruf.com"
            className="!text-emerald-700 text-base mr-2"
          >
            SOLRUF
          </a>
          | FRONT-END DEVELOPER INTERN
        </Text>
        <Text className="!text-gray-600 text-xs !font-['Poppins']">
          September 2022-November 2022 | Remote
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented PDF downloadable{" "}
          <strong>Proforma and Invoice generation feature</strong> on checkout
          with multiple style templates.
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Created beautiful UI for pages like landing, dashboard, etc using{" "}
          <strong>Material-UI</strong> and <strong>Framer Motion</strong>
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented scalable <strong>Solar Rooftop and EMI Calculator</strong>{" "}
          based on location using <strong>React Hooks</strong>.
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-[0.8rem] font-extrabold">
          <a
            href="https://www.codingjr.online"
            className="!text-emerald-700 text-base mr-2"
          >
            CODING JR
          </a>
          | FLUTTER MOBILE DEVELOPER INTERN
        </Text>
        <Text className="!text-gray-600 text-xs !font-['Poppins']">
          November 2021-December 2021 | Remote
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>realtime chat feature</strong> on live lecture
          using <strong>Socket.io</strong>
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>REST API data caching</strong> using{" "}
          <strong>HiveDB</strong> which improved invoke time ~40%
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>course player</strong> with features like{" "}
          <strong>progress tracking</strong> and payment gateway using{" "}
          <strong>Razorpay-flutter client</strong>.
        </Text>
      </div>
    </div>
  );
};

export default ResumeExperienceSection;
