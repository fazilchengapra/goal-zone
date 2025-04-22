"use client";
import { useState, useEffect } from "react";
import { IoSunnyOutline, IoSearchOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import { CiMenuBurger } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Logo from "@/public/assets/Logo.svg";
import MobileMenu from "./MobileMenu";
import { themeAction } from "./redux/slices/appSlice";
import { useDispatch, useSelector } from "react-redux";
import { IoMoonOutline } from "react-icons/io5";
import { RootState } from "./redux/store";

const Navbar = () => {
  const mode = useSelector((store:RootState) => store?.app?.theme);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    !loading && (
      <div className="w-full h-fit relative dark:bg-[#1B1C21]">
        {/* Navbar */}
        <nav className="navbar shadow-sm flex items-center justify-between px-4 z-50">
          {/* Logo (Mobile) */}
          <div className="lg:hidden">
            <Image src={Logo} alt="logo" className="w-24 h-auto select-none" />
          </div>

          {/* Search Bar (Hidden on Mobile) */}
          <div className="hidden md:block flex-1 ml-5 mr-2">
            <div className="relative w-full max-w-[548px]">
              <IoSearchOutline
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-[#A4A4A4]"
              />
              <input
                type="text"
                placeholder="Type to search..."
                className="text-sm dark:text-[#A4A4A4] bg-gray-200 dark:bg-[#2E3034] w-full rounded-md pl-10 py-2 focus:outline-none border-none"
              />
            </div>
          </div>

          {/* Icons & Profile */}
          <div className="flex items-center gap-5">
            <button className="btn bg-[#5742A9] dark:bg-[#F5C451] text-white dark:text-[#100F0F] border-none text-sm font-medium rounded-md py-1 ">
              Go Premium
            </button>

            {/* Icons (Hidden on Mobile) */}
            <GiShoppingCart
              className="hidden lg:block text-[#636363] dark:text-[#A4A4A4]"
              size={30}
            />
            <IoMdNotificationsOutline
              className="hidden lg:block text-[#636363] dark:text-[#A4A4A4]"
              size={30}
            />
            {mode === "dark" ? (
              <IoMoonOutline
                className="hidden lg:block text-[#636363] dark:text-[#A4A4A4]"
                size={30}
                onClick={() => dispatch(themeAction())}
              />
            ) : (
              <IoSunnyOutline
                className="hidden lg:block text-[#636363] dark:text-[#A4A4A4]"
                size={30}
                onClick={() => dispatch(themeAction())}
              />
            )}

            {/* Profile Dropdown */}
            <div className="dropdown dropdown-end hidden md:block">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar border-none"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="User Avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
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

            {/* Mobile Menu Toggle */}
            {openMenu ? (
              <IoCloseOutline
                className="lg:hidden cursor-pointer"
                size={24}
                onClick={() => setOpenMenu(!openMenu)}
              />
            ) : (
              <CiMenuBurger
                className="lg:hidden cursor-pointer"
                size={24}
                onClick={() => setOpenMenu(!openMenu)}
              />
            )}
          </div>
        </nav>

        {/* Mobile Menu with Overlay */}
        {openMenu && (
          <div
            className="fixed inset-0 bg-opacity-50 z-40"
            onClick={() => setOpenMenu(false)}
          >
            <div
              className="fixed top-16 left-0 h-full w-full bg-white shadow-lg transform transition-all duration-300"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
            >
              <MobileMenu />
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Navbar;
