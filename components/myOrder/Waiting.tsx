import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";

const Waiting = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">Waiting For Payment</h1>
        <p className="mb-2">สินค้ารอชำระเงิน</p>

        {myOrder.allOrder?.length > 0 ? (
          myOrder.allOrder
            .filter((item) => item.renting.status === RentingStatus.WAITING)
            .map((item) => (
              <React.Fragment key={item.renting._id}>
                <a href="/orderDetail/">
                  <MyOrderCard rentItem={item} />
                </a>
              </React.Fragment>
            ))
        ) : (
          <div className="text-slate-400 text-sm">ไม่พบสินค้าที่รอชำระเงิน</div>
        )}
      </div>
    </>
  );
};
  
  export default Waiting;