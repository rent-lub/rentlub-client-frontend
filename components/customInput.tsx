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
  address: string;
  postCode: string;
};

interface CustomInputProps {
  placeHolder?: string;
  onTextChange?: (value: string) => void;
  type?: "number" | "text" | "date";
  className?: string;
  name:
    | "name"
    | "birthDate"
    | "nationalID"
    | "email"
    | "phoneNumber"
    | "address"
    | "postCode";
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
            pattern:
              name == "phoneNumber"
                ? {
                    value: /^\d{10}$/,
                    message: "Invalid phone number (must be 10 digits)",
                  }
                : name == "nationalID"
                ? {
                    value: /^\d{13}$/,
                    message: "Invalid national ID (must be 13 digits)",
                  }
                : name == "email"
                ? {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  }
                : undefined,
          })}
          onChange={(value) => {
            onTextChange!(value.target.value);
          }}
          autoComplete="off"
        />
        {error && <p className="text-red-400 text-xs pt-1">{error.message}</p>}
      </div>
    </>
  );
};

export default CustomInput;
