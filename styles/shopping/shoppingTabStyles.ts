"use client";
import { SxProps, Theme } from "@mui/material";

export const ShoppingTabStyle: Record<string, SxProps<Theme> | undefined> = {
  tabStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      minWidth: 60,
      width: 60,
      height: 30,
      minHeight: 60,
      color: "black",
      transition: "color 0.2s ease-in-out",
      fontSize: "9px",
      opacity: "70%",
      "&.Mui-selected": {
        minWidth: 50,
        width: 50,
        height: 30,
        minHeight: 60,
        color: "white",
        backgroundColor: "#40C090",
        borderRadius: "8px",
        border: "2px solid #40C090",
        opacity: "100%",
      },
    },
  },
  indicatorStyle: {
    backgroundColor: "transparent",
  },
};
