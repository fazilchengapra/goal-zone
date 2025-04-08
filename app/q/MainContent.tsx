import React from "react";

const MainContent = () => {
  return (
    <div className="w-full">
      <div className="relative flex flex-col items-center justify-center gap-4 bg-white py-5 rounded-lg w-full overflow-hidden">
        {/* Left Image */}
        <img
          src="https://r2.thesportsdb.com/images/media/team/logo/4jwa1i1599314931.png"
          className="absolute left-[-35] top-1/2 -translate-y-1/2 w-40 h-45 md:h-60 md:w-80 xl:w-120 xl:h-90 opacity-8 rounded-full z-0"
          alt="Belgium Logo"
        />

        {/* Right Image */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg"
          className="absolute right-[-35] top-1/2 -translate-y-1/2 w-40 h-45 md:h-60 md:w-80 xl:w-120 xl:h-90 opacity-8 rounded-full z-0"
          alt="Portugal Logo"
        />

        {/* Content */}
        <div className="relative z-10 text-sm font-semibold">Lusail Stadium</div>

        <div className="relative z-10 flex flex-row gap-8 md:gap-12">
          {/* Portugal */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-row gap-2 md:gap-4 items-center">
              <div className="avatar">
                <div className="w-8 md:w-10 rounded-full overflow-hidden">
                  <img src="https://r2.thesportsdb.com/images/media/team/logo/4jwa1i1599314931.png" alt="Portugal" />
                </div>
              </div>
              <div className="font-semibold text-xs md:text-lg">Portugal</div>
            </div>
            <div className="text-[#636363] text-xs">
              <p>C. Ronaldo 15</p>
              <p>C. Ronaldo 15</p>
            </div>
          </div>

          {/* Score */}
          <div className="flex flex-row gap-2 md:gap-3 mt-2 text-sm md:text-base font-semibold">
            <div>2</div>
            <div className="text-[#A4A4A4]">FT</div>
            <div>3</div>
          </div>

          {/* Belgium */}
          <div className="flex flex-col gap-2 md:gap-4">
            <div className="flex flex-row gap-2 md:gap-4 items-center">
              <div className="avatar">
                <div className="w-8 md:w-10 rounded-full overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" alt="Belgium" />
                </div>
              </div>
              <div className="font-semibold text-xs md:text-lg">Belgium</div>
            </div>
            <div className="text-[#636363] text-xs">
              <p>R. Lukaku 42’</p>
              <p>E. Hazard 58’</p>
              <p>E. Hazard 90’+3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
