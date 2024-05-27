"use client";
import React from "react";
import CustomGraph from "@/components/charts/index";
interface ViewCountData {
  _id: string;
  views: number;
}

const AccountManagementPage = () => {
  const viewCount: ViewCountData[] = [
    {
      _id: "20/03/2023",
      views: 45,
    },
    {
      _id: "24/03/2023",
      views: 23,
    },
    {
      _id: "25/03/2023",
      views: 5,
    },
    {
      _id: "27/03/2023",
      views: 16,
    },
    {
      _id: "29/03/2023",
      views: 35,
    },
    {
      _id: "30/03/2023",
      views: 30,
    },
  ];

  return (
    <div>
      Account Management
      <CustomGraph viewCount={viewCount} />
    </div>
  );
};

export default AccountManagementPage;
