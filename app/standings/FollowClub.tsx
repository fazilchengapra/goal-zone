'use client'
import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const FollowClub = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 200, behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between mx-3 text-center">
        <div className="font-bold text-center">🎮 Follow Club</div>
        <div className="flex flex-row gap-2 text-[#A4A4A4]">
          <FaArrowLeft onClick={scrollLeft} className="cursor-pointer" />
          <FaArrowRight onClick={scrollRight} className="cursor-pointer" />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex flex-row gap-3 flex-nowrap w-full overflow-x-auto scrollbar-thin scrollbar-hide"
      >
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="p-5 h-24 w-24 min-w-[6rem] rounded-full bg-[#F6F6F6] border-2 border-[#5742A9] flex items-center justify-center"
          >
            <img
              src="https://media.api-sports.io/football/teams/49.png"
              alt="Team"
              className="h-10 w-10 md:h-12 md:w-12 object-contain select-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FollowClub;
