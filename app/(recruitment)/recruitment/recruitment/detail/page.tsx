"use client";

import React, { useEffect, useState } from "react";
import ClubInfo from "./content/clubInfo";
import ClubActivities from "./content/clubActivities";

const RecruitmentDetailPage = () => {
  return (
    <>
      <ClubInfo />
      <ClubActivities />
    </>
  );
};

export default RecruitmentDetailPage;
