import React, { useState } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import Image from "next/image";
import { CalendarBlank,Vault} from "@phosphor-icons/react/dist/ssr";
import {Input} from "@nextui-org/input";
import { MyOrder } from "~/lib/features/myOrderSlice";
import { Resolver, useForm } from "react-hook-form";
import { updateStatusReturn } from "~/services/rentService";
import { useRouter } from "next/navigation";
import { DateTime } from "luxon";

interface ReturnSheetProps {
  order: MyOrder;
}

type FormValues = {
  trackingNumber: string;
};

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.trackingNumber ? values : {},
    errors: !values.trackingNumber
      ? {
          trackingNumber: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

const ReturnSheet: React.FC<ReturnSheetProps> = ({ order, ...props }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver });
  const onSubmit = handleSubmit((data) => console.log(data));
  const [trackingNumber, setTrackingNumber] = useState<string>("");
  const router = useRouter();
  return (
    <>
      <div className="px-5 pb-5">
        <Button onPress={onOpen} className="w-full bg-green text-white">
          Return
        </Button>
        <Modal
          isOpen={isOpen}
          placement="bottom-center"
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
          style={{ maxHeight: "100px", minHeight: "88%" }}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-black font-bold items-center">
                  Return
                </ModalHeader>
                <ModalBody>
                  <form onSubmit={onSubmit}>
                    <div className="flex flex-col gap-5 items-stretch font-bold text-black">
                      <div className=" rounded-xl w-full border border-slate-200 "></div>
                      <div className="flex justify-center items-center gap-10">
                        <div className="flex items-center gap-2">
                          <CalendarBlank className="fill-black" size={35} />
                          <div className="flex flex-col gap-0">
                            <p className="text-slate-400 text-xs">
                              Return Date
                            </p>
                            <p className="text-sm">
                              {DateTime.fromISO(order.renting.endDate).toFormat(
                                "d MMMM yyyy"
                              )}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Vault className="fill-black" size={35} />
                          <div className="flex flex-col gap-0">
                            <p className="text-slate-400 text-xs">ค่ามัดจำ</p>
                            <p className="text-sm">
                              {Number(
                                order.renting.price.deposit
                              ).toLocaleString()}{" "}
                              บาท
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className=" rounded-xl w-full border border-slate-200 "></div>
                      <div className="flex flex-col gap-3 items-stretch">
                        <p className="">พัสดุ</p>
                        <div className="flex gap-3 self-stretch">
                          <div className="flex border-2 border-green bg-green/25 rounded-md py-3 px-3 gap-5 items-center">
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <p className="text-xs font-bold">Thai Post</p>
                          </div>
                          <div className="flex border-2 border-slate-300 rounded-md py-3 px-3 gap-5 items-center">
                            <Image
                              src="https://upload.wikimedia.org/wikipedia/th/3/36/ThailandPost_Logo.png"
                              alt=""
                              width={50}
                              height={50}
                            />
                            <p className="text-xs font-bold">Thai Post</p>
                          </div>
                        </div>

                        <Input
                          type="หมายเลขพัสดุ"
                          label="หมายเลขพัสดุ"
                          isRequired
                          onValueChange={(e) => {
                            setTrackingNumber(e);
                          }}
                        />
                      </div>
                      <div className=" rounded-xl w-full border border-slate-200 "></div>
                      <div className="">
                        <p className="text-base font-bold">ขอความช่วยเหลือ</p>
                        <span className="text-xs underline underline-offset-2">
                          ติดต่อเรา
                        </span>
                      </div>
                    </div>
                    <div className="w-full border-slate-200 "></div>
                    <div className="w-full bg-transparent flex justify-center pt-5">
                      <Button
                        className="w-full bg-green text-white"
                        onClick={async () => {
                          var result = await updateStatusReturn(
                            order.renting._id,
                            trackingNumber
                          );
                          if (result) {
                            router.push("/myOrder/");
                          }
                        }}
                      >
                        Done
                      </Button>
                    </div>
                  </form>
                </ModalBody>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};
  
export default ReturnSheet;