"use client";

import React, { useState } from "react";
import {
  useForm,
  SubmitHandler,
  FormProvider,
  FieldValues,
} from "react-hook-form";
import CustomInput from "~/components/customInput";
import Image from "next/image";

type FormValues = {
  name: string;
  birthDate: string;
  nationalID: string;
  email: string;
  phoneNumber: string;
  address: string;
  postCode: string;
};
const PaymentContent = () => {
  const methods = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);
  return (
    <>
      <div className="pt-4 h-full w-full flex flex-col justify-center items-center gap-y-4 divide-y divide-[#DDDDDD]">
        <div>
          <p className="text-md font-semibold">Address</p>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit(onSubmit)}
              className="pt-4 flex flex-col gap-y-4"
            >
              <div className="rounded-xl">
                <Image
                  priority
                  src={"/images/mock_address.png"}
                  alt="image"
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto"
                />
              </div>
              <CustomInput
                name="name"
                placeHolder={"Name"}
                onTextChange={(value) => console.log(value)}
                required
              />
              <CustomInput
                name="address"
                placeHolder={"Address"}
                onTextChange={(value) => console.log(value)}
                required
              />
              <div className="flex gap-x-2">
                <CustomInput
                  name="phoneNumber"
                  type="number"
                  placeHolder={"Number"}
                  onTextChange={(value) => console.log(value)}
                  required
                />
                <CustomInput
                  name="postCode"
                  type="number"
                  placeHolder={"Postcode"}
                  onTextChange={(value) => console.log(value)}
                  className="w-20"
                  required
                />
              </div>
            </form>
          </FormProvider>
        </div>
        <div className="w-full pt-4 grid grid-cols-2 gap-2">
          {BuildShippingMethod()}
        </div>
      </div>
    </>
  );
};

const BuildShippingMethod = () => {
  const [selectMethod, setSelectMethod] = useState<number>();
  return (
    <>
      {Array.from(Array(4)).map((_, i) => {
        return (
          <div
            key={i}
            className={`rounded-xl ${
              selectMethod === i
                ? "border-[#40C090] bg-[#40C090] bg-opacity-20"
                : "border-[#D9D9D9] bg-white"
            } w-full h-14 border-2 flex flex-row px-5 items-center justify-center gap-x-2`}
            onClick={(e) => {
              e.preventDefault();
              setSelectMethod(i);
            }}
          >
            <Image
              priority
              width={50}
              height={50}
              className="m-auto w-12 h-12"
              src={"/images/thailand_post.png"}
              alt="image"
              sizes="small"
            />
            <p className="font-semibold text-sm">+ 32 บาท</p>
          </div>
        );
      })}
    </>
  );
};

export default PaymentContent;
