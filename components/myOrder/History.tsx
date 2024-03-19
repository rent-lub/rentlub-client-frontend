import React, { useState } from "react";
import MyOrderCard from "./MyOrderCard";

const History= ({}) => {

    return (
      <>
          <div className="mx-5">
              <h1 className="font-medium text-xl mb-3">History</h1>
              <p className="mb-2">ประวัติ</p>
              <MyOrderCard />
          </div>
      </>
    );
  };
  
  export default History;