'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import card from "@/public/assets/Card.png";

const MainContent = () => {
  // Set the target date (YYYY-MM-DD HH:MM:SS format)
  const targetDate = new Date("2025-05-01T00:00:00").getTime(); 

  // State for countdown values
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer); // Stop countdown when time is up
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="xl:grid xl:grid-cols-3 w-full">
      <div className="xl:col-span-2 relative">
        <Image src={card} alt="Card Image" className="w-full" />
        <div className="absolute top-0 left-0 w-full h-full items-center justify-center text-white flex flex-col">
          <div className="text-center flex flex-col md:gap-2 gap-1 md:text-2xl text-md">
            <p >England vs Germany</p>
            <p className="text-xs">Sunday, 21 January 2022</p>
          </div>
          <div>
            <div className="grid grid-flow-col gap-2 md:gap-5 text-center auto-cols-max items-center mt-1 md:mt-3 font-thin">
              {["days", "hours", "minutes", "seconds"].map((unit) => (
                <div key={unit} className="flex flex-col">
                  <span className="countdown font-mono text-md md:text-3xl font-light">
                    <span
                      style={{ "--value": timeLeft[unit as keyof typeof timeLeft] } as React.CSSProperties}
                      aria-live="polite"
                    >
                      {timeLeft[unit as keyof typeof timeLeft]}
                    </span>
                  </span>
                  <div className="capitalize text-xs md:text-sm font-thin text-white opacity-50">{unit}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="xl:col-span-1 h-auto bg-white mt-3 xl:mt-0 xl:mx-5 items-center justify-center text-center rounded-2xl flex flex-col gap-3 pb-3 xl:pb-0">
        <div className="mt-3 flex flex-col gap-y-2">
          <div className="font-bold">Live Match</div>
          <div className="text-[#096A00] text-sm">62 : 24</div>
        </div>
        <div className="items-center content-center w-full flex flex-col justify-center mt-2">
          <div className="bg-[#EFEDF7] w-fit text-center px-6 py-2 text-xl rounded-2xl font-semibold text-[#5742A9]">
            2 - 2
          </div>
        </div>
        <div className="w-full px-5 mt-2">
          <div className="flex flex-col gap-3">
            {["Shoot on Target", "Shoot", "Fouls"].map((stat) => (
              <div key={stat}>
                <div className="text-sm">{stat}</div>
                <div className="flex justify-between text-xs">
                  <div className="text-info font-semibold">7</div>
                  <div className="text-error font-semibold">3</div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <progress className="progress progress-info w-full rounded-md" value={90} max="100"></progress>
                  <progress className="progress progress-error w-full rounded-md" value={50} max="100"></progress>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
