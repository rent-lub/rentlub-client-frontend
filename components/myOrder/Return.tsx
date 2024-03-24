import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";

const Return= ({}) => {

    return (
      <>
          <div className="mx-5">
              <h1 className="font-medium text-xl mb-3">Going Back</h1>
              <p className="mb-2">ครบกำหนดคืน</p>
              <MyOrderCard />
              <div className="mb-2 rounded-xl w-full border border-slate-200 "></div>
              <p className="mb-2">กำลังส่งคืนและรอยืนยัน</p>
              <p className="text-slate-400 text-sm">ไม่มี</p>
          </div>
      </>
    );
  };
  
  export default Return;