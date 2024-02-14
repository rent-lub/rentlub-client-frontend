"use client";

import { SxProps, Theme } from "@mui/material";

export const BottomNavMenuStyles: Record<string, SxProps<Theme> | undefined> = {
  bottomNavMenuStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      minWidth: 80,
      width: 80,
      height: 60,
      color: "black",
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        color: "#40C090",
      },
      "&.Mui-selected": {
        minWidth: 80,
        width: 80,
        height: 60,
        color: "#40C090",
      },
    },
  },
};
