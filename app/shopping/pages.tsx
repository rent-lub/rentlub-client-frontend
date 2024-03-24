"use client";

import React from "react";
import ShoppingTab from "~/components/shopping/shoppingTab";
import HeaderFilterButton from "~/components/shopping/headerFilterButton";
import BottomNavMenu from "~/components/bottomNavMenu";
import ProductCard from "~/components/shopping/productCard";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";

const Shopping = () => {
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
