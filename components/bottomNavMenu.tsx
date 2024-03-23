"use client";

import { Tab, Tabs } from "@mui/material";
import {
  Dress,
  ShoppingBag,
  Heart,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import { ShoppingTabStyle } from "~/styles/shopping/shoppingTabStyles";
import { BottomNavMenuStyles } from "~/styles/bottomNavMenuStyles";
import { Avatar } from "@nextui-org/avatar";
import {
  getUserDisplayName,
  getUserId,
  getUserProfileImage,
} from "~/services/liffService";
import { useRouter } from "next/navigation";
import { useAppSelector } from "~/lib/hooks";

interface LIFFProfile {
  id: string | null;
  profileURL: string | null;
  userToken: string | null;
  displayName: string | null;
  accessToken: string | null;
}

const BottomNavMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );

  const router = useRouter();

  return (
    <>
      <div className="w-full bg-white  drop-shadow-md h-16 text-black flex justify-center items-center pt-2 pb-6">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons={false}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{ sx: ShoppingTabStyle.indicatorStyle }}
          sx={BottomNavMenuStyles.bottomNavMenuStyle}
        >
          <Tab
            key={0}
            label={"Shop"}
            icon={<ShoppingBag size={20} />}
            sx={{ fontSize: 12 }}
          />
          <Tab
            key={1}
            label={"Wishlist"}
            icon={<Heart size={20} />}
            sx={{ fontSize: 12 }}
          />
          <Tab
            key={2}
            label={"Order"}
            icon={<Package size={20} />}
            sx={{ fontSize: 12 }}
          />
          <Tab
            key={3}
            label={"Me"}
            sx={{ fontSize: 12 }}
            icon={
              <Avatar
                src={liffProfile.profileURL ?? ""}
                name={liffProfile.displayName ?? ""}
                className=" w-5 h-5"
              />
            }
            onClick={(e) => {
              e.preventDefault();
              router.push("/kyc/");
            }}
          />
        </Tabs>
      </div>
    </>
  );
};

export default BottomNavMenu;
