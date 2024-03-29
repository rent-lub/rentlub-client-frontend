"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FavIcon } from "../favIcon";
import { Chip, IconButton } from "@mui/material";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { CustomIcon, buildIcon } from "~/components/shoppingCatIcon";
import { Dress } from "@phosphor-icons/react/dist/ssr";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch } from "~/lib/hooks";
import { clearAllSelectDate } from "~/lib/features/calendarSlice";
import { Product } from "~/types/productModel";
import { Images } from "@phosphor-icons/react";

interface ProductCard {
  product: Product;
  onSelect?: (product: number) => void;
}

const ProductCard: React.FC<ProductCard> = ({ product, ...props }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="col-span-1 flex flex-col">
      <Image
        src={product.images[0]}
        width={500}
        height={500}
        alt="Product"
        priority
        className="rounded-xl object-cover h-auto aspect-square"
        onClick={(e) => {
          dispatch(clearAllSelectDate());
          e.preventDefault();
          router.push(`/shoppingDetail/${product._id}`);
        }}
      />
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-4 pt-2">
          <p
            className="col-span-3 text-black line-clamp-2 text-ellipsis overflow-hidden text-sm"
            onClick={(e) => {
              dispatch(clearAllSelectDate());
              e.preventDefault();
              router.push(`/shoppingDetail/${product._id}`);
            }}
          >
            {product.name}
          </p>
          <IconButton araia-aria-label="fav" onClick={handleFavClick}>
            <FavIcon
              fill={isFavorited ? "red" : "black"}
              filled={isFavorited ? true : false}
              size={20}
            />
          </IconButton>
        </div>

        <p
          className="text-black font-medium text-md"
          onClick={(e) => {
            dispatch(clearAllSelectDate());
            e.preventDefault();
            router.push(`/shoppingDetail/${product._id}`);
          }}
        >
          ฿ {Number(product.pricePerDay).toLocaleString()}
          <span className="inline-flex items-baseline">
            <span className="font-normal text-sm text-gray-500"> / DAY</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
