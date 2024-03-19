"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MyOrderCard= ({}) => {

  return (
    <>
        <div className="flex border-2 border-slate-200 rounded-xl justify-center mb-3">
            <div className="w-1/4">
                <Image
                src="https://www.thaidro.com/cdn/shop/products/13_957454a5-871d-469a-9cbc-481dcc478a81.jpg?v=1644470765"
                alt={""}
                width={100}
                height={100}
                className="w-full object-none rounded-l-xl"
                />
            </div>
            <div className="w-3/4 px-3 flex flex-col text-sm space-y-1.5 justify-center">
                <p className="line-clamp-2">ชุดกี่เพ้าทันสมัย ชุดกี่เพ้าประยุกต์แบบมีแขน เก๋ๆ สวยหรูอินเทรนด์แฟชั่น ไม่ซ้ำใคร</p>
                <p className="font-bold">Mon 10 Feb - Fri 14 Feb</p>
            </div>
        </div>
    </>
  );
};

export default MyOrderCard;
