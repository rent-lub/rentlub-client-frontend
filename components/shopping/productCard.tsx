"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FavIcon } from "../favIcon";
import { Chip, IconButton } from "@mui/material";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { CustomIcon, buildIcon } from "~/components/shoppingCatIcon";
import { Dress } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "~/lib/hooks";
import { clearAllSelectDate } from "~/lib/features/calendarSlice";

interface ProductCard {
  productCat: ShoppingCatEnum;
  onSelect?: (product: number) => void;
}

const ProductCard: React.FC<ProductCard> = ({ productCat, ...props }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  const dispatch = useAppDispatch();
  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="col-span-1 flex flex-col"
      onClick={(e) => {
        dispatch(clearAllSelectDate());
        e.preventDefault();
        router.push("/shoppingDetail/");
      }}
    >
      <Image
        src="https://www.osotspa.com/upload/picture/l-content-b43e43012009de5705ecd1468312b830.png"
        width={500}
        height={500}
        alt="Product"
        className="rounded-xl object-cover h-auto aspect-square"
      />
      <div className="grid grid-rows-2">
        <div className="grid grid-cols-4 pt-2">
          <p className="col-span-3 text-black line-clamp-2 text-ellipsis overflow-hidden text-sm">
            ชุดตรุษจีน โมเดิรน์ สวยๆ ลายดอกไม้มงคลของจีน ชุดกี่เพ้าแฟชั่น คนอ้วน
            อวบ ใส่สวย KPL171
          </p>
          <IconButton araia-aria-label="fav" onClick={handleFavClick}>
            <FavIcon
              fill={isFavorited ? "red" : "black"}
              filled={isFavorited ? true : false}
              size={20}
            />
          </IconButton>
        </div>

        <p className="text-black font-medium text-md">
          ฿ {Number(3200).toLocaleString()}
          <span className="inline-flex items-baseline">
            <span className="font-normal text-sm text-gray-500"> / DAY</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
