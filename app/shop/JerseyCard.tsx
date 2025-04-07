import React from "react";
import jersy from "@/public/assets/jersy.svg";
import Image from "next/image";

const JerseyCard = () => {
  return (
    <div className="">
      <div className=" w-fit p-5 bg-white rounded-lg">
        <Image className="w-44 h-44" src={jersy} alt="jersy" />

        <div className="divider"/>
        <div className="flex flex-col gap-2">
            <div className="text-sm">Chelsea Home Kit 21 / 22</div>
            <div className="text-[#5742A9] text-xs">$150.10</div>
        </div>
      </div>
    </div>
  );
};

export default JerseyCard;
