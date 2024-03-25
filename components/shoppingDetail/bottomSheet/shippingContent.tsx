import React from "react";
import CalendarLabel from "../calendarLabel";
import { Vault } from "@phosphor-icons/react/dist/ssr";
import CustomCalendar from "~/components/customCalendar";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";
import { Product } from "~/types/productModel";
import { useAppSelector } from "~/lib/hooks";

const ShippingContent = () => {
  const openBottomSheet: { isOpen: boolean; currentProduct: Product | null } =
    useAppSelector((selector) => selector.bottomSheet);
  return (
    <>
      <div className="pt-4 h-full w-full flex flex-col justify-center items-center gap-y-4 divide-y divide-[#DDDDDD]">
        <div className="flex flex-col items-center ">
          <CustomCalendar
            reserveList={[]}
            onDateSelect={(startDate, endDate) => {}}
            showLabel
          />
        </div>
        <div className="pt-4 w-full flex flex-col justify-center items-center">
          <div className="flex flex-row items-center gap-x-3">
            <Vault size={30} />
            <div className="flex flex-col">
              <p className="text-sm text-black text-opacity-50 font-semibold">
                ค่ามัดจำ
              </p>
              <p className="font-bold text-md">
                {Number(
                  openBottomSheet.currentProduct?.deposit.value
                ).toLocaleString()}{" "}
                บาท
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingContent;
