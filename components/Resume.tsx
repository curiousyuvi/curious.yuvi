import { Button, Heading, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import { BsPrinterFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import MyResume from "./MyResume";

const Resume = () => {
  const resumePrintRef = useRef(null);
  const handleResumePrint = useReactToPrint({
    content: () => resumePrintRef.current,
    documentTitle: "YuvrajSinghResume",
  });
  return (
    <div
      id="resume"
      className="w-full flex flex-col items-start justify-center my-8 p-4 gap-4"
    >
      <Heading>RESUME</Heading>
      <div className="w-full flex justify-center">
        <Button
          bgColor="green.500"
          textColor="white"
          onClick={handleResumePrint}
        >
          <BsPrinterFill className="mr-3" /> Print My Resume
        </Button>
      </div>

      <Text className="text-center visible md:invisible">
        {
          "😥 Sorry, can't preview resume in Mobile switch to Desktop, but you can still print."
        }
      </Text>
      <div className="w-full invisible md:visible">
        <div ref={resumePrintRef} className="w-full">
          <MyResume />
        </div>
      </div>
    </div>
  );
};

export default Resume;
