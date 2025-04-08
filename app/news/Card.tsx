import Image from "next/image";
import React from "react";
import newsImg from "@/public/assets/newsImg.svg";
import _ from 'lodash'

const Card = () => {
  return (
    <div className="mx-2">
      <div className="flex flex-col gap-2 max-w-56">
        <div className=""><Image className=" w-full h-auto rounded-md object-fit" src={newsImg} alt="news" /></div>
        <div className="text-xs text-[#5742A9]">PREMIER LEAGUE</div>
        <div className="text-sm font-light">Signs of Arsenal getting stronger in the Premier League</div>
        <div className="text-xs text-[#636363]">{_.truncate('victory over Wolves provided a comfortable distance for Arsenal at the top of the Premier League standings', {length:75}) }</div>
      </div>
    </div>
  );
};

export default Card;
