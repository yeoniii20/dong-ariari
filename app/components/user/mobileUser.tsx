"use client";

import { useState } from "react";
import Image from "next/image";
import notification_default from "@/images/icon/notification_default.svg";
import notification_pressed from "@/images/icon/notification_pressed.svg";
import notification_unconfirmed from "@/images/icon/notification_unconfirmed.svg";
import login from "@/images/icon/mobile_login.svg";

const MobileUser = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [notificationStatus, setNotificationStatus] = useState<
    "default" | "pressed" | "unconfirmed"
  >("default");

  const getNotificationImage = () => {
    switch (notificationStatus) {
      case "pressed":
        return notification_pressed;
      case "unconfirmed":
        return notification_unconfirmed;
      default:
        return notification_default;
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="flex items-center gap-4">
      {/* 알림 아이콘 */}
      <Image
        src={getNotificationImage()}
        alt="notification"
        onMouseDown={() => setNotificationStatus("pressed")}
        onMouseUp={() => setNotificationStatus("default")}
        className="cursor-pointer"
        height={24}
        width={24}
      />
      {/* 로그인 상태에 따라 다른 UI */}
      {isLoggedIn ? (
        <div
          className="rounded-full w-7 h-7 bg-[#CBCBCB] aspect-square"
          onClick={handleLogout}
        />
      ) : (
        <Image
          src={login}
          alt="login"
          height={24}
          width={24}
          className="cursor-pointer aspect-square"
          onClick={handleLogin}
        />
      )}
    </div>
  );
};

export default MobileUser;
