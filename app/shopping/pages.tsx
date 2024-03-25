"use client";

import React, { useEffect } from "react";
import ShoppingTab from "~/components/shopping/shoppingTab";
import HeaderFilterButton from "~/components/shopping/headerFilterButton";
import BottomNavMenu from "~/components/bottomNavMenu";
import ProductCard from "~/components/shopping/productCard";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { getSampleShop } from "~/services/productService";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "~/lib/store";
import { fetchSampleShop } from "~/lib/features/shopSlice";

const Shopping = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { shop, product, error, loading } = useSelector(
    (state: RootState) => state.shop
  );

  useEffect(() => {
    dispatch(fetchSampleShop());
  }, [dispatch]);

  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col overflow-y-hidden">
        <div className="px-5 pt-3 flex-grow-0">
          <HeaderFilterButton />
        </div>
        <div className="flex flex-col flex-grow h-64 gap-y-2">
          <ShoppingTab />
          <div className="grid grid-cols-2 gap-x-6 px-4 overflow-y-auto">
            {product?.map((item) => {
              return (
                <React.Fragment key={item._id}>
                  <ProductCard product={item} />
                </React.Fragment>
              );
            })}
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
