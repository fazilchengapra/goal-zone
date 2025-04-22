import React from "react";
import jersey from "@/public/assets/jersy.svg";
import Image from "next/image";

const JerseyCard = () => {
  return (
    <div className="p-0 m-0">
      <div className="w-fit p-2 md:p-5 bg-white dark:bg-[#1B1C21] rounded-lg justify-center flex flex-col items-center gap-2 cursor-pointer">
        <Image className="w-28 h-28 md:w-44 md:h-44" src={jersey} alt="jersy" />

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
