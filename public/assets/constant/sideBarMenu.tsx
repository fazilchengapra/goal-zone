import { BiTv } from "react-icons/bi";
import { CiShop } from "react-icons/ci";
import { GoSortAsc } from "react-icons/go";
import { HiOutlineVideoCamera, HiOutlineNewspaper } from "react-icons/hi2";
import { RiDashboardLine } from "react-icons/ri";

export const menu = [
  {
    title: "Dashboard",
    icon: (
      <RiDashboardLine
        size={25}
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
      <GoSortAsc size={25} className="text-[#636363] group-hover:text-white" />
    ),
  },
  {
    title: "Highlights",
    icon: <BiTv size={25} className="text-[#636363] group-hover:text-white" />,
  },
  {
    title: "Shop",
    icon: (
      <CiShop size={25} className="text-[#636363] group-hover:text-white" />
    ),
  },
  {
    title: "News",
    icon: (
      <HiOutlineNewspaper
        size={25}
        className="text-[#636363] group-hover:text-white"
      />
    ),
  },
];
