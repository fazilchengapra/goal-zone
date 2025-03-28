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

export const leagues = [
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

export const club = [
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
