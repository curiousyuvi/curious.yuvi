import { Text } from "@chakra-ui/react";
import React from "react";

const ResumeProjectsSection = () => {
  return (
    <div className="w-full flex flex-col items-start gap-2">
      <Text className="!text-gray-400 text-xl">PROJECTS</Text>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-base font-extrabold">
          COMPIFLY
          <a
            href="https://github.com/curiousyuvi/compifly"
            className="!text-emerald-700 text-xs font-extrabold ml-2"
          >
            GITHUB
          </a>{" "}
          <a
            href="https://compifly.vercel.app"
            className="!text-emerald-700 text-xs font-extrabold ml-1"
          >
            DEPLOYMENT
          </a>
        </Text>
        <Text className="!text-gray-600 text-sm !font-['Poppins']">
          A social media app for competitive programmers.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Built using <strong>Next.js</strong> and written in{" "}
          <strong>Typescript</strong> and styled using{" "}
          <strong>TailwindCSS</strong> and <strong>Chakra-UI</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>ratings fetching</strong> feature from competitive
          programming websites using <strong>Web scraping</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented{" "}
          <strong>
            authentication, user profile, search user, rankings and add friend
          </strong>{" "}
          feature using <strong>Firebase Auth and Firestore</strong>,{" "}
          <strong>SSR</strong> and <strong>SSG</strong> from Next.js.
        </Text>
      </div>
      <div className="w-full flex flex-col items-start gap-1">
        <Text className="!text-gray-700 text-base font-extrabold">
          CURIE
          <a
            href="https://github.com/curiousyuvi/curie"
            className="!text-emerald-700 text-xs font-extrabold ml-2"
          >
            GITHUB
          </a>{" "}
          <a
            href="https://curie-beta.herokuapp.com"
            className="!text-emerald-700 text-xs font-extrabold ml-1"
          >
            DEPLOYMENT
          </a>
        </Text>
        <Text className="!text-gray-600 text-sm !font-['Poppins']">
          A chat app for music lovers to play synced music in chat rooms
          controlled by voting.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Built using <strong>Next.js</strong> and written in{" "}
          <strong>Typescript</strong> and styled using{" "}
          <strong>TailwindCSS</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>realtime messaging and voting</strong> feature
          using <strong>Socket.io</strong>, <strong>Redis</strong> and{" "}
          <strong>MongoDB</strong>.
        </Text>
        <Text
          className="!text-gray-700 text-xs !font-['Poppins'] ml-3"
          _before={{ content: `"•  "` }}
        >
          Implemented <strong>music player</strong> using{" "}
          <strong>Youtube iframe and search API</strong>.
        </Text>
      </div>
    </div>
  );
};

export default ResumeProjectsSection;
