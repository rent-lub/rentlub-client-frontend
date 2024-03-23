"use client";

import { useEffect, useState } from "react";
import { addPost, deletePost } from "~/lib/features/postsSlice";

import React from "react";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { Avatar } from "@mui/material";
import ShoppingTab from "~/components/shopping/shoppingTab";
import HeaderFilterButton from "~/components/shopping/headerFilterButton";
import BottomNavMenu from "~/components/bottomNavMenu";
import ProductCard from "~/components/shopping/productCard";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import {
  getAccessToken,
  getUserDisplayName,
  getUserId,
  getUserProfileImage,
  getUserToken,
  useLiff,
} from "~/services/liffService";
import { setIsVerify, setLIFFProfile } from "~/lib/features/LIFFProfileSlice";
import { checkUserExist, createUser } from "~/services/userService";

const Shopping = () => {
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
      <div className="bg-white h-screen min-w-full flex flex-col overflow-y-hidden">
        <div className="px-5 pt-3 flex-grow-0">
          <HeaderFilterButton />
        </div>
        <div className="flex flex-col flex-grow h-64 gap-y-2">
          <ShoppingTab />
          <div className="grid grid-cols-2 gap-x-6 px-4 overflow-y-auto">
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
            <ProductCard productCat={ShoppingCatEnum.Jacket} />
          </div>
        </div>
        <div className="flex-grow-0">
          <BottomNavMenu />
        </div>
      </div>
    </>
  );
};

export default Shopping;
