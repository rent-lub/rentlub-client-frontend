import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import { useAppSelector } from "~/lib/hooks";
import { LIFFProfile } from "~/lib/features/LIFFProfileSlice";
import { useRouter } from "next/navigation";
import { Product } from "~/types/productModel";
import { createRenting, CreateRentingPayload } from "~/services/rentService";
import { DateTime } from "luxon";

const TermAndConditionSheet = () => {
  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );

  const openBottomSheet: { isOpen: boolean; currentProduct: Product | null } =
    useAppSelector((selector) => selector.bottomSheet);

  const selectDateFromCalendar: {
    selectStartDate: Date | null;
    selectEndDate: Date | null;
  } = useAppSelector((selector) => selector.customCalendar);

  const router = useRouter();
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleOnCreateRenting = async () => {
    console.log("click");
    const rentingPayload: CreateRentingPayload = {
      userLineId: liffProfile.id ?? "dfgfdgfdgfdg",
      productId: openBottomSheet.currentProduct?._id!,
      startDate: DateTime.fromJSDate(
        selectDateFromCalendar.selectStartDate!
      ).toFormat("yyyy-MM-dd"),
      endDate: DateTime.fromJSDate(
        selectDateFromCalendar.selectEndDate!
      ).toFormat("yyyy-MM-dd"),
    };
    console.log(rentingPayload);
    var result = await createRenting(rentingPayload);
    if (result?.checkoutLink != null) {
      window.open(result?.checkoutLink, "_self");
    }
  };

  return (
    <>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1"></ModalHeader>
            <ModalBody>
              <div className="flex flex-col gap-y-4 divide-y divide-[#DDDDDD]">
                <p className="text-black font-semibold text-md flex justify-center">
                  Term & Condition
                </p>
                <div className="pt-4 flex flex-col gap-y-2">
                  <p className="font-medium text-md leading-5 text-black">
                    ข้อกำหนดในการให้บริการ เป็น ข้อตกลงทางกฎหมาย ระหว่าง
                    ผู้ให้บริการ กับบุคคลที่ต้องการใช้บริการนั้น
                    บุคคลนั้นต้องตกลงที่จะปฏิบัติตามข้อกำหนดในการให้บริการเพื่อใช้บริการที่นำเสนอ
                    เงื่อนไขการบริการยังสามารถเป็นเพียง ข้อจำกัดความรับผิดชอบ
                    โดยเฉพาะอย่างยิ่งเกี่ยวกับการใช้เว็บไซต์ ภาษาที่คลุมเครือ
                  </p>
                  <div className="pt-2 pl-12 text-black">
                    <ul className="list-disc text-md ">
                      <li>
                        ค่ามัดจำ {openBottomSheet.currentProduct?.deposit.value}{" "}
                        บาท
                      </li>
                    </ul>
                    <ul className="list-disc text-md ">
                      <li>ค่าของเสียหาย 2,000 บาท</li>
                    </ul>
                    <ul className="list-disc text-md ">
                      <li>
                        เมื่อทางร้านได้รับชุดและตรวจสอบเรียบร้อยแล้ว
                        ทางร้านจะโอนเงินมัดจำ (ยึดตามใบจองสินค้า)
                        คืนให้ลูกค้าภายใน 1-2 วัน หากมีรอยหรือตำหนิ
                        อันเกิดจากการใช้งานของลูกค้า ตามรายละเอียดข้อ 3
                        ที่แจ้งไว้ ทางร้านจะแจ้งยอดปรับแก่ลูกค้า
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
            </ModalBody>
            <ModalFooter className="px-0">
              <div
                className={`w-full bg-white py-4 px-5 flex flex-col border-t-2 border-t-[#E5E5E5] sticky bottom-0 items-center justify-center gap-y-6`}
              >
                <Checkbox color="success" onValueChange={setIsAgree}>
                  I have read & agree to the Terms
                </Checkbox>

                <Button
                  isDisabled={!isAgree}
                  className="font-bold w-full h-12 rounded-xl text-md bg-[#40C090] text-white"
                  onClick={async () => {
                    isAgree
                      ? liffProfile.isVerify
                        ? await handleOnCreateRenting()
                        : router.push("/kyc")
                      : () => {};
                  }}
                >
                  Continue
                </Button>
              </div>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </>
  );
};

export default TermAndConditionSheet;
