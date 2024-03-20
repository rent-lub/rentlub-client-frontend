"use client";

import KYCForm from "~/components/kyc/kycForm";

const KYC = () => {
  return (
    <>
      <div className="bg-white h-screen min-w-full flex flex-col items-center py-5">
        <h2 className="font-bold text-xl">VERIFICATION</h2>
        <div className="pt-6 px-10">
          <KYCForm />
        </div>
      </div>
    </>
  );
};

export default KYC;
