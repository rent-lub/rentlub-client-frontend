"use client";

import { useState, useEffect } from "react";
import KYCForm from "~/components/kyc/kycForm";
import { Avatar } from "@nextui-org/avatar";
import {
  getUserProfileImage,
  getUserId,
  getUserDisplayName,
} from "~/services/liffService";

const KYC = () => {
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [displayName, setDisplayName] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      const image = await getUserProfileImage();
      const id = await getUserId();
      const name = await getUserDisplayName();

      setProfileImage(image);
      setUserId(id);
      setDisplayName(name);
    }

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col items-center py-5">
        <h2 className="font-bold text-xl">VERIFICATION</h2>
        <div className="flex flex-col gap-y-5">
          <Avatar
            src={profileImage ?? ""}
            name={displayName ?? ""}
            className="w-40 h-40 text-large"
          />
          <p className="font-bold">{displayName}</p>
        </div>
        <div className="pt-6 px-10">
          <KYCForm />
        </div>
      </div>
    </>
  );
};

export default KYC;
