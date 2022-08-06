import React, { ReactNode } from "react";
import { SiCodechef, SiGmail } from "react-icons/si";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex items-center text-2xl w-full justify-center sm:justify-start">
      <SocialsItem href="mailto:ysgaur9919@gmail.com">
        <SiGmail />
      </SocialsItem>
      <SocialsItem href="https://www.linkedin.com/in/yuvraj-singh-b85ab71b9">
        <FaLinkedin />
      </SocialsItem>
      <SocialsItem href="https://github.com/curiousyuvi">
        <FaGithub />
      </SocialsItem>
      <SocialsItem href="https://www.codechef.com/users/curiousyuvi007">
        <SiCodechef />
      </SocialsItem>
      <SocialsItem href="https://www.hackerrank.com/curiousyuvi">
        <FaHackerrank />
      </SocialsItem>
    </div>
  );
};

const SocialsItem = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="cursor-pointer opacity-70 hover:opacity-100 hover:text-emerald-500 duration-300 mr-6"
    >
      {children}
    </a>
  );
};

export default Socials;
