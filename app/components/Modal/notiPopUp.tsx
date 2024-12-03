import React from "react";

import { StaticImageData } from "next/image";
import Image from "next/image";

import schoolIcon from "@/images/icon/popup/school.png";
import pointIcon from "@/images/icon/popup/point.png";
import loginIcon from "@/images/icon/popup/login.png";
import notIcon from "@/images/icon/popup/not.png";
import closeIcon from "@/images/icon/close.svg";

type NotiPopUpProps = {
  onClose: () => void;
  icon: "school" | "point" | "login" | "not";
  title: string;
  description: string;
  modalType: "button" | "x-button";
  firstButton?: () => void;
  firstButtonText?: string;
  secondButton?: () => void;
  secondButtonText?: string;
};

const NotiPopUp: React.FC<NotiPopUpProps> = ({
  onClose,
  icon,
  title,
  description,
  firstButton,
  firstButtonText,
  secondButton,
  secondButtonText,
  modalType,
}) => {
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const iconMap: Record<NotiPopUpProps["icon"], StaticImageData> = {
    school: schoolIcon,
    point: pointIcon,
    login: loginIcon,
    not: notIcon,
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
    >
      <div className="relative w-[306px] p-[20px] pt-[52px] bg-white rounded-[16px] md:w-[430px] md:pt-[72px] md:pb-[26px] md:px-[20px]">
        <div className="flex justify-center mb-[32px] md:mb-[46px]">
          <Image
            src={iconMap[icon]}
            alt={icon}
            className="w-[96px] h-[96px] md:w-[124px] md:h-[124px]"
          />
        </div>

        <div className="text-center">
          <h2 className="mb-[12px] text-lg font-semibold text-text1 md:text-2xl md-[16px]">
            {title}
          </h2>
          <p className="mb-[28px] text-sm text-subtext1 whitespace-pre md:text-base md:mb-[32px]">
            {description}
          </p>
        </div>

        {modalType === "button" ? (
          <div>
            <button
              onClick={firstButton}
              className="w-full py-[15px] mb-[8px] bg-primary text-background font-semibold text-sm rounded-[8px] hover:bg-primary_hover focus:bg-primary_pressed md:py-[18px] md:mb-[16px] md:text-base"
            >
              {firstButtonText}
            </button>
            <button
              onClick={secondButton}
              className="block mx-auto px-[10px] py-[16px] text-[13px] font-semibold text-primary md:text-[15px]"
            >
              {secondButtonText}
            </button>
          </div>
        ) : (
          <button onClick={onClose} className="block mx-auto px-4 py-2">
            <Image src={closeIcon} alt="close" width={28} height={28} />
          </button>
        )}
      </div>
    </div>
  );
};

export default NotiPopUp;
