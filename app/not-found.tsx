"use client";

import { CalendarX, MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CustomIcon } from "~/components/shoppingCatIcon";

export default function NotFound() {
  return (
    <div className="global">
      <div className="h-screen min-w-full bg-white flex flex-col items-center justify-center font-medium">
        <div className="relative">
          <CustomIcon icon={<MagnifyingGlass size={86} color="black" />} />
          <div className="absolute bottom-7 left-5">
            <CustomIcon icon={<X size={35} color="black" />} />
          </div>
        </div>
        <h2 className="text-black text-4xl pt-4">404</h2>
        <span className="text-2xl text-black">Not found</span>
        <Link href="/">
          <p className="text-green pt-6">Return Home</p>
        </Link>
      </div>
    </div>
  );
}
