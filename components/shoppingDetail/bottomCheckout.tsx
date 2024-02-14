import { Button } from "@mui/material";
import React from "react";

interface BottomCheckOutProps {
  price: number;
  className?: string;
}

const BottomCheckout: React.FC<BottomCheckOutProps> = ({
  price,
  className,
  ...props
}) => {
  return (
    <>
      <div
        className={`w-full bg-white py-4 px-5 grid grid-cols-5 border-2 border-t-[#E5E5E5] ${className}`}
      >
        <div className="col-span-2 flex flex-row gap-x-4">
          <div className="text-black self-center text-2xl">฿</div>
          <div className="text-black flex flex-col">
            <div>
              <span className="text-2xl font-medium">
                {price.toLocaleString()}{" "}
              </span>
              <span>บาท</span>
            </div>
            <div className="text-black self-start">ต่อวัน</div>
          </div>
        </div>
        <div className="col-span-3 flex justify-end">
          <Button
            variant="contained"
            className="bg-[#40C090] font-bold px-12 py-3 rounded-xl text-base"
            sx={{ textTransform: "none" }}
          >
            Select Date
          </Button>
        </div>
      </div>
    </>
  );
};

export default BottomCheckout;