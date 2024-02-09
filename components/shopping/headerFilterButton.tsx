import { CalendarBlank, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React from "react";

const HeaderFilterButton = () => {
  return (
    <div className="w-full bg-white rounded-3xl drop-shadow-md h-16 text-black">
      <div className="grid grid-cols-2 gap-x-3 divide-x content-center">
        <div className="flex justify-center items-center h-16">
          <div className="flex flex-row gap-x-3 items-center">
            <MagnifyingGlass size={22} />
            <div className="flex flex-col">
              <p className="text-[14px]">SEARCH</p>
              <p className="text-[8px] text-gray-800">
                What are you looking for?
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-16">
          <div className="flex flex-row gap-x-3 items-center">
            <CalendarBlank size={22} />
            <div className="flex flex-col">
              <p className="text-[14px]">DATE</p>
              <p className="text-[8px] text-gray-800">Start - Return</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderFilterButton;
