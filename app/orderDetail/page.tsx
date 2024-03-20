"use client";
import React from 'react';
import { useState } from "react";
import Image from "next/image";
import {Textarea} from "@nextui-org/input";
import { CalendarBlank,Package,Truck,CheckCircle,ArrowsClockwise,Clipboard} from "@phosphor-icons/react/dist/ssr";

const OrderDetail = () => {
    
      return (
        <>
        {/* <div className='w-full h-80 '>
            <Image
                    src="https://www.thaidro.com/cdn/shop/products/13_957454a5-871d-469a-9cbc-481dcc478a81.jpg?v=1644470765"
                    alt={""}
                    className="w-100% h-100% object-cover h-auto"
            />
        </div> */}

        {/* carousal */}
        <div className='bg-slate-200 w-full h-80 text-black grid place-content-center'>รูป</div>
        {/* detail */}
        <div className='bg-white h-screen min-w-full text-black px-5'> 
            <div className='flex flex-col gap-4 pt-5'>

                {/* product name */}
                <p className="line-clamp-2">ชุดกี่เพ้าทันสมัย ชุดกี่เพ้าประยุกต์แบบมีแขน เก๋ๆ สวยหรูอินเทรนด์แฟชั่น ไม่ซ้ำใคร</p>
                <div className=" rounded-xl w-full border border-slate-200 "></div>

                {/* order status */}
                <div className='flex flex-col gap-1'>
                  <p className="mb-2">สถานะสินค้า</p>
                  <p className="text-sm">ได้รับสินค้าแล้ว</p>
                  <div className="bg-slate-100 rounded-md flex px-6 py-2 gap-2 justify-center items-center">
                    <Package className="fill-lime-500" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-lime-500 justify-center "></div>
                    <Truck className="fill-lime-500" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-lime-500 justify-center "></div>
                    <CheckCircle className="fill-lime-500" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-slate-400 justify-center "></div>
                    <ArrowsClockwise className="fill-slate-400" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-slate-400 justify-center "></div>
                    <Clipboard className="fill-slate-400" size={27} />
                  </div>
                </div>
                <div className=" rounded-xl w-full border border-slate-200 "></div>

                {/* date of reservation */}
                <p className="">วันที่จอง</p>
                <div className="flex justify-center items-center gap-5">
                  <div className="flex items-center gap-1">
                      <CalendarBlank className="fill-black" size={35} />
                      <div className="flex flex-col gap-0">
                          <p className="text-slate-400 text-xs">Start Date</p>
                          <p className="text-sm">Mon 10 Feb</p>
                      </div>
                  </div>
                  <div className="rounded-xl h-auto w-px bg-slate-300">&nbsp;</div>
                  <div className="flex items-center gap-1">
                      <CalendarBlank className="fill-black" size={35} />
                      <div className="flex flex-col gap-0">
                          <p className="text-slate-400 text-xs">Return Date</p>
                          <p className="text-sm">Fri 14 Feb</p>
                      </div>
                  </div>
                </div>
                <div className=" rounded-xl w-full border border-slate-200 "></div>

                {/* Package */}
                <p className=''>พัสดุ</p>
                <div className='flex border-1 border-slate-300 rounded-md py-3 px-7 gap-5'>
                  <Image src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png" alt="" width={50} height={50} />
                  <div className='flex flex-col'>
                    <p className='text-xs text-slate-400'>หมายเลขพัสดุ</p>
                    <p className='text-xs font-bold'>ET 134 34  2343 234  4 xxx</p>
                  </div>
                </div>
                <Textarea minRows={1} label="ADDRESS" placeholder="" className=""/>
                <div className=" rounded-xl w-full border border-slate-200 "></div>

                {/*  */}

            </div>
        </div>
        </>
      );
    };
    
  export default OrderDetail;
  