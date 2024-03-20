"use client";

import { useState, useEffect } from "react";
import KYCForm from "~/components/kyc/kycForm";
import { Avatar } from "@nextui-org/avatar";
import {
  getUserProfileImage,
  getUserId,
  getUserDisplayName,
} from "~/services/liffService";
import { useAppDispatch, useAppSelector } from "~/lib/hooks";
import { setLIFFProfile } from "~/lib/features/LIFFProfileSlice";
import { Button, ButtonGroup } from "@nextui-org/button";

interface LIFFProfile {
  id: string | null;
  profileURL: string | null;
  userToken: string | null;
  displayName: string | null;
  accessToken: string | null;
}

const KYC = () => {
  const liffProfile: LIFFProfile = useAppSelector(
    (selector) => selector.LIFFProfile
  );

  const dispatch = useAppDispatch();

  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col items-center py-5">
        <h2 className="font-bold text-xl">VERIFICATION</h2>

        <div className="flex flex-col gap-y-5 pt-5 items-center">
          <Avatar
            src={liffProfile.profileURL ?? ""}
            name={liffProfile.displayName ?? ""}
            className="w-40 h-40 text-large"
          />
          <p className="font-bold text-2xl">{liffProfile.displayName}</p>
        </div>
        <div className="pt-6 px-10">
          <KYCForm />
        </div>
      </div>
    </>
  );
};

export default KYC;
