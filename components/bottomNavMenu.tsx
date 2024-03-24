"use client";

import { Tab, Tabs } from "@mui/material";
import {
  Dress,
  ShoppingBag,
  Heart,
  Package,
} from "@phosphor-icons/react/dist/ssr";
import React, { useEffect, useState } from "react";
import { ShoppingTabStyle } from "~/styles/shopping/shoppingTabStyles";
import { BottomNavMenuStyles } from "~/styles/bottomNavMenuStyles";
import { Avatar } from "@nextui-org/avatar";
import {
  getAccessToken,
  getUserDisplayName,
  getUserId,
  getUserProfileImage,
  getUserToken,
  useLiff,
} from "~/services/liffService";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { setLIFFProfile, setIsVerify } from "~/lib/features/LIFFProfileSlice";
import { checkUserExist, createUser } from "~/services/userService";

interface LIFFProfile {
  id: string | null;
  profileURL: string | null;
  userToken: string | null;
  displayName: string | null;
  accessToken: string | null;
}

const BottomNavMenu = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );

  const router = useRouter();

  const liff = useLiff();
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      if (liff) {
        const image = await getUserProfileImage();
        const id = await getUserId();
        const name = await getUserDisplayName();
        const userToken = await getUserToken();
        const userAccessToken = await getAccessToken();

        dispatch(
          setLIFFProfile({
            id: id,
            profileURL: image,
            userToken: userToken,
            displayName: name,
            accessToken: userAccessToken,
            isVerify: null,
          })
        );
        var userData = await checkUserExist(id ?? "");
        dispatch(setIsVerify(userData?.isVerified ?? false));
        if (!userData) {
          await createUser({
            name: name ?? id ?? "",
            lineId: id ?? "",
            type: "CUSTOMER",
          });
        }
      }
    }

    fetchData();
  });

  return (
    <>
      <div className="w-full bg-white  drop-shadow-md h-16 text-black flex justify-center items-center pt-2 pb-6">
        <Tabs
          value={value}
          onChange={handleChange}
          scrollButtons={false}
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
          TabIndicatorProps={{ sx: ShoppingTabStyle.indicatorStyle }}
          sx={BottomNavMenuStyles.bottomNavMenuStyle}
        >
          <Tab
            key={0}
            label={"Shop"}
            icon={<ShoppingBag size={20} />}
            sx={{ fontSize: 12 }}
          />
          <Tab
            key={1}
            label={"Wishlist"}
            icon={<Heart size={20} />}
            sx={{ fontSize: 12 }}
          />
          <Tab
            key={2}
            label={"Order"}
            icon={<Package size={20} />}
            sx={{ fontSize: 12 }}
            onClick={(e) => {
              e.preventDefault();
              router.push("/myOrder/");
            }}
          />
          <Tab
            key={3}
            label={"Me"}
            sx={{ fontSize: 12 }}
            icon={
              <Avatar
                src={liffProfile.profileURL ?? ""}
                name={liffProfile.displayName ?? ""}
                className=" w-5 h-5"
              />
            }
            onClick={(e) => {
              e.preventDefault();
              router.push("/kyc/");
            }}
          />
        </Tabs>
      </div>
    </>
  );
};

export default BottomNavMenu;
