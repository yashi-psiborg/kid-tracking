import React from "react";

// Admin Imports

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "admin",
    path: "",
    icon: <MdHome className="h-6 w-6" />,
  },
  {
    name: "Account Management",
    layout: "admin",
    path: "",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,

    secondary: true,
  },
  {
    name: "Device Management",
    layout: "admin",
    path: "",
    icon: <MdBarChart className="h-6 w-6" />,
  },
  {
    name: "Support Tickets",
    layout: "admin",
    path: "",
    icon: <MdPerson className="h-6 w-6" />,
  },
  {
    name: "Sign In",
    layout: "auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
  },
];
export default routes;
