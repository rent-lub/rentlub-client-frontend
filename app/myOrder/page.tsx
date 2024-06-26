"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Shipping from "~/components/myOrder/Shipping";
import { Tabs, Tab } from "@nextui-org/tabs";
import BottomNavMenu from "~/components/bottomNavMenu";
import Return from "~/components/myOrder/Return";
import History from "~/components/myOrder/History";
import { useDispatch } from "react-redux";
import { AppDispatch } from "~/lib/store";
import { LIFFProfile } from "~/lib/features/LIFFProfileSlice";
import { useAppSelector } from "~/lib/hooks";
import { getAllMyOrder } from "~/services/rentService";
import { setAllMyOrder } from "~/lib/features/myOrderSlice";
import Due from "~/components/myOrder/Due";
import Prepare from "~/components/myOrder/Prepare";
import Delivered from "~/components/myOrder/Delivered";
import Checking from "~/components/myOrder/Checking";

const MyOrder = ({ params }: { params: { tab_index: string } }) => {
  const [selected, setSelected] = useState("deliver");

  const dispatch = useDispatch<AppDispatch>();
  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );

  useEffect(() => {
    const fetchMyOrder = async () => {
      const result = await getAllMyOrder(liffProfile.id!);
      dispatch(setAllMyOrder(result ?? []));
    };

    if (liffProfile.id) {
    fetchMyOrder();
    }
  }, [dispatch, liffProfile.id]);

  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col overflow-y-hidden">
        <div className="flex flex-col gap-4 flex-grow">
          <Tabs
            className="justify-center mt-5 ml-5"
            key={"underlined"}
            variant={"underlined"}
            aria-label="Tabs variants"
          >
            <Tab
              key="prepare"
              title="Prepare"
              className="flex flex-col text-black"
            >
              <Prepare />
            </Tab>
            <Tab
              key="shipping"
              title="Shipping"
              className="flex flex-col text-black"
            >
              <Shipping />
            </Tab>
            <Tab
              key="delivered"
              title="Delivered"
              className="flex flex-col text-black"
            >
              <Delivered />
            </Tab>
            <Tab
              key="due"
              title="Due"
              className="flex flex-col text-black"
            >
              <Due />
            </Tab>
            <Tab
              key="returned"
              title="Returned"
              className="flex flex-col text-black"
            >
              <Return />
            </Tab>
            <Tab
              key="checking"
              title="Checking"
              className="flex flex-col text-black"
            >
              <Checking />
            </Tab>
            <Tab
              key="history"
              title="History"
              className="flex flex-col text-black"
            >
              <History />
            </Tab>
          </Tabs>
        </div>
        <div className="flex-grow-0">
          <BottomNavMenu />
        </div>
      </div>
    </>
  );
};

export default MyOrder;
