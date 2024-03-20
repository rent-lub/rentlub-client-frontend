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
  getUserDisplayName,
  getUserId,
  getUserProfileImage,
} from "~/services/liffService";

const Shopping = () => {
  const [title, setTitle] = useState("");
  const posts: Array<{ id: number; title: string; description: string }> =
    useAppSelector((selector) => selector.posts);
  const dispatch = useAppDispatch();
  const handleRemovePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col overflow-y-hidden">
        <div className="px-5 py-3 flex-grow-0">
          <HeaderFilterButton />
        </div>
        <div className="flex flex-col flex-grow h-64 gap-y-2">
          <ShoppingTab />
          <div className="grid grid-cols-2 gap-x-6 px-4 overflow-y-auto">
            <ProductCard productCat={ShoppingCatEnum.Fashion} />
            <ProductCard productCat={ShoppingCatEnum.Fashion} />
            <ProductCard productCat={ShoppingCatEnum.Fashion} />
            <ProductCard productCat={ShoppingCatEnum.Fashion} />
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
