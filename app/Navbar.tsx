"use client";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import Image from "next/image";
import Logo from '@/public/assets/Logo.svg'

const Navbar = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);
  return (
    !loading && (
      <div className="w-full">
        <div className="navbar bg-base-100 shadow-sm">
        <div className=" lg:hidden flex-1">
              <Image
                src={Logo}
                alt="logo"
                className={`w-24 h-auto select-none `}
              />
            </div>
          <div className="ml-1 md:ml-5 flex-3 hidden md:block">
            <div className="relative pr-1 md:pr-3">
              <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                <IoSearchOutline size={20} className="text-gray-600" />
              </div>
              <input
                type="text"
                placeholder="Type to search..."
                className="text-sm bg-[#E6E6E6] lg:w-full md:w-full md:max-w-[350px] lg:max-w-[548px] w-auto rounded-md pl-10 py-2 focus:outline-none border-none"
              />
            </div>
          </div>

          

          <div className="flex gap-5 md:gap-4 items-center">
            <button
              type="button"
              className="btn bg-[#5742A9] text-white text-xs md:text-sm font-medium md:font-normal rounded-md py-1"
            >
              Go Premium
            </button>

            <GiShoppingCart
              className="hidden lg:block"
              size={30}
              color="#636363"
            />
            <IoMdNotificationsOutline
              className="hidden lg:block"
              size={30}
              color="#636363"
            />
            <IoSunnyOutline
              className="hidden lg:block"
              size={30}
              color="#636363"
            />
            <div className="dropdown dropdown-end hidden md:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-none"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <CiMenuBurger className="lg:hidden" size={20} />
          </div>
        </div>
      </div>
    )
  );
};

export default Navbar;
