"use client";

import { useState } from "react";
import { addPost, deletePost } from "~/lib/features/postsSlice";

import React from "react";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { Avatar } from "@mui/material";
import ShoppingTab from "~/components/shopping/shoppingTab";
import HeaderFilterButton from "~/components/shopping/headerFilterButton";
import BottomNavMenu from "~/components/bottomNavMenu";

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
      <div className="bg-white min-h-screen min-w-full py-14 relative">
        <div className="flex justify-start items-center px-5">
          <h3 className="text-black font-bold">SHOP</h3>
        </div>
        <div className="px-5 py-3">
          <HeaderFilterButton />
        </div>
        <ShoppingTab />
        <div className="absolute bottom-10 left-8 right-8">
          <BottomNavMenu />
        </div>
      </div>
    </>
  );
};

export default Shopping;
