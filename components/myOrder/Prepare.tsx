import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Prepare = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();

  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-1">Preparing To Ship</h1>
        <p className="mb-2">ร้านค้ากำลังเตรียมจัดส่ง</p>

        { myOrder.allOrder
            .filter((item) => item.renting.status === RentingStatus.PREPARE).length > 0 ? (
          myOrder.allOrder
            .filter((item) => item.renting.status === RentingStatus.PREPARE)
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
            <Image src="/Prepare.svg" alt="" width={150} height={150} className="opacity-65"/>
            <div className="text-slate-400 text-sm">ไม่พบสินค้าที่เตรียมจัดส่ง</div>
            </div>
        )}
      </div>
    </>
  );
};
  
export default Prepare;