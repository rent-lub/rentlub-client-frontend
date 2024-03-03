"use client";

import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ShoppingTabStyle } from "~/styles/shopping/shoppingTabStyles";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { SortAscending } from "@phosphor-icons/react/dist/ssr";
import ProductCard from "./productCard";
import { buildIcon } from "~/components/shoppingCatIcon";

interface tabProps {
  onChange?: (selected: ShoppingCatEnum) => void;
}

export default function ShoppingTab(props: tabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="grid grid-cols-1">
      <Box
        sx={{
          width: "auto",
          bgcolor: "background.paper",
          paddingTop: "15px",
          paddingRight: "12px",
        }}
      >
        <div className="grid grid-cols-5 pl-5 divide-x gap-x-4">
          <div className="border-solid border-2 rounded-lg flex flex-col text-black items-center justify-center text-sm">
            <SortAscending size={20} />
            <p className="text-xs line-clamp-2 text-center px-0 flex items-center justify-center">
              SORT
            </p>
          </div>
          <div className="col-span-4 pl-4 gap-x-6">
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons={false}
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
              TabIndicatorProps={{ sx: ShoppingTabStyle.indicatorStyle }}
              sx={ShoppingTabStyle.tabStyle}
            >
              {Object.values(ShoppingCatEnum).map((value) => {
                return (
                  <Tab
                    key={value}
                    label={value}
                    icon={buildIcon(value)}
                    className="text-xs line-clamp-2 text-center px-0 flex items-center justify-center"
                  />
                );
              })}
            </Tabs>
          </div>
        </div>
      </Box>
    </div>
  );
}
