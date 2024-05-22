import React from "react";
import Table from "@/components/table";

const Dashboard = () => {
  const tableTitle = "Recently Added Devices";
  const tableHeader = [
    { title: "Device id", key: "deviceId" },
    { title: "Current status", key: "status" },
    { title: "Location", key: "location" },
    { title: "Agent name", key: "agentName" },
    { title: "Action", key: "action" },
  ];
  const tableData = [
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
    {
      deviceId: "13262579",
      status: "Active",
      location: "The Coach Sec-137",
      agentName: "Puneet Kumar",
      action: "Edit",
    },
  ];

  const tableActions = ["Edit"];

  return (
    <div>
      <p>Dashboard</p>
      <Table
        tableTitle={tableTitle}
        tableHeader={tableHeader}
        tableData={tableData}
        tableActions={tableActions}
      />
    </div>
  );
};

export default Dashboard;
