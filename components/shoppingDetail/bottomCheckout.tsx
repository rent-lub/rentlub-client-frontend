"use client";

import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import BottomSheet from "./bottomSheet/bottomSheet";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/bottomSheetSlice";
import { BottomSheetShoppingDetailStatus } from "~/types/bottomShoppingDetailStatus";

interface BottomCheckOutProps {
  price: number;
  className?: string;
  status: BottomSheetShoppingDetailStatus;
  onClick: () => void;
}

const BottomCheckout: React.FC<BottomCheckOutProps> = ({
  price,
  className,
  status,
  onClick,
  ...props
}) => {
  const openBottomSheet: boolean = useAppSelector(
    (selector) => selector.bottomSheet
  );

  const selectDateFromCalendar: {
    selectStartDate: Date | null;
    selectEndDate: Date | null;
  } = useAppSelector((selector) => selector.customCalendar);

  return (
    <>
      <div
        className={`w-full bg-white py-4 px-5 flex flex-row border-t-2 border-t-[#E5E5E5] ${className}`}
      >
        <div className="grow">
          <div className="flex flex-row gap-x-4">
            <div className="text-black self-center text-2xl">฿</div>
            <div className="text-black flex flex-col">
              <div>
                <span className="text-2xl font-medium">
                  {price.toLocaleString()}{" "}
                </span>
                <span>บาท</span>
              </div>
              <div className="text-black self-start">
                {status == BottomSheetShoppingDetailStatus.SelectDate
                  ? "ต่อวัน"
                  : `จองรวม ${
                      selectDateFromCalendar.selectStartDate != null &&
                      selectDateFromCalendar.selectEndDate != null
                        ? selectDateFromCalendar.selectEndDate!.getDate() -
                          selectDateFromCalendar.selectStartDate.getDate() +
                          1
                        : ""
                    } `}
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 justify-center">
          <Button
            className="font-bold w-full h-[80%] rounded-xl text-md bg-[#40C090] text-white"
            onClick={onClick}
          >
            {status}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BottomCheckout;
