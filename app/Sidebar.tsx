"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/assets/Logo.svg";
import LogoSm from "@/public/assets/Tvit.svg";
import { MdMenuOpen } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { menu, leagues, club } from "@/public/assets/constant/sideBarMenu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const location = usePathname();

  return (
    <div
      className={`transition-all border-r-2 border-gray-200 bg-[#F6F6F4] hidden lg:block ${
        openMenu ? "w-[17rem]" : "w-[9rem]"
      } h-screen p-5 `}
    >
      <div className="flex justify-between items-center pb-3 transition-opacity duration-100">
        <Image
          src={Logo}
          alt="logo"
          className={`w-24 h-auto select-none ${
            openMenu ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <Image
          src={LogoSm}
          alt="logo"
          className={`w-6 h-auto select-none ${
            !openMenu ? "opacity-100" : "opacity-0 hidden"
          }`}
        />
        <MdMenuOpen
          className={`cursor-pointer ${!openMenu && "rotate-180"}`}
          color="#5742A9"
          size={30}
          onClick={() => setOpenMenu(!openMenu)}
        />
      </div>

      <div className="overflow-y-scroll scroll-smooth h-[calc(100%-30px)] custom-scrollbar">
        <div className="mt-10">
          <p className="uppercase text-xs font-thin text-[#636363]">menu</p>
          <div className="mt-4">
            {menu.map((item) => (
              <Link key={item.title} href={item.path}>
                <div
                  className="group flex gap-2 items-center py-2 cursor-pointer hover:bg-[#5742A9] hover:pl-5 transition-all w-[90%] rounded-md"
                >
                  <item.icon
                    size={25}
                    className={`transition-colors ${
                      location === item.path
                        ? "text-[#5742A9]"
                        : "text-[#636363]"
                    } group-hover:text-white`}
                  />
                  {openMenu && (
                    <p
                      className={`text-xs ${
                        location === item.path
                          ? "text-[#5742A9] font-medium"
                          : "text-[#636363]"
                      } group-hover:text-white`}
                    >
                      {item.title}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <p className="uppercase text-xs font-thin text-[#636363]">
            Football League
          </p>

          <div className="mt-5 ">
            {leagues.map((e) => (
              <div
                key={e.title}
                className="hover:pl-2 mt-3 cursor-pointer flex items-center gap-2 py-1 hover:bg-gray-200 transition-all hover:rounded-md"
              >
                <div className="avatar mt-2">
                  <div className={`${openMenu ? "w-10" : "w-8"}`}>
                    <img src={e.src} alt="logo" className="" />
                  </div>
                </div>
                {openMenu && (
                  <p className="text-xs text-[#100F0F]">{e.title}</p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="uppercase text-xs font-thin text-[#636363]">
              Favorite club
            </p>

            <div className="mt-5 ">
              {club.map((e) => (
                <div
                  key={e.name}
                  className={`mt-3 cursor-pointer grid hover:pl-2 ${
                    openMenu ? "grid-cols-6" : "grid-cols-3"
                  } items-center gap-2 py-1 hover:bg-gray-200 transition-all hover:rounded-md`}
                >
                  <div
                    className={`avatar mt-2 ${
                      openMenu ? "col-span-1" : "col-span-2"
                    }`}
                  >
                    <div className="w-8 rounded-full">
                      <img src={e.src} alt="logo" />
                    </div>
                  </div>
                  {openMenu && (
                    <p className="text-xs text-[#100F0F] col-span-4">
                      {e.name}
                    </p>
                  )}
                  <div className="items-end  col-span-1">
                    <FaStar color="#5742A9" size={12} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
