/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import Logo from "../../../public/logo.png";

import { IRoute } from "@/types/navigation";
import Image from "next/image";
import Link from "next/link";

function SidebarHorizon(props: { routes: IRoute[]; [x: string]: any }) {
  const { routes, open, setOpen } = props;
  return (
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col w-72 primary_bg pb-10 shadow-2xl shadow-white/5 transition-all text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96 xl:translate-x-0"
      }`}
    >
      <span
        className="absolute right-4 top-4 block cursor-pointer xl:hidden bg-red-600"
        onClick={() => setOpen(false)}
      >
        <HiX />
      </span>

      <div className={` flex items-center justify-center py-8`}>
        <Link href={"/admin"}>
          <Image
            src={Logo}
            width={150}
            height={80}
            alt="Picture of the author"
          />
        </Link>
      </div>
      <div className="mb-7 h-px bg-white/80" />
      {/* Nav item */}

      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

      {/* Nav item end */}
    </div>
  );
}

export default SidebarHorizon;
