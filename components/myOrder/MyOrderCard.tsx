"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Renting } from "~/services/rentService";
import { Product } from "~/types/productModel";
import { MyOrder } from "~/lib/features/myOrderSlice";
import { DateTime } from "luxon";

interface MyOrderCardProps {
  rentItem?: MyOrder;
}

const MyOrderCard: React.FC<MyOrderCardProps> = ({ rentItem, ...props }) => {
  return (
    <>
      <div className="flex border-2 border-slate-200 rounded-xl justify-center mb-3">
        <div className="w-1/4">
          <Image
            src={
              rentItem?.product.images[0] ??
              "https://media.istockphoto.com/id/1367855191/fr/vectoriel/galerie-dimages-ic%C3%B4ne-solide.jpg?s=612x612&w=0&k=20&c=6YcYJhK-H6i2wto10SJvSa-Y06TvzpM6aVOvBgUSWdo="
            }
            alt={""}
            width={100}
            height={100}
            className="w-full object-none rounded-l-xl"
          />
        </div>
        <div className="w-3/4 px-3 flex flex-col text-sm space-y-1.5 justify-center">
          <p className="line-clamp-2">{rentItem?.product.name}</p>
          <p className="font-bold">
            {DateTime.fromISO(rentItem?.renting.startDate!).toFormat(
              "dd-MM-yyyy"
            )}{" "}
            -{" "}
            {DateTime.fromISO(rentItem?.renting.endDate!).toFormat(
              "dd-MM-yyyy"
            )}
          </p>
        </div>
      </div>
    </>
  );
};

export default MyOrderCard;
