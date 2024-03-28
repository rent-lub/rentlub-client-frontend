import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { useRouter, useSearchParams } from "next/navigation";

const Delivered = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">Delivered</h1>
        <p className="mb-2">สินค้าที่ต้องได้รับ</p>
        {myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.SHIPPING).length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.SHIPPING)
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
            <div className=" text-slate-400 text-sm">ไม่พบสินค้าที่ต้องได้รับ</div>
          )}
      </div>
    </>
  );
};
  
export default Delivered;