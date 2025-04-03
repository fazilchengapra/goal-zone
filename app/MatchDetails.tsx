import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";
import { match } from "@/public/assets/constant/match";

const MatchDetials = () => {
  return (
    <div className="w-full overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
      <p className="mt-5 mx-5 text-md font-semibold">⚽ Football Match</p>
      <div className="tabs tabs-border my-5 ml-3 tabs-md flex flex-row flex-nowrap">
        {[
          "Latest Match",
          "Coming Match",
          "Pre-season",
          "Live Games",
          "Fun Football",
        ].map((e) => (
          <input
            key={e}
            type="radio"
            name="my_tabs_2"
            className="tab before:text-[#5742A9]"
            aria-label={e}
            defaultChecked={e === "Latest Match"}
          />
        ))}
      </div>
      <table className="table">
        <tbody>
          {match.map((e) => (
            <tr key={e.date + e.team1.name+ e.team1.score}>
              <td>
                <div className="flex gap-3 items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        src={e.team1.logo}
                        alt="logo"
                      />
                    </div>
                  </div>
                  <div className="text-sm">{e.team1.name}</div>
                </div>
              </td>
              <td>
                <div className="flex flex-col justify-center items-center min-w-20">
                  <div className="bg-[#EFEDF7] px-4 text-sm rounded-2xl font-semibold text-[#5742A9]">
                    {`${e.team1.score} - ${e.team2.score}`}
                  </div>
                </div>
              </td>
              <td>
                <div className="flex gap-3 items-center">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img
                        src={e.team2.logo}
                        alt='logo'
                      />
                    </div>
                  </div>
                  <div className="text-sm">{e.team2.name}</div>
                </div>
              </td>
              <td>
                <div className="flex flex-row items-center">
                  <div className="w-[6rem] md:w-[7rem] badge bg-red-100 text-xs md:text-sm font-light text-red-600 px-2 py-1 h-fit lg:px-4 lg:py-2">
                    <p className=" min-w-auto">{e.statusText}</p>
                  </div>
                </div>
              </td>

              <td>
                <div><p className="text-[#636363] w-[8rem]">18 December 2022</p></div>
              </td>
              <td>
                <div className="flex flex-row gap-4 items-center">
                  <CiCircleInfo size={25} color="#636363" />
                  <BsGraphUp size={25} color="#636363" />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MatchDetials;
