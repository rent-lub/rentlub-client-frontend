"use client";
import { CalendarBlank, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import React, { useState } from "react";
import { SearchDateModal } from "../searchDateModal";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/searchDateSlice";

const HeaderFilterButton = () => {
  const isClickSearchDate: boolean = useAppSelector(
    (selector) => selector.searchDate
  );
  const dispatch = useAppDispatch();
  const handleOnSearchClick = () => {
    dispatch(trigger(!isClickSearchDate));
  };
  return (
    <>
      <div className="w-full bg-white rounded-3xl drop-shadow-md h-11 text-black">
        <div className="grid grid-cols-2 gap-x-3 divide-x content-center">
          <div className="flex justify-center items-center h-11">
            <div className="flex flex-row gap-x-3 items-center">
              <MagnifyingGlass size={18} />
              <div className="flex flex-col">
                <p className="text-[12px]">SEARCH</p>
                <p className="text-[8px] text-gray-800">
                  What are you looking for?
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center h-11">
            <div
              className="flex flex-row gap-x-3 items-center"
              onClick={() => handleOnSearchClick()}
            >
              <CalendarBlank size={18} />
              <div className="flex flex-col">
                <p className="text-[12px]">DATE</p>
                <p className="text-[8px] text-gray-800">Start - Return</p>
              </div>
            </div>
          </div>
        </div>
        <SearchDateModal isOpen={isClickSearchDate} />
      </div>
    </>
  );
};

export default HeaderFilterButton;
