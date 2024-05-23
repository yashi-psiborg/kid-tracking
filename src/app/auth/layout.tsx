"use client";
import { PropsWithChildren, useState } from "react";

// Chakra imports

// Layout components
// import { SidebarContext } from 'contexts/SidebarContext';
import React from "react";
import { isWindowAvailable } from "@/utils/navigation";
import FixedPlugin from "@/components/fixedPlugin/FixedPlugin";
import authImg from "/public/img/auth/auth.png";

// Custom Chakra theme
interface AuthProps extends PropsWithChildren {}

export default function AuthLayout({ children }: AuthProps) {
  // states and functions
  if (isWindowAvailable()) document.documentElement.dir = "ltr";
  return (
    <div>
      <div className="relative float-right h-full min-h-screen w-full dark:!bg-navy-900">
        <main className={`mx-auto min-h-screen`}>
          {/* <FixedPlugin /> */}
          <div className="relative flex">
            <div className="mx-auto flex min-h-full w-full flex-col justify-start pt-12 md:max-w-[75%] lg:h-screen lg:max-w-[1013px] lg:px-8 lg:pt-0 xl:h-[100vh] xl:max-w-[1383px] xl:px-0 xl:pl-[70px]">
              <div className="mb-auto flex flex-col pl-5 pr-5 md:pl-12 md:pr-0 lg:max-w-[48%] lg:pl-0 xl:max-w-full">
                {children}
                <div className="absolute right-0 hidden h-full min-h-screen md:block lg:w-[49vw] 2xl:w-[44vw]">
                  <div
                    // style={{ backgroundImage: authImg ? `url(${authImg})` : '' }}
                    className={`absolute flex h-full w-full items-end justify-center bg-cover bg-center lg:rounded-bl-[120px] xl:rounded-bl-[200px]`}
                  >
                    <div className="relative flex h-full w-full items-center">
                      <div
                        style={{ backgroundImage: `url(${authImg.src})` }}
                        className="flex h-[95%] w-full bg-cover rounded-3xl mr-7"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
