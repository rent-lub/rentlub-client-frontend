"use client";

import { Avatar, Tab, Tabs } from "@mui/material";
import {
  Dress,
  ShoppingBag,
  Heart,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import React from "react";
import { ShoppingTabStyle } from "~/styles/shopping/shoppingTabStyles";
import { BottomNavMenuStyles } from "~/styles/bottomNavMenuStyles";

const BottomNavMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="w-full bg-white rounded-3xl drop-shadow-md h-20 text-black flex justify-center items-center">
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
            icon={<ShoppingBag size={26} />}
            sx={{ fontSize: 14 }}
          />
          <Tab
            key={1}
            label={"Wishlist"}
            icon={<Heart size={26} />}
            sx={{ fontSize: 14 }}
          />
          <Tab
            key={2}
            label={"Order"}
            icon={<Package size={26} />}
            sx={{ fontSize: 14 }}
          />
          <Tab
            key={3}
            label={"Me"}
            sx={{ fontSize: 14 }}
            icon={
              <Avatar
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{
                  width: 24,
                  height: 24,
                  fontSize: 14,
                  border: value === 3 ? "2px solid #4CC764" : "",
                }}
              />
            }
          />
        </Tabs>
      </div>
    </>
  );
};

export default BottomNavMenu;
