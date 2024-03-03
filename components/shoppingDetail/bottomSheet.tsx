import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Button, ButtonGroup } from "@nextui-org/button";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { trigger } from "~/lib/features/bottomSheetSlice";
import { CalendarBlank } from "@phosphor-icons/react/dist/ssr";
import CalendarLabel from "./calendarLabel";

interface BottomSheetProps {
  openSheet: boolean;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ openSheet, ...props }) => {
  const openBottomSheet: boolean = useAppSelector(
    (selector) => selector.bottomSheet
  );
  const dispatch = useAppDispatch();
  const handleOnTriggerBottomSheet = () => {
    dispatch(trigger(!openBottomSheet));
  };

  return (
    <>
      <div>
        <Modal
          isOpen={openBottomSheet}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
          placement="bottom"
          className="rounded-t-xl rounded-b-none mx-0 my-0"
          onClose={() => {
            handleOnTriggerBottomSheet();
          }}
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
                      <div className="flex flex-row items-center gap-x-3">
                        <CalendarBlank size={30} />
                        <div className="flex flex-col">
                          <p className="text-sm text-black text-opacity-50 font-semibold">
                            Start date
                          </p>
                          <p className="font-bold text-md">Mon 10 Feb</p>
                        </div>
                      </div>
                      <div className="pl-5 flex flex-row items-center gap-x-3">
                        <CalendarBlank size={30} />
                        <div className="flex flex-col">
                          <p className="font-bold text-md">Return date</p>
                          <p className="font-bold"></p>
                        </div>
                      </div>
                    </div>
                    <div className="pt-4 h-64 flex flex-col justify-center items-center">
                      <p>Calendar</p>
                      <div className="pt-24"></div>
                      <CalendarLabel />
                    </div>
                    <div className="pt-4  flex flex-col justify-center items-center">
                      <p>ค่ามัดจำ</p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose}>
                    Action
                  </Button>
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
