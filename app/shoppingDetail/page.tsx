"use client";

import { Button, Chip, Icon, IconButton } from "@mui/material";
import { Export, Share } from "@phosphor-icons/react";
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
      <div className="bg-white h-screen min-w-full overflow-x-hidden relative flex flex-col px-5 pb-9">
        <ImageCarousel
          images={[
            "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg",
            "https://st.bigc-cs.com/cdn-cgi/image/format=webp,quality=90/public/media/catalog/product/30/20/2000007885530/2000007885530_1-20231226164926-.jpg",
          ]}
        />
        <div className="grid grid-cols-1 gap-y-2 divide-y">
          <div className="pt-3 pb-2 text-black text-lg ">
            ชุดกี่เพ้าทันสมัย ชุดกี่เพ้าประยุกต์แบบมีแขน เก๋ๆ
            สวยหรูอินเทรนด์แฟชั่น ไม่ซ้ำใคร
            <div className="flex justify-between pt-3">
              <div className="flex flex-wrap gap-1 text-ellipsis max-w-[fit-content] overflow-hidden">
                <Chip
                  label="Dress"
                  icon={
                    <CustomIcon
                      icon={<Dress />}
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
                  label="Dress"
                  icon={
                    <CustomIcon
                      icon={<Dress />}
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
                <p className="text-black opacity-60 text-sm">เวลาจองล้วงหน้า</p>
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
              รายละเอียด ชุดกี่เพ้าทันสมัย -
              ดีเทลของ ชุดกี่เพ้าเก๋ๆ  :  ชุดกี่เพ้าประยุกต์ แบบยาว มีแขน
              ผ้าซาตินพิมพ์ลายดอกโบตั๋น เล่นดีเทลความหรูด้วยงานกระดุมมุขใส
              กระโปรงผ่าด้นข้าง  มาพร้อมซับในอย่างดี ใส่แล้วสวย ผอม หรู
              ดูดีมากๆ   สาวๆ ที่ชอบ ชุดกี่เพ้าแฟชั่น แบบเรียบๆ
              ดูดีแบบไม่ต้องมีดีเทลงานปัก แนะนำเลยนะคะ ผ้านิ่มและลื่นใส่สบายมากๆ
              ค่ะ - เหมาะสำหรับใส่ออกงาน ไปงานเลี้ยง
              ไปงานแต่งงานคนจีน งานปาร์ตี้ ถ่ายพรีเวดดิ้ง 
              หรือใส่รับโชคลาภในวันตรุษจีน เป็น ชุดตรุษจีนหญิง ชุดใส่วันตรุษจีน
              หรือจะใส่ในวันไหว้พระจันทร์
              รุ่่นนี้รุ่นเดียวใส่ได้หลากหลายโอกาสมากค่ะ  - สำหรับสาวๆ
              ที่มองหา ชุดกี่เพ้าเก๋ๆ ชุดกี่เพ้าทันสมัยคนอ้วน ชุดกี่เพ้าโบราณ
              ชุดกี่เพ้าสีแดง ชุดกี่เพ้าโมเดิร์น ปรึกษา สอบถาม ได้นะคะ
              ที่ร้านเดรสซี่เดย์ มีชุดกี่เพ้าสั้น ยาว ไซส์เล็ก
              ไซส์ใหญ่ และ ชุดกี่เพ้าคนอ้วน  ชุดจีนสมัยใหม่ ชุดจีนประยุกต์งานพรีเมี่ยมพร้อมส่งเยอะมากๆ 
              - ถ้าไซส์ไม่พอดีทางร้านมีบริการปรับแก้ไซส์ให้ค่ะ  สนใจสอบถาม
              เช็คคิวแก้ได้เลยค่ะ - สถานะ : ชุดกี่เพ้าพร้อมส่ง 
              กดสั่งซื้อแล้วโอนเงินได้เลยไม่ต้องรอ confirm ได้รับสินค้าวันถัดไป
              หลังจากจัดส่ง
            </p>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col py-4">
              <p className="text-black font-semibold text-lg">Available on</p>
              <p className="text-black font-normal">เวลาจองล่วงหน้า 5 วัน</p>
            </div>
            <div className="px-6">
              <CustomCalendar
                reserveList={[]}
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
            <p>
              ข้อกำหนดในการให้บริการ เป็น ข้อตกลงทางกฎหมาย ระหว่าง ผู้ให้บริการ
              กับบุคคลที่ต้องการใช้บริการนั้น
              บุคคลนั้นต้องตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการเพื่อใช้บริการที่นำเสนอ
              เงื่อนไขการบริการยังสามารถเป็นเพียง ข้อจำกัดความรับผิดชอบ
              โดยเฉพาะอย่างยิ่งเกี่ยวกับการใช้เว็บไซต์ ภาษาที่คลุมเครือ
            </p>
            <div className="pt-2 pl-12">
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
        price={3200}
        status={BottomSheetShoppingDetailStatus.SelectDate}
        onClick={handleOnTriggerBottomSheet}
      />
      <BottomSheet />
    </>
  );
};

export default ShoppingDetailPage;
