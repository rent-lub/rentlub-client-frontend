"use client";
import React from 'react';
import { useState } from "react";
import Image from "next/image";
import {Textarea} from "@nextui-org/input";
import { CalendarBlank,Package,Truck,CheckCircle,ArrowsClockwise,Clipboard} from "@phosphor-icons/react/dist/ssr";
import ImageCarousel from '~/components/shoppingDetail/imageCarousel';
import Overlay from '~/components/orderDetail/overlay';
import ReturnButton from '~/components/orderDetail/ReturnSheet';
import ReturnSheet from '~/components/orderDetail/ReturnSheet';

const OrderDetail = () => {

      return (
        <>
        {/* carousal */}
        <div className='bg-white h-80 min-w-full'>
          <ImageCarousel
            images={[
              "https://cdn.discordapp.com/attachments/1175812632440229951/1221125295159902288/1.png?ex=6611708d&is=65fefb8d&hm=889b779daab2c4c74c3eb67e3feb94d14d4764da3b06fa61bd04d93be0ae1960&",
              "https://cdn.discordapp.com/attachments/1175812632440229951/1221125295428468826/2.png?ex=6611708d&is=65fefb8d&hm=acb6805223b5b9a99b64044198ce0c00de5d57d3d441f72a5c4cbabb0abd2ef3&",
              "https://cdn.discordapp.com/attachments/1175812632440229951/1221125295759822848/3.png?ex=6611708d&is=65fefb8d&hm=4cf169b0bde0997f3980d6b396428411d1dfe93afd1f12f009a3a97e0f1baf50&",
              "https://cdn.discordapp.com/attachments/1175812632440229951/1221125296137175244/4.png?ex=6611708e&is=65fefb8e&hm=09deb493b50be7f380c6f50fc9486433bd6cadb07448f5abea26b77fec38b1cc&",
              "https://cdn.discordapp.com/attachments/1175812632440229951/1221125296451878962/5.png?ex=6611708e&is=65fefb8e&hm=c7a9b8807bfffeff5b58b4c93d26527939e8772bcf37291bbefb923820c8ece7&",
            ]}
            width={320}
            height={320}
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
                    <Package className="fill-green" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-green justify-center "></div>
                    <Truck className="fill-green" size={27} />
                    <div className="rounded-xl border-1 w-1/12 h-0 border-green justify-center "></div>
                    <CheckCircle className="fill-green" size={27} />
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
                <div className='py-3 px-5 bg-slate-200 rounded-md mb-3'>
                  <p className='text-base font-bold'>More Detail</p>
                  <span className='text-sm'>ไปที่หน้า </span>
                  <span className='text-sm underline underline-offset-2'>รายละเอียดสินค้า</span>
                </div>
            </div>

            {/* return button */}
            <div className='bg-white py-5 border-t-2 border-slate-200 sticky bottom-0'>
              <ReturnSheet/>
            </div>
        </div>
        </>
      );
    };
    
  export default OrderDetail;
  