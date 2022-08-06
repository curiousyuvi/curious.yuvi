import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";

const DownButton = ({ target }: { target: string }) => {
  return (
    <div className="w-full flex justify-center">
      <ScrollIntoView selector={target}>
        <FaChevronDown className="text-4xl sm:text-6xl animate-bounce" />
      </ScrollIntoView>
    </div>
  );
};

export default DownButton;
