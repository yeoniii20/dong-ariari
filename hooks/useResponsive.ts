"use client";

import { useEffect, useState } from "react";

const useResponsive = (query: string): boolean => {
  const [isBreakPoint, setIsBreakPoint] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const updateBreakPoint = () => setIsBreakPoint(mediaQueryList.matches);

    updateBreakPoint();
    mediaQueryList.addEventListener("change", updateBreakPoint);

    return () => mediaQueryList.removeEventListener("change", updateBreakPoint);
  }, [query]);

  return isBreakPoint;
};

export default useResponsive;
