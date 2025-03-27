"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/public/assets/Logo.svg";
import LogoSm from "@/public/assets/Tvit.svg";
import { MdMenuOpen } from "react-icons/md";
import { RiDashboardLine } from "react-icons/ri";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { GoSortAsc } from "react-icons/go";
import { BiTv } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const menuOp = useSelector((state:{sideBar:{value:boolean}}) => state.sideBar.value)
  console.log(menuOp)
  const menu = [
    {
      title: "Dashboard",
      icon: (
        <RiDashboardLine
          size={openMenu ? 20 : 25}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
    {
      title: "Live Football",
      icon: (
        <HiOutlineVideoCamera
          size={20}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
    {
      title: "Standings",
      icon: (
        <GoSortAsc
          size={openMenu ? 20 : 25}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
    {
      title: "Highlights",
      icon: (
        <BiTv
          size={openMenu ? 20 : 25}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
    {
      title: "Shop",
      icon: (
        <CiShop
          size={openMenu ? 20 : 25}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
    {
      title: "News",
      icon: (
        <HiOutlineNewspaper
          size={openMenu ? 20 : 25}
          className="text-[#636363] group-hover:text-white"
        />
      ),
    },
  ];

  const leagues = [
    {
      src: "https://media.api-sports.io/football/leagues/4.png",
      title: "Euro Championship",
    },
    {
      src: "https://media.api-sports.io/football/leagues/2.png",
      title: "UEFA Champions League",
    },
    {
      src: "https://media.api-sports.io/football/leagues/39.png",
      title: "Premier League",
    },
    {
      src: "https://media.api-sports.io/football/leagues/140.png",
      title: "La Liga",
    },
    {
      src: "https://media.api-sports.io/football/leagues/186.png",
      title: "Ligue 1",
    },
  ];

  const club = [
    {
      name: "Chelsea FC",
      src: "https://media.api-sports.io/football/teams/49.png",
    },
    {
      name: "Manchester City",
      src: "https://media.api-sports.io/football/teams/50.png",
    },
    {
      name: "Bayern Munchen",
      src: "https://media.api-sports.io/football/teams/157.png",
    },
  ];

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

      <div className="overflow-y-scroll scroll-smooth h-[calc(100%-30px)]">
        <div className="mt-10">
          <p className="uppercase text-xs font-thin text-[#636363]">menu</p>
          <div className="mt-4">
            {menu.map((item) => (
              <div
                key={item.title}
                className="group flex gap-2 items-center py-2 cursor-pointer hover:bg-[#5742A9] hover:pl-5 transition-all w-[90%] rounded-md"
              >
                {item.icon}
                {openMenu && (
                  <p className="text-xs text-[#636363] group-hover:text-white">
                    {item.title}
                  </p>
                )}
              </div>
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
                  <div className={`${openMenu ? 'w-10' : 'w-8'}`}>
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
