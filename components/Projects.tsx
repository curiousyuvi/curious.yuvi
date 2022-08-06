import { Button, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { ReactNode } from "react";
import DownButton from "./DownButton";

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full min-h-screen flex flex-col items-start justify-center p-4 pt-24"
    >
      <Heading>PROJECTS</Heading>
      <span className="my-4" />
      <div className="w-full flex flex-col items-center">
        <ProjectsItem
          type="NEXT-JS APP"
          poster="/compifly.png"
          title="COMPIFLY"
          description="A social media app for 🧑‍💻 competitive programmers."
          deployment="https://compifly.vercel.app/"
          github="https://github.com/curiousyuvi/compifly"
        />
        <span className="my-8" />
        <ProjectsItem
          type="MERN APP"
          poster="/curie.png"
          title="CURIE"
          description="An app for 💬 chatting and 🎧️ vibing on synced music with your gang."
          deployment="https://curie-beta.herokuapp.com"
          github="https://github.com/curiousyuvi/curie"
          reverse
        />
      </div>
    </div>
  );
};

const ProjectsItem = ({
  type,
  title,
  description,
  poster,
  deployment,
  github,
  reverse,
}: {
  type: string;
  title: string;
  description: string;
  poster: string;
  deployment: string;
  github: string;
  reverse?: boolean;
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row ${
        reverse ? "sm:flex-row-reverse" : ""
      } items-center`}
    >
      <Image src={poster} alt="" height={400} width={488} />
      <span className="my-4 sm:mx-4" />
      <div className="flex flex-col items-start">
        <Heading fontSize="lg" textColor="green.500">
          {type}
        </Heading>
        <span className="mt-1" />
        <Heading fontSize="4xl">{title}</Heading>
        <span className="my-1" />
        <Text className="opacity-80 text-sm">{description}</Text>
        <span className="my-1" />
        <div className="flex">
          <a href={deployment} target="_blank" rel="noreferrer">
            <Button bgColor="green.500" textColor="white">
              {title}
            </Button>
          </a>

          <span className="mx-2" />

          <a href={github} target="_blank" rel="noreferrer">
            <Button
              variant="outline"
              borderColor="green.500"
              textColor="green.500"
            >
              GITHUB
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
