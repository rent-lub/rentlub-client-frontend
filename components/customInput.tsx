"use client";

import React from "react";
import {
  SubmitHandler,
  useForm,
  useFormContext,
  UseFormRegister,
} from "react-hook-form";

type FormValues = {
  name: string;
  birthDate: string;
  nationalID: string;
  email: string;
  phoneNumber: string;
};

interface CustomInputProps {
  placeHolder?: string;
  onTextChange?: (value: string) => void;
  type?: "number" | "text" | "date";
  className?: string;
  name: "name" | "birthDate" | "nationalID" | "email" | "phoneNumber";
  required: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeHolder,
  onTextChange,
  type,
  className,
  name,
  required,
  ...props
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  const error = errors[name];
  return (
    <>
      <div className="w-full">
        <input
          type={type ?? "text"}
          className={`bg-[#F5F5F5] rounded-xl h-12 px-4 min-w-full focus:outline-none ${className} no-calendar-icon text-black`}
          placeholder={placeHolder ?? ""}
          {...register(name, {
            required: "This field is required",
          })}
          onChange={(value) => {
            onTextChange!(value.target.value);
          }}
        />
        {error && <p className="text-red-400 text-xs pt-1">{error.message}</p>}
      </div>
    </>
  );
};

export default CustomInput;
