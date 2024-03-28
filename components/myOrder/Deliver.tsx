import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";
import { useAppSelector } from "~/lib/hooks";
import { RentingStatus } from "~/types/rentingEnum";
import { useRouter, useSearchParams } from "next/navigation";

const Deliver = ({}) => {
  const myOrder = useAppSelector((selector) => selector.myOrder);
  const rounter = useRouter();
  return (
    <>
      <div className="mx-5">
        <h1 className="font-medium text-xl mb-3">On My Way</h1>
        <p className="mb-2">ได้รับสินค้าแล้ว</p>
        {myOrder.allOrder?.length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.DELIVERED)
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
          : null}

        <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
        <p className="mb-2">สินค้ากำลังส่ง</p>
        {myOrder.allOrder?.length > 0
          ? myOrder.allOrder
              .filter((item) => item.renting.status === RentingStatus.SHIPPING)
              .map((item) => (
                <React.Fragment key={item.renting._id}>
                  <a href={`/orderDetail/${item}`}>
                    <MyOrderCard rentItem={item} />
                  </a>
                </React.Fragment>
              ))
          : null}
      </div>
    </>
  );
};
  
  export default Deliver;