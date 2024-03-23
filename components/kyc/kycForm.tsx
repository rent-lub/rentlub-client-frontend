import React, { useContext } from "react";
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
} from "@phosphor-icons/react";

type FormValues = {
  name: string;
  birthDate: string;
  nationalID: string;
  email: string;
  phoneNumber: string;
  address: string;
  postCode: string;
};

const KYCForm = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <div className="grid grid-rows-2 h-14">
          <p className="col-span-full text-black opacity-60 font-bold">Name</p>
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
          <p className="col-span-full text-black opacity-60 font-bold">Email</p>
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
          className="font-bold w-full h-12 rounded-xl text-sm bg-[#40C090] text-white p-5 mb-6 mt-5"
          type="submit"
        >
          VERIFY
        </Button>
      </form>
    </FormProvider>
  );
};

export default KYCForm;
