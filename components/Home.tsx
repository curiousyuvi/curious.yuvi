import { Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Typical from "react-typical";
import DownButton from "./DownButton";
import Socials from "./Socials";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full min-h-screen flex flex-col items-center justify-center p-4"
    >
      <div className="w-full flex items-center justify-between sm:justify-between">
        <div className="flex flex-col items-start">
          <span className="text-emerald-500 font-extrabold text-xl font-['OSWALD']">
            <Typical
              wrapper="h1"
              steps={[
                "FULL-STACK APP DEVELOPER",
                3000,
                "GRAPHIC & UI DESIGNER",
                3000,
                "COMPETITIVE PROGRAMMER",
                3000,
                "TECHNICAL WRITER",
                3000,
              ]}
              loop={Infinity}
            />
          </span>

          <Heading fontSize="6xl">YUVRAJ SINGH</Heading>
          <span className="my-1" />
          <Text className="opacity-70">
            Full-stack App developer, based in India.
          </Text>
          <Text className="opacity-70">
            {"Wanna tak about tech? I'm all ears"}
          </Text>
          <span className="my-4" />
          <Socials />
        </div>
        <div className="hidden sm:flex">
          <Image src="/yuvraj.png" alt="" height={500} width={500} />
        </div>
      </div>
      <span className="my-16" />
      <DownButton target="#about-me" />
    </div>
  );
};

export default Home;
