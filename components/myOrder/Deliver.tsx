import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentineEnum";

const Deliver = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">On My Way</h1>
        <p className="mb-2">ได้รับสินค้าแล้ว</p>
        <a href="/orderDetail/">
          {myOrder.allOrder?.map((item) => {
            return item.renting.status === RentingStatus.DELIVERED ? (
              <React.Fragment key={item.renting._id}>
                <MyOrderCard rentItem={item} />
              </React.Fragment>
            ) : (
              <p>ไม่พบสินค้าที่ได้รับแล้ว</p>
            );
          })}
        </a>
        <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
        <p className="mb-2">สินค้ากำลังส่ง</p>
        <p className="text-slate-400 text-sm">ไม่มี</p>
      </div>
    </>
  );
};
  
  export default Deliver;