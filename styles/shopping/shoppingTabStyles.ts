import { SxProps, Theme } from "@mui/material";

export const ShoppingTabStyle: Record<string, SxProps<Theme> | undefined> = {
  tabStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      minWidth: 100,
      width: 100,
      height: 80,
      color: "black",
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        color: "#4CC764",
      },
      "&.Mui-selected": {
        minWidth: 110,
        width: 110,
        height: 80,
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
