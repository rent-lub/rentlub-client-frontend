"use client";
import React from 'react';
import { useState } from "react";
import Deliver from '~/components/myOrder/Deliver';
import {Tabs, Tab} from "@nextui-org/tabs";
import BottomNavMenu from '~/components/bottomNavMenu';
import Return from '~/components/myOrder/Return';
import History from '~/components/myOrder/History';

const MyOrder = () => {
  const [selected, setSelected] = useState("deliver");
  
    return (
      <>
      <div className='bg-white h-screen min-w-full mt-5'>
        <div className="flex flex-col gap-4">
          <Tabs className='justify-center' key={"underlined"} variant={"underlined"} aria-label="Tabs variants">
            <Tab key="deliver" title="Deliver" className='flex flex-col text-black'>
              <Deliver/>
            </Tab>
            <Tab key="return" title="Return" className='flex flex-col text-black'>
              <Return/>
            </Tab>
            <Tab key="history" title="History"className='flex flex-col text-black'>
              <History/>
            </Tab>
          </Tabs>
        </div>
        <div className="absolute bottom-2 left-8 right-8 flex-grow-0">
          <BottomNavMenu />
        </div>
      </div>
      </>
    );
  };
  
export default MyOrder;
  