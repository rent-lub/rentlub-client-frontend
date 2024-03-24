"use client";

import { Button, Chip, Icon, IconButton } from "@mui/material";
import { Export, Share, Snowflake } from "@phosphor-icons/react";
import { Car, Dress, Timer } from "@phosphor-icons/react/dist/ssr";
import { useState } from "react";
import { FavIcon } from "~/components/favIcon";
import BottomCheckout from "~/components/shoppingDetail/bottomCheckout";
import ImageCarousel from "~/components/shoppingDetail/imageCarousel";
import { CustomIcon } from "~/components/shoppingCatIcon";
import { BottomSheetShoppingDetailStatus } from "~/types/bottomShoppingDetailStatus";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

import BottomSheet from "~/components/shoppingDetail/bottomSheet/bottomSheet";
import { trigger } from "~/lib/features/bottomSheetSlice";
import TermAndConditionSheet from "~/components/shoppingDetail/bottomSheet/termAndConditionSheet";
import CustomCalendar from "~/components/customCalendar";
import Image from "next/image";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";

const ShoppingDetailPage = () => {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger());
  };
  return (
    <>
      <div className="bg-white h-screen min-w-full overflow-x-hidden relative pb-20">
        <ImageCarousel
          images={[
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449753/item/goods_12_449753.jpg?width=750",
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449753/sub/goods_449753_sub17.jpg?width=750",
            "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/449753/sub/goods_449753_sub13.jpg?width=750",
          ]}
          width={320}
          height={320}
        />
        <div className="grid grid-cols-1 gap-y-2 divide-y  px-5 ">
          <div className="pt-3 pb-2 text-black text-lg ">
            Fluffy Full-Zip Long Sleeve Jacket
            <div className="flex justify-between pt-3">
              <div className="flex flex-wrap gap-1 text-ellipsis max-w-[fit-content] overflow-hidden">
                <Chip
                  label="Jacket"
                  icon={
                    <CustomIcon
                      icon={<Snowflake />}
                      style={{ weight: "regular" }}
                    />
                  }
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
                  label="Jacket"
                  icon={
                    <CustomIcon
                      icon={<Snowflake />}
                      style={{ weight: "regular" }}
                    />
                  }
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
              <div>
                <IconButton araia-aria-label="fav" onClick={handleFavClick}>
                  <FavIcon
                    fill={isFavorited ? "red" : "black"}
                    filled={isFavorited ? true : false}
                    size={20}
                  />
                </IconButton>
                <IconButton araia-aria-label="share" onClick={() => {}}>
                  <CustomIcon icon={<Export />} style={{ weight: "regular" }} />
                </IconButton>
              </div>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-5 pt-4 px-4 justify-items-start">
              <div>
                <IconButton araia-aria-label="timer">
                  <CustomIcon icon={<Timer size={40} color="black" />} />
                </IconButton>
              </div>
              <div className="col-span-4 ">
                <p className="text-black opacity-60 text-sm">เวลาจองล่วงหน้า</p>
                <p className="text-black ">4 Days</p>
              </div>
            </div>

            <div className="grid grid-cols-5 px-4 justify-items-start">
              <div>
                <IconButton araia-aria-label="timer">
                  <CustomIcon icon={<Car size={40} color="black" />} />
                </IconButton>
              </div>
              <div className="col-span-4 flex items-center">
                <p className="text-black opacity-80 text-sm">
                  Self Pickup Available
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="text-black font-semibold">More Detail</p>
            <p className="text-black">
              Product ID 459794 Please note that this product may have different
              product ID, even if it is the same item. FABRIC DETAILS Body:
              Pocket Lining: 100% Polyester ( 100% Uses Recycled Polyester Fiber
              ) WASHING INSTRUCTIONS Machine wash cold, gentle cycle, Do not Dry
              Clean Wash dark colors separately. Use cleaning net. No optical
              brighteners. Do not soak. Reshape while damp. Color may rub off.
              Shedding of fluff may occur. Use a fabric brush to gently comb and
              remove excess hairs. To prevent excess pilling, follow these
              precautions: Avoid rubbing from bags or belts. Excessive friction
              can exacerbate pilling. Remove pilling with a fabric shaver, or
              carefully trim with scissors. - The images shown may include
              colors that are not available.
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col py-4">
              <p className="text-black font-semibold text-lg">Available on</p>
              <p className="text-black font-normal">เวลาจองล่วงหน้า 5 วัน</p>
            </div>
            <div className="px-6">
              <CustomCalendar
                reserveList={[
                  {
                    item: "first item",
                    startDate: "3/22/2024",
                    endDate: "3/24/2024",
                    label: CalendarLabelEnum.Unavailable,
                  },
                  {
                    item: "second item",
                    startDate: "3/11/2024",
                    endDate: "3/13/2024",
                    label: CalendarLabelEnum.Unavailable,
                  },
                ]}
                onDateSelect={(date) => {}}
                disable
                showLabel
              />
            </div>
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-black font-semibold text-lg">Pick up location</p>
            <Image
              priority
              src={"/images/full_mock_address.png"}
              alt="image"
              width="0"
              height="0"
              sizes="100vw"
              className="w-full h-auto pt-4"
            />
          </div>

          <div className="flex flex-col pt-4">
            <p className="text-black font-semibold text-lg">Term & condition</p>
            <p className="text-black">
              ข้อกำหนดในการให้บริการ เป็น ข้อตกลงทางกฎหมาย ระหว่าง ผู้ให้บริการ
              กับบุคคลที่ต้องการใช้บริการนั้น
              บุคคลนั้นต้องตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการเพื่อใช้บริการที่นำเสนอ
              เงื่อนไขการบริการยังสามารถเป็นเพียง ข้อจำกัดความรับผิดชอบ
              โดยเฉพาะอย่างยิ่งเกี่ยวกับการใช้เว็บไซต์ ภาษาที่คลุมเครือ
            </p>
            <div className="pt-2 pl-12 text-black">
              <ul className="list-disc">
                <li>ค่ามัดจำ 500 บาท</li>
              </ul>
              <ul className="list-disc">
                <li>ค่าของเสียหาย 12,000 บาท</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <BottomCheckout
        className="sticky bottom-0"
        depositFee={1200}
        price={900}
        status={BottomSheetShoppingDetailStatus.SelectDate}
        onClick={handleOnTriggerBottomSheet}
      />
      <BottomSheet />
    </>
  );
};

export default ShoppingDetailPage;
