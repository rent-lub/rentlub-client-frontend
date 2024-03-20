import React from "react";

interface CustomInputProps {
  placeHolder?: string;
  onTextChange?: (value: string) => void;
  type?: "number" | "text" | "date";
  className?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  placeHolder,
  onTextChange,
  type,
  className,
  ...props
}) => {
  return (
    <>
      <input
        type={type ?? "text"}
        className={`bg-[#F5F5F5] rounded-xl h-12 px-4 focus:outline-none w-full ${className} no-calendar-icon`}
        placeholder={placeHolder ?? ""}
        onChange={(value) => {
          onTextChange!(value.target.value);
        }}
        required
      />
    </>
  );
};

export default CustomInput;
