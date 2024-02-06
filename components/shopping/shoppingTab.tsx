import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ShoppingTabStyle } from "~/styles/shoppingTabStyles";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";

interface tabProps {
  onChange?: (selected: ShoppingCatEnum) => void;
}

export default function ShoppingTab(props: tabProps) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "auto", bgcolor: "background.paper", paddingTop: "15px" }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        allowScrollButtonsMobile
        aria-label="scrollable force tabs example"
        TabIndicatorProps={{ sx: ShoppingTabStyle.indicatorStyle }}
        sx={ShoppingTabStyle.tabStyle}
      >
        {Object.values(ShoppingCatEnum).map((value) => {
          return <Tab key={value} label={value} />;
        })}
      </Tabs>
    </Box>
  );
}
