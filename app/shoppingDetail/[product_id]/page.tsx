"use client";

import { Chip } from "@nextui-org/chip";
import { Button, Icon, IconButton } from "@mui/material";
import { Export, Share, Snowflake } from "@phosphor-icons/react";
import { Car, Dress, Timer } from "@phosphor-icons/react/dist/ssr";
import { useEffect, useState } from "react";
import { FavIcon } from "~/components/favIcon";
import BottomCheckout from "~/components/shoppingDetail/bottomCheckout";
import ImageCarousel from "~/components/shoppingDetail/imageCarousel";
import { CustomIcon } from "~/components/shoppingCatIcon";
import { BottomSheetShoppingDetailStatus } from "~/types/bottomShoppingDetailStatus";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";

import BottomSheet from "~/components/shoppingDetail/bottomSheet/bottomSheet";
import {
  setCurrentProductBottomSheet,
  trigger,
} from "~/lib/features/bottomSheetSlice";
import TermAndConditionSheet from "~/components/shoppingDetail/bottomSheet/termAndConditionSheet";
import CustomCalendar from "~/components/customCalendar";
import Image from "next/image";
import { CalendarLabelEnum } from "~/types/calendarLabelEnum";
import { useSelector } from "react-redux";
import { RootState } from "~/lib/store";
import { DateTime } from "luxon";
import { fetchSampleShop } from "~/lib/features/shopSlice";
import { useParams } from "next/navigation";
import { Product } from "~/types/productModel";
import { getProductByID } from "~/services/productService";

const ShoppingDetailPage = ({ params }: { params: { product_id: string } }) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const handleFavClick = () => {
    setIsFavorited(!isFavorited);
  };

  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger());
  };

  const { shop, product, error, loading } = useSelector(
    (state: RootState) => state.shop
  );

  const [currentProduct, setCurrentProduct] = useState<Product>();

  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(fetchSampleShop());
      const productFromID = await getProductByID(params.product_id);
      setCurrentProduct(productFromID!);
      dispatch(setCurrentProductBottomSheet(productFromID));
    };

    if (!product) {
      fetchProduct();
    } else {
      const foundProduct = product.find(
        (item) => item._id === params.product_id
      );
      if (foundProduct) {
        setCurrentProduct(foundProduct);
        dispatch(setCurrentProductBottomSheet(foundProduct));
      } else {
        fetchProduct();
      }
    }
  }, [dispatch, params.product_id, product]);

  useEffect(() => {
    if (currentProduct) {
      getLeadTime();
    }
  }, [currentProduct]);

  const getLeadTime = (): DateTime => {
    return DateTime.now().plus({
      days: currentProduct?.preparation.value ?? 0,
    });
  };

  return (
    <>
      <div className="bg-white h-screen min-w-full overflow-x-hidden overflow-y-auto relative pb-20">
        <ImageCarousel
          images={
            currentProduct?.images ?? [
              "https://media.istockphoto.com/id/1367855191/fr/vectoriel/galerie-dimages-ic%C3%B4ne-solide.jpg?s=612x612&w=0&k=20&c=6YcYJhK-H6i2wto10SJvSa-Y06TvzpM6aVOvBgUSWdo=",
            ]
          }
          width={500}
          height={500}
        />
        <div className="grid grid-cols-1 gap-y-2 divide-y  px-5 ">
          <div className="pt-3 pb-2 text-black text-lg ">
            {currentProduct?.name}
            <div className="flex justify-between pt-3 items-center">
              <Chip
                className={`${
                  currentProduct?.stock != null &&
                  currentProduct?.stock.available > 0
                    ? "bg-green"
                    : "bg-black opacity-50"
                } text-medium text-white `}
              >
                {currentProduct?.stock != null &&
                currentProduct?.stock.available > 0
                  ? "Available"
                  : "Unavailable"}
              </Chip>

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
                <p className="text-black ">
                  {currentProduct?.preparation.value ??
                    shop?.setting.preparationTime}{" "}
                  วัน
                </p>
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
              {currentProduct?.description ?? "No description"}
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
            <p className="font-medium text-md leading-5 text-black">
              ข้อกำหนดในการให้บริการ เป็น ข้อตกลงทางกฎหมาย ระหว่าง ผู้ให้บริการ
              กับบุคคลที่ต้องการใช้บริการนั้น
              บุคคลนั้นต้องตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการเพื่อใช้บริการที่นำเสนอ
              เงื่อนไขการบริการยังสามารถเป็นเพียง ข้อจำกัดความรับผิดชอบ
              โดยเฉพาะอย่างยิ่งเกี่ยวกับการใช้เว็บไซต์ ภาษาที่คลุมเครือ
            </p>
            <div className="pt-2 pl-12 text-black">
              <ul className="list-disc text-md ">
                <li>ค่ามัดจำ {currentProduct?.deposit.value} บาท</li>
              </ul>
              <ul className="list-disc text-md ">
                <li>ค่าของเสียหาย 2,000 บาท</li>
              </ul>
              <ul className="list-disc text-md ">
                <li>
                  เมื่อทางร้านได้รับชุดและตรวจสอบเรียบร้อยแล้ว
                  ทางร้านจะโอนเงินมัดจำ (ยึดตามใบจองสินค้า) คืนให้ลูกค้าภายใน
                  1-2 วัน หากมีรอยหรือตำหนิ อันเกิดจากการใช้งานของลูกค้า
                  ตามรายละเอียดข้อ 3 ที่แจ้งไว้ ทางร้านจะแจ้งยอดปรับแก่ลูกค้า
                  เพื่อให้ลูกค้ารับทราบก่อน
                  หลังจากนั้นทางร้านจึงจะโอนคืนเงินมัดจำที่เหลือให้ลูกค้า
                </li>
              </ul>
              <ul className="list-disc text-md ">
                <li>
                  ลูกค้าสามารถส่งคืนได้จากวันที่แจ้งกลับได้ไม่เกิน 1 วัน
                  ซึ่งสามารถส่งคืนได้ทางหน้าร้าน
                  หรือในกรณีไม่สามารถมาคืนได้ด้วยตนเอง
                  สามารถส่งคืนทางผู้ให้บริการขนส่ง
                  โดยยึดจากวันที่ประทับตราไปรษณีย์
                </li>
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
