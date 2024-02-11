import { SxProps, Theme } from "@mui/material";

export const ShoppingTabStyle: Record<string, SxProps<Theme> | undefined> = {
  tabStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      minWidth: 70,
      width: 70,
      height: 60,
      color: "black",
      transition: "color 0.2s ease-in-out",
      "&.Mui-selected": {
        minWidth: 70,
        width: 70,
        height: 60,
        color: "white",
        backgroundColor: "#4CC764",
        borderRadius: "8px",
        border: "2px solid #4CC764",
      },
    },
  },
  indicatorStyle: {
    backgroundColor: "transparent",
  },
};
