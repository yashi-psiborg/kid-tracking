/* eslint-disable */
import React from "react";
import { useCallback } from "react";
import { usePathname } from "next/navigation";
import NavLink from "@/components/link/NavLink";
import DashIcon from "@/components/icons/DashIcon";
// chakra imports

export const SidebarLinks = (props: { routes: RoutesType[] }): JSX.Element => {
  // Chakra color mode
  const pathname = usePathname();

  const { routes } = props;

  // verifies if routeName is the one active (in browser input)
  const activeRoute = useCallback(
    (routeName: string) => {
      return pathname?.includes(routeName);
    },
    [pathname]
  );

  const createLinks = (routes: RoutesType[]) => {
    return routes.map((route, index) => {
      if (route.layout === "admin" || route.layout === "auth") {
        return (
          <NavLink key={index} href={"/" + route.layout + "/" + route.path}>
            <div className="relative mb-3 flex justify-center hover:cursor-pointer">
              <li
                className={`my-[3px] flex cursor-pointer items-center px-5 py-3 w-[95%] ${
                  activeRoute(route.path) && "selected_bg rounded-lg"
                }`}
                key={index}
              >
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold  text-white"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                <p
                  className={`leading-1 ml-4 flex ${
                    activeRoute(route.path) === true
                      ? "font-bold  text-white selected_bg"
                      : "font-medium text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              {/* {activeRoute(route.path) ? (
                <div className=" top-px h-9 w-full rounded-lg selected_bg" />
              ) : null} */}
            </div>
          </NavLink>
        );
      }
    });
  };
  // BRAND
  return <>{createLinks(routes)}</>;
};

export default SidebarLinks;
