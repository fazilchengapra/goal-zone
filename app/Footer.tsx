import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row w-full gap-2 xl:gap-0  text-xs mt-8 text-[#636363]">
      <div className="w-full xl:w-1/3 flex flex-row gap-2 xl:gap-4 justify-center xl:justify-start">
        <div className="col-span-2">Terms Of Service</div>
        <div className="col-span-2">Report Abuse</div>
        <div className="col-span-2">Privacy & Data Policy</div>
      </div>
      <div className="w-full xl:w-2/3 text-center xl:text-end">
        <div className="md:mr-3">2022 All Rights Reserved © Onesport</div>
      </div>
    </div>
  );
};

export default Footer;
