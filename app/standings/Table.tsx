import { premierLeague } from "@/public/assets/constant/table";
import React from "react";
import { FcOk } from "react-icons/fc";
import { IoMdCloseCircle } from "react-icons/io";

function Table() {
  return (
    <div className="">
      <div className="font-semibold my-3">🏆 Standings</div>
      <div className="flex flex-row gap-2 items-center">
        <div className="flex  flex-row gap-2">
          <div>
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/510px-Flag_of_England.svg.png" />
              </div>
            </div>
          </div>
          <div>
            {" "}
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src="data:image/png;base64,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" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-none">
          <select
            defaultValue="Premier League"
            className="min-w-40 text-sm select select-ghost focus:outline-none"
          >
            <option>Premier League</option>
            <option>Inter</option>
            <option>Poppins</option>
            <option>Raleway</option>
          </select>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full mt-3">
          {/* head */}
          <thead>
            <tr className="text-xs text-[#636363] font-normal border-none">
              <th className=" w-6/12">Club</th>
              <th className=" w-1/12">W</th>
              <th className=" w-1/12">D</th>
              <th className=" w-1/12">L</th>
              <th className=" w-1/12">Poin</th>
              <th className=" w-2/12">Last Match</th>
            </tr>
          </thead>
          <tbody className="space-y-2">
            {premierLeague.map((e, index) => (
              <tr
                className=" rounded-md overflow-hidden border-none"
                key={e.team}
              >
                <td>
                  <div className="flex flex-row gap-4 items-center">
                    <div>{index + 1}</div>
                    <div className="avatar">
                      <div className="w-8 rounded-full">
                        <img src={e.logo} />
                      </div>
                    </div>
                    <div>{e.team}</div>
                  </div>
                </td>
                <td>{e.won}</td>
                <td>{e.drawn}</td>
                <td>{e.lost}</td>
                <td>{e.points}</td>
                <td>
                  <div className="flex flex-row gap-1">
                    <FcOk size={24} />
                    <FcOk size={24} />
                    <FcOk size={24} />
                    <FcOk size={24} />
                    <IoMdCloseCircle size={24} className="text-[#FF0000]" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-4 mx-4">
          <div className="flex flex-row gap-6 items-center">
            <div className="flex flex-row gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#5742A9]" />
              <div className="text-xs font-light">Champions League</div>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#560617]" />
              <div className="text-xs font-light">Europa League</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
