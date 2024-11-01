"use client";

import Image from "next/image";
import favorite_default from "@/images/icon/favorite_toggle_default.svg";
import favorite_active from "@/images/icon/favorite_toggle_active.svg";

type FavoriteToggleProps = {
  isActive: boolean;
};

const FavoriteToggle = ({ isActive }: FavoriteToggleProps) => {
  const getFavoriteStateImage = () => {
    if (isActive) return favorite_active;
    return favorite_default;
  };

  return (
    <>
      <Image
        src={getFavoriteStateImage()}
        alt="notification"
        onClick={() => {}}
        className="cursor-pointer"
      />
    </>
  );
};

export default FavoriteToggle;
