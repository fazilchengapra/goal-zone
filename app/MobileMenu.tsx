import React from "react";
import { GiShoppingCart } from "react-icons/gi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import { club, leagues, menu } from "@/public/assets/constant/sideBarMenu";

const MobileMenu = () => {
  return (
    <div className="py-2 px-3 block lg:hidden bg-[#1B1C21] text-[#A4A4A4] overflow-auto h-[90%]">
      <div className="flex flex-col gap-4">
        <div className="relative block md:hidden mt-2">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoSearchOutline size={20} className="text-gray-600" />
          </div>
          <input
            type="text"
            placeholder="Type to search..."
            className="text-sm bg-[#2E3034]  w-full rounded-md pl-10 py-2 focus:outline-none border-none"
          />
        </div>
        <div className="avatar items-center flex flex-row gap-3">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>

          <p className="text-[#A4A4A4] font-medium capitalize">John</p>
        </div>
        <div className="flex gap-3 pb-1 ">
          <GiShoppingCart size={30} color="#A4A4A4" />
          <p>Go to Cart</p>
        </div>

        <div className="flex gap-3 pb-1 ">
          <IoMdNotificationsOutline size={30} color="#A4A4A4" />
          <p>See Notification</p>
        </div>
      </div>
      <div className="mt-3 mb-3 w-1/2 h-[2px] rounded-md bg-[#A4A4A4]"></div>
      <div className="flex flex-col gap-4">
        {menu.map((e) => (
          <div className="flex gap-3 pb-1 " key={e.title}>
            <div className="text-[#A4A4A4]">{<e.icon size={25}/>}</div>
            <p>{e.title}</p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="collapse collapse-arrow bg-[#1B1C21]">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title font-semibold">Football League</div>
          <div className="collapse-content">
            {leagues.map((e) => (
              <div className="pb-5" key={e.title}>
                <div className="flex gap-3 items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={e.src} alt="logo" />
                    </div>
                  </div>
                  <div>
                    <p>{e.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 ">
        <div className="collapse collapse-arrow bg-[#1B1C21]">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title font-semibold">Favorite club</div>
          <div className="collapse-content">
            {club.map((e) => (
              <div className="pb-5" key={e.name}>
                <div className="flex gap-3 items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <img src={e.src} alt="logo" />
                    </div>
                  </div>
                  <div>
                    <p>{e.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
