import React from "react";
import { CiCircleInfo } from "react-icons/ci";
import { BsGraphUp } from "react-icons/bs";

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
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://r2.thesportsdb.com/images/media/team/logo/r7pn8c1726167467.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-sm">Argentina</div>
              </div>
            </td>
            <td>
              <div className="flex flex-col justify-center items-center">
                <div className="bg-[#EFEDF7] w-fit px-4 text-sm rounded-2xl font-semibold text-[#5742A9]">
                  2 - 2
                </div>
              </div>
            </td>
            <td>
              <div className="flex gap-3 items-center">
                <div className="avatar">
                  <div className="w-8 rounded-full">
                    <img
                      src="https://r2.thesportsdb.com/images/media/team/badge/fxijcp1726167035.png"
                      alt=""
                    />
                  </div>
                </div>
                <div className="text-sm">Italy</div>
              </div>
            </td>
            <td>
              <div className="flex flex-row items-center">
                <div className="w-[6rem] md:w-[7rem] badge bg-red-100 text-xs md:text-sm font-light text-red-600 px-2 py-1 h-fit lg:px-4 lg:py-2">
                  <p className=" min-w-auto">Full - Time</p>
                </div>
              </div>
            </td>

            <td>
              <p className="text-[#636363]">18 December 2022</p>
            </td>
            <td>
              <div className="flex flex-row gap-4 items-center">
                <CiCircleInfo size={25} color="#636363" />
                <BsGraphUp size={25} color="#636363" />
              </div>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MatchDetials;
