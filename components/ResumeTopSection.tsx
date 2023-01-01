import { Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { RiMailFill } from "react-icons/ri";

const ResumeTopSection = ({
  name,
  links,
}: {
  name: string;
  links: { text: string; href: string; icon: ReactNode }[];
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <Text className="opacity-70 text-4xl !text-emerald-700 font-thin">
        {name.toUpperCase()}
      </Text>
      <div className="w-full flex items-center justify-center gap-3">
        {links.map((link) => (
          <a
            key={link.text}
            href={link.href}
            className="!text-emerald-700 text-xs font-extrabold font-['Poppins'] flex items-center gap-[0.20rem]"
          >
            <span className="text-base">{link.icon}</span>
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ResumeTopSection;
