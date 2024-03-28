import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";

const History = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
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
                  <a href="/orderDetail/">
                    <MyOrderCard rentItem={item} />
                  </a>
                </React.Fragment>
              ))
          : null}
      </div>
    </>
  );
};
  
  export default History;