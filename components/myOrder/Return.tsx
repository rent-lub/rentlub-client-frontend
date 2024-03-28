import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";

const Return = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">Going Back</h1>
        <p className="mb-2">ครบกำหนดคืน</p>
        <a href="/orderDetail/">
          {myOrder.allOrder?.map((item) => {
            return (
              <React.Fragment key={item.renting._id}>
                <MyOrderCard rentItem={item} />
              </React.Fragment>
            );
          })}
        </a>
        <div className="my-5 rounded-xl w-full border border-slate-200 "></div>
        <p className="mb-2">กำลังส่งคืนและรอยืนยัน</p>
        <p className="text-slate-400 text-sm">ไม่มี</p>
      </div>
    </>
  );
};
  
  export default Return;