import React, { useContext, useEffect } from "react";
import {
  FieldValues,
  FormProvider,
  SubmitHandler,
  useForm,
  useFormContext,
} from "react-hook-form";
import CustomInput from "../customInput";
import { CustomIcon } from "../shoppingCatIcon";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  CalendarBlank,
  DeviceMobile,
  EnvelopeSimple,
  IdentificationCard,
  WarningCircle,
} from "@phosphor-icons/react";
import { verifyUser, verifyUserPayload } from "~/services/userService";
import { LIFFProfile, setIsVerify } from "~/lib/features/LIFFProfileSlice";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { initLiff, useLiff } from "~/services/liffService";
import { useRouter } from "next/navigation";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/modal";

type FormValues = {
  name: string;
  birthDate: string;
  nationalID: string;
  email: string;
  phoneNumber: string;
  address: string;
  postCode: string;
};

interface KYFProps {
  checkoutLink: string;
}

const KYCForm: React.FC<KYFProps> = ({ checkoutLink, ...props }) => {
  const methods = useForm();
  const liff = useLiff();
  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const convertDateFormat = (inputDate: string): string => {
    const date = new Date(inputDate);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const milliseconds = date.getMilliseconds().toString().padStart(3, "0");

    const isoDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}Z`;

    return isoDateString;
  };
  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload: verifyUserPayload = {
      lineId: liffProfile.id ?? "",
      email: data["email"],
      idCard: data["nationalID"],
      dateOfBirth: convertDateFormat(data["birthDate"]),
    };
    var result = await verifyUser(payload);
    if (result == true) {
      dispatch(setIsVerify(true));
      router.push("/myOrder/");
      window.open(result?.checkoutLink, "_self");
    } else {
      methods.reset();
      onOpen();
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5"
          autoComplete="off"
        >
          <div className="grid grid-rows-2 h-14">
            <p className="col-span-full text-black opacity-60 font-bold">
              Name
            </p>
            <CustomInput
              placeHolder={"First name - last name"}
              required
              name="name"
              onTextChange={(value) => console.log(value)}
            />
          </div>
          <div className="grid grid-rows-2 h-20 pt-9">
            <p className="col-span-full text-black opacity-60 font-bold">
              Date of birth
            </p>
            <div className="flex flex-row items-start pt-1">
              <div className="pr-5">
                <CustomIcon
                  icon={
                    <CalendarBlank
                      size={30}
                      className="text-black opacity-60"
                      weight="light"
                    />
                  }
                />
              </div>
              <CustomInput
                className="col-span-5 appearance-none no-caledar-icon"
                onTextChange={(value) => console.log(value)}
                type="date"
                name="birthDate"
                required
              />
            </div>
          </div>

          <div className="grid grid-rows-2 h-20 pt-9">
            <p className="col-span-full text-black opacity-60 font-bold">
              National ID
            </p>
            <div className="flex flex-row items-start pt-1">
              <div className="pr-5">
                <CustomIcon
                  icon={
                    <IdentificationCard
                      size={30}
                      className="text-black opacity-60"
                      weight="light"
                    />
                  }
                />
              </div>
              <CustomInput
                type="number"
                className="col-span-5 "
                placeHolder={"0-1234-56789-01-2"}
                name={"nationalID"}
                onTextChange={(value) => console.log(value)}
                required
              />
            </div>
          </div>

          <div className="grid grid-rows-2 h-20 pt-9">
            <p className="col-span-full text-black opacity-60 font-bold">
              Email
            </p>
            <div className="flex flex-row items-start pt-1">
              <div className="pr-5">
                <CustomIcon
                  icon={
                    <EnvelopeSimple
                      size={30}
                      className="text-black opacity-60"
                      weight="light"
                    />
                  }
                />
              </div>
              <CustomInput
                className="col-span-5 "
                placeHolder={"xxx@example.com"}
                onTextChange={(value) => console.log(value)}
                name={"email"}
                required
              />
            </div>
          </div>

          <div className="grid grid-rows-2 h-20 pt-9">
            <p className="col-span-full text-black opacity-60 font-bold">
              Phone number
            </p>
            <div className="flex flex-row items-start pt-1">
              <div className="pr-5">
                <CustomIcon
                  icon={
                    <DeviceMobile
                      size={30}
                      className="text-black opacity-60"
                      weight="light"
                    />
                  }
                />
              </div>
              <CustomInput
                className="col-span-3 w-4"
                placeHolder={"0xx-xxx-xxx"}
                onTextChange={(value) => console.log(value)}
                type="number"
                name={"phoneNumber"}
                required
              />
              <Button
                className="font-bold h-4 rounded-xl text-xs bg-[#40C090] text-white p-4 self-center mt-6 ml-2"
                onClick={() => {}}
              >
                Send OTP
              </Button>
            </div>
          </div>

          <Button
            className="font-bold w-full h-12 rounded-xl text-sm bg-[#40C090] text-white p-5 mt-16 mb-4"
            type="submit"
          >
            VERIFY
          </Button>
        </form>
      </FormProvider>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        className="mx-14"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-5 text-red-500 items-center">
                <CustomIcon icon={<WarningCircle size={32} color="red" />} />
                <p className="text-center">
                  Something went wrong, please try again
                </p>
              </ModalHeader>

              <ModalFooter className="flex flex-col gap-1 items-center">
                <Button
                  color="primary"
                  variant="light"
                  onPress={() => {
                    onClose();
                    methods.reset();
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default KYCForm;
