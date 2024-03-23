"use client";
import React from 'react';
import { useState } from "react";
import Image from "next/image";
import {Textarea} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";
import { CalendarBlank,Package,Truck,CheckCircle,ArrowsClockwise,Clipboard} from "@phosphor-icons/react/dist/ssr";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Carousal from '~/components/orderDetail/carousal';
import ImageCarousel from '~/components/shoppingDetail/imageCarousel';

const OrderDetail = () => {
    
      return (
        <>
        {/* carousal */}
        <div className='bg-white h-screen min-w-full text-black'>
          <ImageCarousel
            images={[
              "https://www.thaidro.com/cdn/shop/products/13_957454a5-871d-469a-9cbc-481dcc478a81.jpg?v=1644470765",
              "https://www.thaidro.com/cdn/shop/products/18_b48b55fb-1028-4981-a280-b805e648d3d9.jpg?v=1644470765",
              "https://www.thaidro.com/cdn/shop/products/02_5ed79819-933f-47c9-890a-0b1f665fd9d4.jpg?v=1644470765",
              "https://www.thaidro.com/cdn/shop/products/04_a946c7c8-a585-490c-9766-1417d8619b9b.jpg?v=1644470765",
              "https://www.thaidro.com/cdn/shop/products/05_da681541-e3e8-4b91-bffe-6966f0f14c0b.jpg?v=1644470765",
            ]}
          />
        </div>
        {/* detail */}
        <div className='bg-white h-screen min-w-full text-black'> 
            <div className='flex flex-col gap-4 pt-5 px-5'>

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

                {/* Paid */}
                <p className=''>จ่ายเงินแล้ว</p>
                <div className='flex flex-col space-y-2'>
                  <div className='w-full grid grid-row-1 grid-flow-col justify-items-stretch text-slate-400 text-xs'>
                    <div className='justify-self-start'>Subtotal</div>
                    <div className='justify-self-end'>2,500</div>
                  </div>
                  <div className='w-full grid grid-row-1 grid-flow-col justify-items-stretch text-slate-400 text-xs'>
                    <div className='justify-self-start'>Shipping fee</div>
                    <div className='justify-self-end'>32</div>
                  </div>
                  <div className='w-full grid grid-row-1 grid-flow-col justify-items-stretch text-slate-400 text-xs'>
                    <div className='justify-self-start'>ค่ามัดจำ</div>
                    <div className='justify-self-end'>1,200</div>
                  </div>
                  <div className='w-full grid grid-row-1 grid-flow-col justify-items-stretch'>
                    <div className='justify-self-start'>Total</div>
                    <div className='justify-self-end'>3,732</div>
                  </div>
                </div>
                <div className=" rounded-xl w-full border border-slate-200 "></div>

                {/* More Detail */}
                <div className='py-3 px-5 bg-slate-200 rounded-md'>
                  <p className='text-base font-bold'>More Detail</p>
                  <span className='text-sm'>ไปที่หน้า </span>
                  <span className='text-sm underline underline-offset-2'>รายละเอียดสินค้า</span>
                </div>
            </div>
            <div className="my-5 w-full border border-slate-200 "></div>

            {/* return button */}
            <div className='px-5 pb-5'>
              <Button className='w-full bg-lime-500 text-white'>Return</Button>
            </div>
        </div>
        </>
      );
    };
    
  export default OrderDetail;
  