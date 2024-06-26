import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Checking = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();

  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-1">Checking</h1>
        <p className="mb-2">สินค้าที่อยู่ระหว่างการยืนยันจากร้านค้า</p>
        {myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.CHECKING).length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.CHECKING)
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
          : (
            <div className="flex flex-col items-center gap-2 pt-20">
          <Image src="/checking.svg" alt="" width={175} height={175} className="ml-2 opacity-75"/>
          <div className="text-slate-400 text-sm">ไม่พบสินค้าที่อยู่ระหว่างการยืนยันจากร้านค้า</div>
          </div>
          )}
      </div>
    </>
  );
};
  
export default Checking;