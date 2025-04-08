import React from "react";
import List from "./List";

const page = () => {
  return (
    <div className="py-5 px-2 bg-white rounded-md">
      <div className="font-semibold">📰 All News and Transfer Today</div>
      <div className="tabs tabs-border my-5 tabs-md flex flex-row flex-nowrap">
        {["All News", "Hot News", "Transfer"].map((e) => (
          <input
            key={e}
            type="radio"
            name="my_tabs_2"
            className="tab before:text-[#5742A9]"
            aria-label={e}
            defaultChecked={e === "All News"}
          />
        ))}
      </div>
      <List />
    </div>
  );
};

export default page;
