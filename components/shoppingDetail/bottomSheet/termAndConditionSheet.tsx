import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@nextui-org/modal";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";

const TermAndConditionSheet = () => {
  return (
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1"></ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-y-4 divide-y divide-[#DDDDDD]">
              <p className="text-black font-semibold text-md flex justify-center">
                Term & Condition
              </p>
              <div className="pt-4 flex flex-col gap-y-2">
                <p className="font-medium text-sm leading-5">
                  PLEASE READ THESE TERMS OF SERVICE CAREFULLY AS THEY CONTAIN
                  IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES
                  AND OBLIGATIONS. THESE INCLUDE VARIOUS LIMITATIONS AND
                  EXCLUSIONS, A CLAUSE THAT GOVERNS THE JURISDICTION AND VENUE
                  OF DISPUTES, AND OBLIGATIONS TO COMPLY WITH APPLICABLE LAWS
                  AND REGULATIONS.
                </p>
                <p className="font-medium text-sm leading-5">
                  1. In order to secure the reservation, the tenant must
                  complete a deposit of 50% of the monthly rental rate at the
                  time of room reservation. The balance amount can be paid by
                  Thai Baht cash or credit card VISA /MASTER upon arrival.
                  Processing fee is charged per transaction. All rates are
                  calculated in Thai Baht.
                </p>
                <p className="font-medium text-sm leading-5">
                  2. Rental for the Holidays will charge service fee to the
                  tenant in consideration for the use of platform
                </p>
                <p className="font-medium text-sm leading-5">
                  3. Service fee range between 3% -10% of total rental amount,
                  including applicable Taxes. Rental for the Holidays reserve
                  the rights to change a service fee at any time.
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter className="px-0">
            <div
              className={`w-full bg-white py-4 px-5 flex flex-col border-t-2 border-t-[#E5E5E5] sticky bottom-0 items-center justify-center gap-y-6`}
            >
              <Checkbox color="success">
                I have read & agree to the Terms
              </Checkbox>
              <Button
                className="font-bold w-full h-12 rounded-xl text-md bg-[#40C090] text-white"
                onClick={() => {}}
              >
                Continue
              </Button>
            </div>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  );
};

export default TermAndConditionSheet;
