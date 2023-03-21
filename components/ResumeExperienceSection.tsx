import { Text } from "@chakra-ui/react";
import React from "react";

const ResumeExperienceSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-3">
      <Text className="!text-gray-400 text-xl">EXPERIENCE</Text>
      <div className="w-full flex flex-col items-start gap-[0.4rem]">
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
          December 2022-February 2023 | Remote
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented user authentication and authorization using{" "}
          <strong>JSON Web Tokens (JWT)</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>Redis caching</strong> in backend, resulting in an
          overall improvement in response time by <strong>~50%</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>email service</strong> using{" "}
          <strong>Nodemailer</strong> and <strong>Whatsapp notification</strong>{" "}
          service using <strong>Twilio</strong>.
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-[0.4rem]">
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
          Implemented <strong>API data caching</strong> using{" "}
          <strong>TanStack React Query</strong>, resulting in a ~70% reduction
          in network requests.
        </Text>
        <Text
          className="!text-gray-700 text-sm !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented scalable <strong>Solar Rooftop and EMI Calculator</strong>{" "}
          based on location using <strong>React Hooks</strong>.
        </Text>
      </div>
    </div>
  );
};

export default ResumeExperienceSection;
