"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import Deliver from "~/components/myOrder/Deliver";
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
            className="justify-center"
            key={"underlined"}
            variant={"underlined"}
            aria-label="Tabs variants"
          >
            <Tab
              key="deliver"
              title="Deliver"
              className="flex flex-col text-black"
            >
              <Deliver />
            </Tab>
            <Tab
              key="return"
              title="Return"
              className="flex flex-col text-black"
            >
              <Return />
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
