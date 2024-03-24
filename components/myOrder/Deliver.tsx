import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";

const Deliver= ({}) => {

    return (
      <>
          <div className="mx-5">
              <h1 className="font-medium text-xl mb-3">On My Way</h1>
              <p className="mb-2">ได้รับสินค้าแล้ว</p>
              <a href="/orderDetail/">
                <MyOrderCard />
              </a> 
              <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
              <p className="mb-2">สินค้ากำลังส่ง</p>
              <p className="text-slate-400 text-sm">ไม่มี</p>
          </div>
      </>
    );
  };
  
  export default Deliver;