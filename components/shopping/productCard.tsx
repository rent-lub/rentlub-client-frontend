import React, { useState } from "react";
import Image from "next/image";
import { FavIcon } from "../favIcon";
import { Chip, IconButton } from "@mui/material";
import { ShoppingCatEnum } from "~/types/shoppingCatEnum";
import { CustomIcon, buildIcon } from "~/lib/shoppingCatIcon";
import { Dress } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";

interface ProductCard {
  productCat: ShoppingCatEnum;
  onSelect?: (product: number) => void;
}

const ProductCard: React.FC<ProductCard> = ({ productCat, ...props }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const router = useRouter();

  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div
      className="col-span-1 flex flex-col"
      onClick={(e) => {
        e.preventDefault();
        router.push("/shoppingDetail/");
      }}
    >
      <Image
        src="https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg"
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
        <div className=" inline-flex gap-1 self-center text-ellipsis max-w-[fit-content] overflow-hidden">
          <Chip
            label="Dress"
            icon={<CustomIcon icon={<Dress />} style={{ weight: "regular" }} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
              height: "height-content",
              padding: 1,
            }}
            size="small"
          />
          <Chip
            label="Dress"
            icon={<CustomIcon icon={<Dress />} style={{ weight: "regular" }} />}
            sx={{
              backgroundColor: "black",
              color: "white",
              width: "fit-content",
              height: "height-content",
              padding: 1,
            }}
            size="small"
          />
        </div>
        <p className="text-black font-medium text-xl">
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
