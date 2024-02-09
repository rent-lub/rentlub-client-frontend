import { SxProps, Theme } from "@mui/material";

export const HeaderFilterStyles: Record<string, SxProps<Theme> | undefined> = {
  buttonStyle: {
    color: "#000000",
    backgroundColor: "#ffffff",
    "&:active": {
      backgroundColor: "transparent",
    },
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  buttonGroupStyle: {
    border: "solid 1px #ffffff",
    borderRadius: "15px",
  },
};
