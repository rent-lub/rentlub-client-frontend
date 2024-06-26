"use client";

import React, { useState } from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
import BottomSheet from "./bottomSheet/bottomSheet";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/bottomSheetSlice";
import { BottomSheetShoppingDetailStatus } from "~/types/bottomShoppingDetailStatus";
import { DateTime } from "luxon";
import { setSelectStartDate } from "~/lib/features/calendarSlice";
import { ShippingState } from "~/lib/features/shippingMethodSlice";
import { Product } from "~/types/productModel";

interface BottomCheckOutProps {
  price: number;
  depositFee: number;
  className?: string;
  status: BottomSheetShoppingDetailStatus;
  onClick: () => void;
}

const BottomCheckout: React.FC<BottomCheckOutProps> = ({
  price,
  className,
  status,
  depositFee,
  onClick,
  ...props
}) => {
  const openBottomSheet: { isOpen: boolean; currentProduct: Product | null } =
    useAppSelector((selector) => selector.bottomSheet);

  const selectDateFromCalendar: {
    selectStartDate: Date | null;
    selectEndDate: Date | null;
  } = useAppSelector((selector) => selector.customCalendar);

  const shippingState: ShippingState = useAppSelector(
    (selector) => selector.shippingMethod
  );

  const deliveryFee = shippingState.selectedShipping?.fee ?? 0;

  const calculateFee = (): string => {
    if (status != BottomSheetShoppingDetailStatus.SelectDate) {
      if (
        selectDateFromCalendar.selectStartDate != null &&
        selectDateFromCalendar.selectEndDate != null
      ) {
        return (
          openBottomSheet.currentProduct?.pricePerDay! *
            (Math.abs(
              DateTime.fromJSDate(selectDateFromCalendar.selectStartDate)
                .diff(
                  DateTime.fromJSDate(selectDateFromCalendar.selectEndDate),
                  "days"
                )
                .get("days")
            ) +
              1) +
          openBottomSheet.currentProduct?.deposit.value!
        ).toLocaleString();
      } else {
        return "0";
      }
    }
    return openBottomSheet.currentProduct?.pricePerDay.toLocaleString() ?? "0";
  };

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
                <span className="text-xl font-medium">{calculateFee()} </span>
                <span>บาท</span>
              </div>
              <div className="text-black self-start text-sm">
                <p className="text-sm">
                  {status == BottomSheetShoppingDetailStatus.SelectDate
                    ? "ต่อวัน"
                    : `จองรวม ${
                        selectDateFromCalendar.selectStartDate != null &&
                        selectDateFromCalendar.selectEndDate != null
                          ? Math.abs(
                              DateTime.fromJSDate(
                                selectDateFromCalendar.selectStartDate
                              )
                                .diff(
                                  DateTime.fromJSDate(
                                    selectDateFromCalendar.selectEndDate
                                  ),
                                  "days"
                                )
                                .get("days")
                            ) + 1
                          : "0"
                      } วัน`}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12  pl-2 items-center self-center">
          <Button
            className="font-bold w-full h-10 rounded-xl text-md bg-[#40C090] text-white"
            onClick={onClick}
            isDisabled={
              openBottomSheet.currentProduct != null &&
              openBottomSheet.currentProduct.stock <= 0
            }
          >
            {status}
          </Button>
        </div>
      </div>
    </>
  );
};

export default BottomCheckout;
