"use client";

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
import TermAndConditionSheet from "./termAndConditionSheet";
import { clearSelectShippingMethod } from "~/lib/features/shippingMethodSlice";
import { Product } from "~/types/productModel";

const BottomSheet: React.FC = ({ ...props }) => {
  const [bottomSheetStatus, setBottomSheetStatus] =
    useState<BottomSheetShoppingDetailStatus>(
      BottomSheetShoppingDetailStatus.Shipping
    );
  const openBottomSheet: { isOpen: boolean; currentProduct: Product | null } =
    useAppSelector((selector) => selector.bottomSheet);

  const selectDateFromCalendar: {
    selectStartDate: Date | null;
    selectEndDate: Date | null;
  } = useAppSelector((selector) => selector.customCalendar);

  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger());
    clearData();
  };

  const clearData = () => {
    dispatch(clearAllSelectDate());
    dispatch(clearSelectShippingMethod());
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
          isOpen={openBottomSheet.isOpen}
          isDismissable={true}
          isKeyboardDismissDisabled={true}
          placement="bottom-center"
          className="rounded-t-xl rounded-b-none mx-0 text-black my-0"
          onClose={() => {
            handleOnTriggerBottomSheet();
            setBottomSheetStatus(BottomSheetShoppingDetailStatus.Shipping);
          }}
          scrollBehavior="inside"
          hideCloseButton
          style={{ maxHeight: "100px", minHeight: "88%" }}
        >
          {bottomSheetStatus ==
          BottomSheetShoppingDetailStatus.TermNCondition ? (
            <TermAndConditionSheet />
          ) : (
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <div className="flex flex-col gap-y-3 divide-y divide-[#DDDDDD]">
                      <div className="flex flex-row justify-between pt-2">
                        <div className="flex-grow">
                          <p className="line-clamp-2">
                            {openBottomSheet.currentProduct?.name ?? ""}
                          </p>
                        </div>
                        <div className="flex-col w-36 pl-12">
                          <p className="text-xl font-bold">
                            {openBottomSheet.currentProduct?.pricePerDay ?? ""}
                          </p>
                          <p className="">บาทต่อวัน</p>
                        </div>
                      </div>
                      <div className="pt-3 flex flex-row divide-x divide-[#949494] gap-x-5 justify-center">
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
                            <p className="text-sm font-bold">
                              {selectDateFromCalendar.selectStartDate?.toLocaleDateString() ??
                                ""}
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
                            <p className="text-sm font-bold">
                              {selectDateFromCalendar.selectEndDate?.toLocaleDateString() ??
                                ""}
                            </p>
                          </div>
                        </div>
                      </div>
                      {buildSheetContent()}
                    </div>
                  </ModalBody>
                  <ModalFooter className="px-0 py-0">
                    <BottomCheckout
                      depositFee={1200}
                      className="sticky"
                      price={900}
                      status={bottomSheetStatus}
                      onClick={() => {
                        if (
                          bottomSheetStatus ==
                          BottomSheetShoppingDetailStatus.Shipping
                        ) {
                          setBottomSheetStatus(
                            BottomSheetShoppingDetailStatus.TermNCondition
                          );
                        }
                        if (
                          bottomSheetStatus ==
                          BottomSheetShoppingDetailStatus.Payment
                        ) {
                          setBottomSheetStatus(
                            BottomSheetShoppingDetailStatus.TermNCondition
                          );
                        }
                      }}
                    />
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          )}
        </Modal>
      </div>
    </>
  );
};

export default BottomSheet;
