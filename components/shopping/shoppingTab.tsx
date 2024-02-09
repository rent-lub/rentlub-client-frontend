"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ShoppingTabStyle } from "~/styles/shopping/shoppingTabStyles";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { Dress } from "@phosphor-icons/react/dist/ssr/Dress";
import {
  Books,
  Barbell,
  Heartbeat,
  Headphones,
  SuitcaseRolling,
  HouseLine,
  Package,
  Car,
  Television,
  SortAscending,
} from "@phosphor-icons/react/dist/ssr";

interface tabProps {
  onChange?: (selected: ShoppingCatEnum) => void;
}

export default function ShoppingTab(props: tabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const buildIcon = (cat: ShoppingCatEnum) => {
    switch (cat) {
      case ShoppingCatEnum.Fashion:
        return <Dress size={28} />;
      case ShoppingCatEnum.Book:
        return <Books size={28} />;
      case ShoppingCatEnum.Sport:
        return <Barbell size={28} />;
      case ShoppingCatEnum.HealthAndBeauty:
        return <Heartbeat size={28} />;
      case ShoppingCatEnum.ItGadget:
        return <Headphones size={28} />;
      case ShoppingCatEnum.Travel:
        return <SuitcaseRolling size={28} />;
      case ShoppingCatEnum.HomeAndGarden:
        return <HouseLine size={28} />;
      case ShoppingCatEnum.All:
        return <Package size={28} />;
      case ShoppingCatEnum.Vehicle:
        return <Car size={28} />;
      case ShoppingCatEnum.Electric:
        return <Television size={28} />;
    }
  };

  return (
    <Box
      sx={{ width: "auto", bgcolor: "background.paper", paddingTop: "15px" }}
    >
      <div className="grid grid-cols-5 pl-5 divide-x gap-x-4">
        <div className="border-solid border-2 rounded-lg flex flex-col text-black items-center justify-center text-sm">
          <SortAscending size={28} />
          <p className="">SORT</p>
        </div>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons={false}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{ sx: ShoppingTabStyle.indicatorStyle }}
          sx={ShoppingTabStyle.tabStyle}
          className="col-span-4 pl-4"
        >
          {Object.values(ShoppingCatEnum).map((value) => {
            return <Tab key={value} label={value} icon={buildIcon(value)} />;
          })}
        </Tabs>
      </div>
    </Box>
  );
}
