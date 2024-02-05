"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost, deletePost } from "~/lib/features/postsSlice";

import React from "react";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

const Posts = () => {
  const [title, setTitle] = useState("");
  const posts: Array<{ id: number; title: string; description: string }> =
    useAppSelector((selector) => selector.posts);
  const dispatch = useAppDispatch();
  const handleRemovePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  return (
    <>
      <div>
        {posts ? (
          posts.map((post) => (
            <div key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.description}</p>
              <button
                onClick={() => {
                  handleRemovePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No post</p>
        )}
      </div>
    </>
  );
};

export default Posts;
