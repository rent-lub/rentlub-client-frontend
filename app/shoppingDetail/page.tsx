"use client";

import React from "react";
import ImageCarousel from "~/components/shoppingDetail/imageCarousel";

const ShoppingDetailPage = () => {
  return (
    <>
      <div className="bg-white h-screen min-w-full  relative flex flex-col overflow-y-hidden">
        <ImageCarousel
          images={[
            "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg",
            "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg",
          ]}
        />
      </div>
    </>
  );
};

export default ShoppingDetailPage;
