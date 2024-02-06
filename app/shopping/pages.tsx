"use client";

import { useState } from "react";
import { addPost, deletePost } from "~/lib/features/postsSlice";

import React from "react";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { Avatar } from "@mui/material";
import ShoppingTab from "~/components/shopping/shoppingTab";

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
      <div className="bg-white min-h-screen min-w-full py-14">
        <div className="flex justify-between items-center px-12">
          <h3 className="text-black font-bold">SHOP</h3>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div>
        <ShoppingTab />
      </div>
    </>
  );
};

export default Shopping;
