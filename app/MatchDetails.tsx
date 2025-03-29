import React from "react";

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
            defaultChecked={ e === 'Latest Match'}
          />
        ))}
      </div>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
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
