import React, { useState } from "react";
import Image from "next/image";
import { FavIcon } from "../favIcon";
import { Chip, IconButton } from "@mui/material";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { buildIcon } from "~/lib/shoppingCatIcon";

interface ProductCard {
  productCat: ShoppingCatEnum;
  onSelect?: (product: number) => void;
}

const ProductCard: React.FC<ProductCard> = ({ productCat, ...props }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="col-span-1 flex flex-col">
      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5GGCjz2Cn7jNzHnBo49YLwV5hUq92_5AFVjyI78_70wQ4Puzigdcsu2MQYINlI0C5_NI&usqp=CAU"
        width={500}
        height={500}
        alt="Product"
        className="rounded-xl object-contain"
      />
      <div className="grid grid-rows-3">
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
        <div className="flex gap-1 overflow-hidden self-center">
          <Chip
            label="Dress"
            icon={buildIcon(productCat)}
            className="bg-black text-white w-fit h-fit p-1"
            size="small"
          />
          <Chip
            label="Dress"
            icon={buildIcon(productCat)}
            className="bg-black text-white w-fit h-fit p-1"
          />
          <Chip
            label="Dress"
            icon={buildIcon(productCat)}
            className="bg-black text-white w-fit h-fit p-1"
          />
        </div>
        <p className="text-black font-medium text-xl">
          ฿ 3200
          <span className="inline-flex items-baseline">
            <span className="font-normal text-sm text-gray-500"> / DAY</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
