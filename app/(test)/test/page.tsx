"use client";

import { useState } from "react";
import MobileButtons from "../components/buttons/mobile_Buttons";
import PcButtons from "../components/buttons/PC_Buttons";
import LoginDialog from "@/components/Modal/loginDialog";
import ProfileSettingModal from "@/components/Modal/profileSetting/profileSettingModal";

const TestPage = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isProfileOpen, setIsProfileOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button
        className="py-2 px-4 mb-3 bg-pink-400 text-white rounded-lg hover:bg-pink-500"
        onClick={() => setIsButtonVisible(!isButtonVisible)}
      >
        {isButtonVisible
          ? "Hidden Button Components"
          : "Show Button Components"}
      </button>
      <button
        className="py-2 px-4 mb-3 bg-green-400 text-white rounded-lg hover:bg-green-500"
        onClick={handleOpenModal}
      >
        Open Login Dialog
      </button>
      <button
        className="py-2 px-4 mb-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500"
        onClick={() => setIsProfileOpen(!isProfileOpen)}
      >
        {isProfileOpen
          ? "Hidden Profile Setting Components"
          : "Show Profile Setting Components"}
      </button>
      {isModalOpen && <LoginDialog onClose={handleCloseModal} />}
      {isProfileOpen && (
        <ProfileSettingModal onClose={() => setIsProfileOpen(false)} />
      )}
      {isButtonVisible && (
        <div className="bg-pink-100 p-3">
          <PcButtons />
          <MobileButtons />
        </div>
      )}
    </div>
  );
};

export default TestPage;
