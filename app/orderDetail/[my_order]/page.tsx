"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import { Textarea } from "@nextui-org/input";
import {
  CalendarBlank,
  Package,
  Truck,
  CheckCircle,
  ArrowsClockwise,
  Clipboard,
} from "@phosphor-icons/react/dist/ssr";
import ImageCarousel from "~/components/shoppingDetail/imageCarousel";
import Overlay from "~/components/orderDetail/overlay";
import ReturnButton from "~/components/orderDetail/ReturnSheet";
import ReturnSheet from "~/components/orderDetail/ReturnSheet";
import { MyOrder } from "~/lib/features/myOrderSlice";
import { useParams } from "next/navigation";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { DateTime } from "luxon";

const OrderDetail = ({ params }: { params: { my_order: string } }) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const currentOrder = myOrder.allOrder[Number(params.my_order)];

  return (
    <>
      {/* carousal */}
      <div className="bg-white h-screen min-w-full overflow-x-hidden overflow-y-auto relative">
        <ImageCarousel
          images={currentOrder.product.images}
          width={320}
          height={320}
        />

        {/* detail */}
        <div className="bg-white h-screen min-w-full text-black">
          <div className="flex flex-col gap-4 pt-5 px-5">
            {/* product name */}
            <p className="line-clamp-2">{currentOrder.product.name}</p>
            <div className=" rounded-xl w-full border border-slate-200 "></div>

            {/* order status */}
            <div className="flex flex-col gap-1">
              <p className="mb-2">สถานะสินค้า</p>
              <p className="text-sm">ได้รับสินค้าแล้ว</p>
              {
                <StatusBar
                  index={Object.keys(RentingStatus).indexOf(
                    currentOrder.renting.status
                  )}
                />
              }
            </div>
            <div className=" rounded-xl w-full border border-slate-200 "></div>

            {/* date of reservation */}
            <p className="">วันที่จอง</p>
            <div className="flex justify-center items-center gap-5">
              <div className="flex items-center gap-1">
                <CalendarBlank className="fill-black" size={35} />
                <div className="flex flex-col gap-0">
                  <p className="text-slate-400 text-xs">Start Date</p>
                  <p className="text-sm">
                    {DateTime.fromISO(currentOrder.renting.startDate).toFormat(
                      "d MMMM yyyy"
                    )}
                  </p>
                </div>
              </div>
              <div className="rounded-xl h-auto w-px bg-slate-300">&nbsp;</div>
              <div className="flex items-center gap-1">
                <CalendarBlank className="fill-black" size={35} />
                <div className="flex flex-col gap-0">
                  <p className="text-slate-400 text-xs">Return Date</p>
                  <p className="text-sm">
                    {DateTime.fromISO(currentOrder.renting.endDate).toFormat(
                      "d MMMM yyyy"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className=" rounded-xl w-full border border-slate-200 "></div>

            {/* Package */}
            <p className="">พัสดุ</p>
            <div className="flex border-1 border-slate-300 rounded-md py-3 px-7 gap-5">
              <Image
                src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="flex flex-col">
                <p className="text-xs text-slate-400">หมายเลขพัสดุ</p>
                <p className="text-xs font-bold">ET 134 34 2343 234 4 xxx</p>
              </div>
            </div>

            <div className=" rounded-xl w-full border border-slate-200 "></div>

            {/* Paid */}
            <p className="">จ่ายเงินแล้ว</p>
            <div className="flex flex-col space-y-2">
              <div className="w-full grid grid-row-1 grid-flow-col justify-items-stretch text-slate-400 text-xs">
                <div className="justify-self-start">Subtotal</div>
                <div className="justify-self-end">
                  {currentOrder.renting.price.rent}
                </div>
              </div>
              <div className="w-full grid grid-row-1 grid-flow-col justify-items-stretch text-slate-400 text-xs">
                <div className="justify-self-start">ค่ามัดจำ</div>
                <div className="justify-self-end">
                  {currentOrder.renting.price.deposit}
                </div>
              </div>
              <div className="w-full grid grid-row-1 grid-flow-col justify-items-stretch">
                <div className="justify-self-start">Total</div>
                <div className="justify-self-end">
                  {currentOrder.renting.price.rent +
                    currentOrder.renting.price.deposit}
                </div>
              </div>
            </div>
            <div className=" rounded-xl w-full border border-slate-200 "></div>

            {/* More Detail */}
            <div className="py-3 px-5 bg-slate-200 rounded-md mb-3">
              <p className="text-base font-bold">More Detail</p>
              <span className="text-sm">ไปที่หน้า </span>
              <span className="text-sm underline underline-offset-2">
                รายละเอียดสินค้า
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* return button */}
      <div className="bg-white py-5 border-t-2 border-slate-200 sticky bottom-0 z-50">
        <ReturnSheet order={currentOrder} />
      </div>
    </>
  );
};

interface Props {
  index: number;
}

const StatusBar: React.FC<Props> = ({ index }) => {
  const icons = [
    {
      icon: (
        <Package
          className={index >= 1 ? "fill-green" : "fill-slate-400"}
          size={27}
        />
      ),
      filled: index > 1,
    },
    {
      icon: (
        <Truck
          className={index >= 2 ? "fill-green" : "fill-slate-400"}
          size={27}
        />
      ),
      filled: index > 2,
    },
    {
      icon: (
        <CheckCircle
          className={index >= 3 ? "fill-green" : "fill-slate-400"}
          size={27}
        />
      ),
      filled: index > 3,
    },
    {
      icon: (
        <ArrowsClockwise
          className={index >= 4 ? "fill-green" : "fill-slate-400"}
          size={27}
        />
      ),
      filled: index > 4,
    },
    {
      icon: (
        <Clipboard
          className={index >= 5 ? "fill-green" : "fill-slate-400"}
          size={27}
        />
      ),
      filled: index > 5,
    },
  ];

  return (
    <div className="bg-slate-100 rounded-md flex px-6 py-2 gap-2 justify-center items-center">
      {icons.map(({ icon, filled }, i) => (
        <React.Fragment key={i}>
          {icon}
          {i < icons.length - 1 && (
            <div
              className={`rounded-xl border-1 w-1/12 h-0 ${
                filled ? "border-green" : "border-slate-400"
              } justify-center`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};


export default OrderDetail;
