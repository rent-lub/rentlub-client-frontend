"use client";

import React from "react";
import ImageCarousel from "~/components/shoppingDetail/imageCarousel";

const ShoppingDetailPage = () => {
  return (
    <>
      <div className="bg-white h-screen min-w-full  relative flex flex-col overflow-y-hidden">
        <ImageCarousel />
      </div>
    </>
  );
};

export default ShoppingDetailPage;
