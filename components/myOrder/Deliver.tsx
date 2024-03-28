import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";

const Deliver = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">On My Way</h1>
        <p className="mb-2">ได้รับสินค้าแล้ว</p>

        {myOrder.allOrder?.length > 0 ? (
          myOrder.allOrder
            .filter((item) => item.renting.status === RentingStatus.DELIVERED)
            .map((item) => (
              <React.Fragment key={item.renting._id}>
                <a href="/orderDetail/">
                  <MyOrderCard rentItem={item} />
                </a>
              </React.Fragment>
            ))
        ) : (
          <div>ไม่พบสินค้าที่ได้รับแล้ว</div>
        )}

        <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
        <p className="mb-2">สินค้ากำลังส่ง</p>
        <p className="text-slate-400 text-sm">
          {myOrder.allOrder?.length > 0 ? (
            myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.SHIPPING)
              .map((item) => (
                <React.Fragment key={item.renting._id}>
                  <a href="/orderDetail/">
                    <MyOrderCard rentItem={item} />
                  </a>
                </React.Fragment>
              ))
          ) : (
            <div>ไม่พบสินค้าที่กำลังจัดส่ง</div>
          )}
        </p>
      </div>
    </>
  );
};
  
  export default Deliver;