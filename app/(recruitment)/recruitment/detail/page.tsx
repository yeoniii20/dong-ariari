"use client";

import React, { useEffect, useState } from "react";
import ClubActivities from "./content/clubActivities";
import ClubInfo from "./content/clubInfo";

const RecruitmentDetailPage = () => {
  return (
    <>
      <ClubInfo />
      <ClubActivities />
    </>
  );
};

export default RecruitmentDetailPage;
