"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CalendarBlank,Vault} from "@phosphor-icons/react/dist/ssr";
import {Input} from "@nextui-org/input";
import {Button, ButtonGroup} from "@nextui-org/button";

const Overlay= ({}) => {

  return (
    <>
    <div className="min-w-full bg-white rounded-t-3xl">
        <div className="p-5 flex flex-col gap-5 items-stretch font-bold">
            <p className="self-center">Return</p>
            <div className=" rounded-xl w-full border border-slate-200 "></div>
            <div className="flex justify-center items-center gap-10">
                <div className="flex items-center gap-2">
                    <CalendarBlank className="fill-black" size={35} />
                    <div className="flex flex-col gap-0">
                        <p className="text-slate-400 text-xs">Return Date</p>
                        <p className="text-sm">Fri 14 Feb</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <Vault className="fill-black" size={35} />
                    <div className="flex flex-col gap-0">
                        <p className="text-slate-400 text-xs">ค่ามัดจำ</p>
                        <p className="text-sm">1,200 บาท</p>
                    </div>
                </div>
            </div>
            <div className=" rounded-xl w-full border border-slate-200 "></div>
            <div className="flex flex-col gap-3 items-stretch">
                <p className=''>พัสดุ</p>
                <div className="flex gap-3 self-stretch">
                    <div className='flex border-2 border-green bg-green/25 rounded-md py-3 px-3 gap-5 items-center'>
                        <Image src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png" alt="" width={50} height={50} />
                        <p className='text-xs font-bold'>Thai Post</p>
                    </div>
                    <div className='flex border-2 border-slate-300 rounded-md py-3 px-3 gap-5 items-center'>
                        <Image src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png" alt="" width={50} height={50} />
                        <p className='text-xs font-bold'>Thai Post</p>
                    </div>
                </div>
                <Input type="หมายเลขพัสดุ" label="หมายเลขพัสดุ" />
            </div>
            <div className=" rounded-xl w-full border border-slate-200 "></div>
            <div className=''>
                  <p className='text-base font-bold'>ขอความช่วยเหลือ</p>
                  <span className='text-xs underline underline-offset-2'>ติดต่อเรา</span>
            </div>
        </div>
        <div className="w-full border border-slate-200 "></div>
            <div className='px-5 py-5'>
              <Button className='w-full bg-green text-white'>Done</Button>
            </div>
    </div>
    </>
  );
};

export default Overlay;
