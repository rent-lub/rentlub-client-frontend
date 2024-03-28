import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { useRouter, useSearchParams } from "next/navigation";

const History = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();

  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">History</h1>
        <p className="mb-2">ประวัติ</p>
        {myOrder.allOrder?.length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.VERIFIED)
              .map((item) => (
                <React.Fragment key={item.renting._id}>
                  <div
                    onClick={() => {
                      var index = myOrder.allOrder.indexOf(item);
                      rounter.push(`/orderDetail/${index}`);
                    }}
                  ></div>
                  <a href="/orderDetail/">
                  </a>
                </React.Fragment>
              ))
          :  (
            <div className="text-slate-400 text-sm">ตอนนี้ยังไม่มีสินค้าที่คุณเคยเช่า</div>
          )}
      </div>
    </>
  );
};
  
  export default History;