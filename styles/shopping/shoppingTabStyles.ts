import { SxProps, Theme } from "@mui/material";

export const ShoppingTabStyle: Record<string, SxProps<Theme> | undefined> = {
  tabStyle: {
    "& .MuiButtonBase-root.MuiTab-root": {
      color: "black",
      transition: "color 0.2s ease-in-out",
      "&:hover": {
        color: "#4CC764",
      },
      "&.Mui-selected": {
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
