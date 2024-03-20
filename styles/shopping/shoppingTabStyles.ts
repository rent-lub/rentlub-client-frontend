"use client";
import { SxProps, Theme } from "@mui/material";

export const ShoppingTabStyle: Record<string, SxProps<Theme> | undefined> = {
  tabStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      minWidth: 40,
      width: 40,
      height: 45,
      minHeight: 45,
      color: "black",
      transition: "color 0.2s ease-in-out",
      fontSize: "8px",
      opacity: "70%",
      "&.Mui-selected": {
        minWidth: 40,
        width: 40,
        height: 45,
        minHeight: 45,
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
