import React, { useEffect, useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { DateTime } from "luxon";

const Return = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);

  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">Going Back</h1>
        <p className="mb-2">ครบกำหนดคืน</p>
        <a href="/orderDetail/">
          {myOrder.allOrder?.length > 0
            ? myOrder.allOrder
                .filter(
                  (item) =>
                    item.renting.status === RentingStatus.DELIVERED &&
                    Math.abs(
                      DateTime.now().diff(
                        DateTime.fromISO(item.renting.endDate),
                        "days"
                      ).days
                    ) >= 1
                )
                .map((item) => (
                  <React.Fragment key={item.renting._id}>
                    <a href="/orderDetail/">
                      <MyOrderCard rentItem={item} />
                    </a>
                  </React.Fragment>
                ))
            : null}
        </a>
        <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
        <p className="mb-2">กำลังส่งคืนและรอยืนยัน</p>
        {myOrder.allOrder?.length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.CHECKING)
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

export default Return;
