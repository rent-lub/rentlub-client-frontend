"use client";

import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import BottomSheet from "./bottomSheet";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/bottomSheetSlice";

interface BottomCheckOutProps {
  price: number;
  className?: string;
}

const BottomCheckout: React.FC<BottomCheckOutProps> = ({
  price,
  className,
  ...props
}) => {
  const openBottomSheet: boolean = useAppSelector(
    (selector) => selector.bottomSheet
  );
  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger(!openBottomSheet));
  };

  return (
    <>
      <div
        className={`w-full bg-white py-4 px-5 flex flex-row border-2 border-t-[#E5E5E5] ${className}`}
      >
        <div className="flex-grow">
          <div className="flex flex-row gap-x-4">
            <div className="text-black self-center text-2xl">฿</div>
            <div className="text-black flex flex-col">
              <div>
                <span className="text-2xl font-medium">
                  {price.toLocaleString()}{" "}
                </span>
                <span>บาท</span>
              </div>
              <div className="text-black self-start">ต่อวัน</div>
            </div>
          </div>
        </div>
        <div className="flex-grow-0">
          <Button
            className="font-bold px-12 rounded-xl bg-[#40C090] text-white"
            onClick={() => {
              handleOnTriggerBottomSheet();
            }}
          >
            Select Date
          </Button>
        </div>
      </div>
      <BottomSheet openSheet={openBottomSheet} />
    </>
  );
};

export default BottomCheckout;
