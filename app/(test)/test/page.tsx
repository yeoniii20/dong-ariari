"use client";

import { useState } from "react";
import MobileButtons from "../components/buttons/mobile_Buttons";
import PcButtons from "../components/buttons/PC_Buttons";
import Badges from "../components/badges";

const TestPage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);
  const [isBadgeVisible, setIsBadgeVisible] = useState<boolean>(true);

  return (
    <div>
      <button
        className="py-2 px-4 mb-3 bg-pink-400 text-white text-body3_r
        rounded-lg hover:bg-pink-500"
        onClick={() => setIsButtonVisible(!isButtonVisible)}
      >
        {isButtonVisible
          ? "Hidden Button Components"
          : "Show Button Components"}
      </button>
      <button
        className="py-2 px-4 mb-3 bg-yellow-400 text-white text-body3_r
        rounded-lg hover:bg-yellow-500"
        onClick={() => setIsBadgeVisible(!isBadgeVisible)}
      >
        {isBadgeVisible ? "Hidden Badge Components" : "Show Badge Components"}
      </button>

      {isButtonVisible && (
        <div className="bg-pink-100 p-3">
          <PcButtons />
          <MobileButtons />
        </div>
      )}
      {isBadgeVisible && (
        <div className="bg-gray-100 p-3">
          <Badges />
        </div>
      )}
    </div>
  );
};

export default TestPage;
