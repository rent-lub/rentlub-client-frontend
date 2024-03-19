import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/bottomSheetSlice";
import { CalendarBlank, Vault } from "@phosphor-icons/react/dist/ssr";
import BottomCheckout from "../bottomCheckout";
import { BottomSheetShoppingDetailStatus } from "~/types/bottomShoppingDetailStatus";
import PaymentContent from "./paymentContent";
import ShippingContent from "./shippingContent";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { clearAllSelectDate } from "~/lib/features/calendarSlice";

const BottomSheet: React.FC = ({ ...props }) => {
  const [bottomSheetStatus, setBottomSheetStatus] =
    useState<BottomSheetShoppingDetailStatus>(
      BottomSheetShoppingDetailStatus.Shipping
    );
  const openBottomSheet: boolean = useAppSelector(
    (selector) => selector.bottomSheet
  );

  const selectDateFromCalendar: {
    selectStartDate: string | null;
    selectEndDate: string | null;
  } = useAppSelector((selector) => selector.customCalendar);

  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger());
    clearSelectDate();
  };

  const clearSelectDate = () => {
    dispatch(clearAllSelectDate());
  };

  const buildSheetContent = () => {
    switch (bottomSheetStatus) {
      case BottomSheetShoppingDetailStatus.Payment:
        return <PaymentContent />;
      case BottomSheetShoppingDetailStatus.Shipping:
        return <ShippingContent />;
    }
  };

  return (
    <>
      <div>
        <Modal
          isOpen={openBottomSheet}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          placement="bottom-center"
          className="rounded-t-xl rounded-b-none mx-0 my-0 text-black"
          onClose={() => {
            handleOnTriggerBottomSheet();
            setBottomSheetStatus(BottomSheetShoppingDetailStatus.Shipping);
          }}
          scrollBehavior="inside"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div className="flex flex-col gap-y-4 divide-y divide-[#DDDDDD]">
                    <div className="flex flex-row gap-x-4">
                      <div className="flex-grow">
                        <p>
                          ชุดกี่เพ้าทันสมัย ชุดกี่เพ้าประยุกต์แบบมีแขน
                          เก๋ๆสวยหรูอินเทรนด์แฟชั่น ไม่ซ้ำใคร
                        </p>
                      </div>
                      <div className="flex-col w-36">
                        <p className="text-xl font-bold">500</p>
                        <p className="">บาทต่อวัน</p>
                      </div>
                    </div>
                    <div className="pt-4 flex flex-row divide-x divide-[#949494] gap-x-5 justify-center">
                      <div
                        className="flex flex-row items-center gap-x-3"
                        onClick={(e) => {
                          if (
                            bottomSheetStatus ==
                            BottomSheetShoppingDetailStatus.Payment
                          ) {
                            setBottomSheetStatus(
                              BottomSheetShoppingDetailStatus.Shipping
                            );
                          }
                        }}
                      >
                        <CalendarBlank size={30} />
                        <div className="flex flex-col">
                          <p className="text-sm text-black text-opacity-50 font-semibold">
                            Start date
                          </p>
                          <p className="text-base font-bold">
                            {selectDateFromCalendar.selectStartDate ?? ""}
                          </p>
                        </div>
                      </div>
                      <div
                        className="pl-5 flex flex-row items-center gap-x-3"
                        onClick={(e) => {
                          if (
                            bottomSheetStatus ==
                            BottomSheetShoppingDetailStatus.Payment
                          ) {
                            setBottomSheetStatus(
                              BottomSheetShoppingDetailStatus.Shipping
                            );
                          }
                        }}
                      >
                        <CalendarBlank size={30} />
                        <div className="flex flex-col">
                          <p className="text-sm text-black text-opacity-50 font-semibold">
                            Return date
                          </p>
                          <p className="text-base font-bold">
                            {selectDateFromCalendar.selectEndDate ?? ""}
                          </p>
                        </div>
                      </div>
                    </div>
                    {buildSheetContent()}
                  </div>
                </ModalBody>
                <ModalFooter className="px-0">
                  <BottomCheckout
                    className="sticky bottom-0"
                    price={3200}
                    status={bottomSheetStatus}
                    onClick={() => {
                      if (
                        bottomSheetStatus ==
                        BottomSheetShoppingDetailStatus.Shipping
                      ) {
                        setBottomSheetStatus(
                          BottomSheetShoppingDetailStatus.Payment
                        );
                      }
                    }}
                  />
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default BottomSheet;
