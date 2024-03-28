"use client";

import { CalendarX, Flask } from "@phosphor-icons/react/dist/ssr";
import { useEffect } from "react";
import { CustomIcon } from "~/components/shoppingCatIcon";
import Image from "next/image";


export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="h-screen min-w-full bg-white flex flex-col items-center justify-center font-medium">
      <Image src="/Noconnection.svg" alt="" width={200} height={200}/>
      <span className="text-lg text-black pt-3">
        Sorry, something went wrong.
      </span>
      <div className=" text-md text-green">Please try again later.</div>
    </div>
  );
}
