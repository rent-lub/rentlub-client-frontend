import React, { useEffect, useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { DateTime } from "luxon";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Return = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();

  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-1">Going Back</h1>
        <p className="mb-2">สินค้าที่กำลังถูกส่งกลับคืนร้าน</p>
        {myOrder.allOrder.filter(
          (item) => item.renting.status === RentingStatus.RETURNED
        ).length > 0 ? (
          myOrder.allOrder
            .filter((item) => item.renting.status === RentingStatus.RETURNED)
            .map((item) => (
              <React.Fragment key={item.renting._id}>
                <div
                  onClick={() => {
                    var index = myOrder.allOrder.indexOf(item);
                    rounter.push(`/orderDetail/${index}`);
                  }}
                >
                  <MyOrderCard rentItem={item} />
                </div>
              </React.Fragment>
            ))
        ) : (
          <div className="flex flex-col items-center gap-2 pt-20">
            <Image
              src="/return.svg"
              alt=""
              width={200}
              height={200}
              className="opacity-65 mr-5"
            />
            <div className="text-slate-400 text-sm">
              ไม่พบสินค้าที่กำลังส่งกลับไปยังร้าน
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Return;
