"use client";

import { HEADER_MENU } from "@/data/header";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const HeaderTab = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [barWidth, setBarWidth] = useState<number>(0);
  const [barLeft, setBarLeft] = useState<number>(0);

  const handleNavigation = (path: string, id: number) => {
    setActiveId(id);
    router.push(path);
  };

  useEffect(() => {
    if (pathname === "/") {
      setActiveId(null);
    } else {
      const activeIndex = HEADER_MENU.findIndex(
        (item) => item.path === pathname
      );
      if (activeIndex !== -1) {
        setActiveId(HEADER_MENU[activeIndex].id);
        if (navRef.current) {
          const activeItem = navRef.current.children[activeIndex];
          if (activeItem) {
            setBarWidth(activeItem.clientWidth);
            setBarLeft(
              activeItem.getBoundingClientRect().left -
                navRef.current.getBoundingClientRect().left
            );
          }
        }
      }
    }
  }, [pathname]);

  return (
    <div className="relative w-full mt-[26px] md:mt-0">
      <nav
        className="flex space-x-4 md:justify-around md:space-x-14"
        ref={navRef}
      >
        {HEADER_MENU.slice(0, 4).map((item) => (
          <div
            key={item.id}
            onClick={() => handleNavigation(item.path, item.id)}
            className={`flex flex-col items-center cursor-pointer text-sm text-text1 mb-[10px]
              font-semibold transition-colors duration-300 md:text-lg md:mb-[22px]`}
            // ${activeId === item.id ? "text-text1" : "text-unselected"}
          >
            {item.title}
          </div>
        ))}
      </nav>
      {/* {pathname !== "/" && (
        <div
          className="absolute bottom-0 h-[1px] md:h-[3px] bg-text1 transition-all duration-300"
          style={{ width: `${barWidth}px`, left: `${barLeft}px` }}
        />
      )} */}
    </div>
  );
};

export default HeaderTab;
