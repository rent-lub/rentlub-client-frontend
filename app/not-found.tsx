"use client";

import { CalendarX, MagnifyingGlass, X } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { CustomIcon } from "~/components/shoppingCatIcon";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="global">
      <div className="h-screen min-w-full bg-white flex flex-col items-center justify-center font-medium">
        <div className="relative">
        <Image src="/404NotFound.svg" alt="" width={200} height={200}/>
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
