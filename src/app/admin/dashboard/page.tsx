import React from "react";
import Table from "@/components/table";
import { IoMdHome } from "react-icons/io";
import { IoDocuments } from "react-icons/io5";
import { MdBarChart, MdDashboard } from "react-icons/md";
import Widget from "@/components/widget/Widget";
import Card from "@/components/card";
const DashboardPage = () => {
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
      <p>Dashboard Page</p>
      {/* Card widget */}

      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 3xl:grid-cols-6">
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Earnings"}
          subtitle={"$340.5"}
        />
        <Widget
          icon={<IoDocuments className="h-6 w-6" />}
          title={"Spend this month"}
          subtitle={"$642.39"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"Sales"}
          subtitle={"$574.34"}
        />
        <Widget
          icon={<MdDashboard className="h-6 w-6" />}
          title={"Your Balance"}
          subtitle={"$1,000"}
        />
        <Widget
          icon={<MdBarChart className="h-7 w-7" />}
          title={"New Tasks"}
          subtitle={"145"}
        />
        <Widget
          icon={<IoMdHome className="h-6 w-6" />}
          title={"Total Projects"}
          subtitle={"$2433"}
        />
      </div>
      <div>
        <Card>
            
        </Card>
      </div>
      <div className="mt-5">
        <Table
          tableTitle={tableTitle}
          tableHeader={tableHeader}
          tableData={tableData}
          tableActions={tableActions}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
