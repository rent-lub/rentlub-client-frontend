import React, { useState } from "react";
import Image from "next/image";
import { FavIcon } from "../favIcon";
import { Chip, IconButton } from "@mui/material";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { buildIcon } from "~/lib/shoppingCatIcon";

interface ProductCard {
  productCat: ShoppingCatEnum;
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
        <div className="grid grid-cols-4 py-2">
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
        <div className="flex flex-wrap gap-1">
          <Chip
            label="Dress"
            icon={buildIcon(productCat, "white")}
            className="bg-black text-white w-auto h-auto"
          />
          <Chip
            label="Dress"
            icon={buildIcon(productCat, "white")}
            className="bg-black text-white w-auto h-auto"
          />
          <Chip
            label="Dress"
            icon={buildIcon(productCat, "white")}
            className="bg-black text-white w-auto h-auto"
          />
        </div>
        <div className="pt-1">
          <p className="text-black font-medium text-xl">
            ฿ 3200
            <span className="inline-flex items-baseline">
              <p className="font-normal text-sm text-gray-500"> / DAY</p>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
