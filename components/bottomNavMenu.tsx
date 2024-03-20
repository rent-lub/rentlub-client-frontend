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

const BottomNavMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const image = await getUserProfileImage();
      const id = await getUserId();
      const name = await getUserDisplayName();

      setProfileImage(image);
      setUserId(id);
      setDisplayName(name);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="w-full bg-white  drop-shadow-md h-12 text-black flex justify-center items-center">
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
            icon={<Avatar src={profileImage ?? ""} name={displayName ?? ""} />}
          />
        </Tabs>
      </div>
    </>
  );
};

export default BottomNavMenu;
