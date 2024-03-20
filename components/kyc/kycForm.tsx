import { SubmitHandler, useForm } from "react-hook-form";
import CustomInput from "../customInput";
import { CustomIcon } from "../shoppingCatIcon";
import { Button, ButtonGroup } from "@nextui-org/button";
import {
  CalendarBlank,
  DeviceMobile,
  EnvelopeSimple,
  IdentificationCard,
} from "@phosphor-icons/react";

type Inputs = {
  example: string;
  exampleRequired: string;
};

const KYCForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-y-5"
        >
          <div className="grid grid-rows-2 ">
            <p className="col-span-full text-black opacity-60 font-bold">
              Name
            </p>
            <div className="grid grid-cols-2 gap-x-3">
              <CustomInput
                placeHolder={"Name"}
                onTextChange={(value) => console.log(value)}
              />
              <CustomInput
                placeHolder={"Last name"}
                onTextChange={(value) => console.log(value)}
              />
            </div>
          </div>
          <div className="grid grid-rows-2 ">
            <p className="col-span-full text-black opacity-60 font-bold">
              Date of birth
            </p>
            <div className="grid grid-cols-6">
              <div className="justify-self-center self-center">
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
              />
            </div>
          </div>

          <div className="grid grid-rows-2 ">
            <p className="col-span-full text-black opacity-60 font-bold">
              National ID
            </p>
            <div className="grid grid-cols-6">
              <div className="justify-self-center self-center">
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
                className="col-span-5 "
                placeHolder={"0-1234-56789-01-2"}
                onTextChange={(value) => console.log(value)}
              />
            </div>
          </div>

          <div className="grid grid-rows-2 ">
            <p className="col-span-full text-black opacity-60 font-bold">
              Email
            </p>
            <div className="grid grid-cols-6">
              <div className="justify-self-center self-center">
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
              />
            </div>
          </div>

          <div className="grid grid-rows-3 ">
            <p className="col-span-full text-black opacity-60 font-bold">
              Email
            </p>
            <div className="grid grid-cols-6">
              <div className="justify-self-center self-center">
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
                className="col-span-3"
                placeHolder={"0xx-xxx-xxx"}
                onTextChange={(value) => console.log(value)}
              />
              <Button
                className="font-bold w-full h-4 rounded-xl text-sm bg-[#40C090] text-white p-5 justify-self-center self-center ml-14"
                onClick={() => {}}
              >
                Send OTP
              </Button>
            </div>
          </div>

          <Button
            className="font-bold w-full h-12 rounded-xl text-sm bg-[#40C090] text-white p-5 mb-12"
            onClick={() => {}}
          >
            VERIFY
          </Button>
        </form>
      </div>
    </>
  );
};

export default KYCForm;
