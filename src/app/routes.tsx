import React from "react";

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
  MdSubject,
} from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { HiDeviceTablet } from "react-icons/hi2";

const routes = [
  {
    name: "Dashboard",
    layout: "admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Account Management",
    layout: "admin",
    path: "account-management",
    icon: <MdBarChart className="h-6 w-6" />,
    secondary: true,
  },
  {
    name: "Device Management",
    layout: "admin",
    path: "device-management",
    icon: <HiDeviceTablet className="h-6 w-6" />,
  },

  {
    name: "Support Tickets",
    layout: "admin",
    path: "support-tickets",
    icon: <BiSupport className="h-6 w-6" />,
  },
  {
    name: "Subscriptions",
    layout: "admin",
    path: "subscriptions",
    icon: <MdSubject className="h-6 w-6" />,
  },
  {
    name: "Sign In",
    layout: "auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
  },
];
export default routes;
