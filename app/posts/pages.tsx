"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "~/stores/slices/postsSlice";

import React from "react";

const Posts = () => {
  const [title, setTitle] = useState("");
  const posts = useSelector((state: any) => state.posts);
  console.log(posts);
  return <div>pages</div>;
};

export default Posts;
