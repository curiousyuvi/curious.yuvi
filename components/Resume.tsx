import { Button, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BsDownload, BsPrinterFill } from "react-icons/bs";
import { useReactToPrint } from "react-to-print";
import MyResume from "./MyResume";

const Resume = () => {
  const resumePrintRef = useRef(null);
  const handleResumePrint = useReactToPrint({
    content: () => resumePrintRef.current,
    documentTitle: "YuvrajSingh",
  });

  return (
    <div
      id="resume"
      className="w-full flex flex-col items-start justify-center my-8 p-4 gap-4"
    >
      <Heading>RESUME</Heading>
      <div className="w-full justify-center hidden md:flex">
        <Button
          bgColor="green.500"
          textColor="white"
          onClick={handleResumePrint}
        >
          <BsPrinterFill className="mr-3" /> Print my Resume
        </Button>
      </div>

      <div className="w-full justify-center flex md:hidden">
        <Button
          bgColor="green.500"
          textColor="white"
          as={"a"}
          href="https://drive.google.com/file/d/1waoGwkjHHfHi5ek86RzR0Zg5ggcwjzFk/view"
          target="_blank"
        >
          <BsDownload className="mr-3" /> Download my Resume
        </Button>
      </div>

      <div className="w-full hidden md:flex">
        <div ref={resumePrintRef} className="w-full">
          <MyResume />
        </div>
      </div>

      <div className="w-full flex md:hidden">
        <div className="w-full flex justify-center">
          <iframe
            src="https://drive.google.com/file/d/1waoGwkjHHfHi5ek86RzR0Zg5ggcwjzFk/preview"
            width="380"
            height="537"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
