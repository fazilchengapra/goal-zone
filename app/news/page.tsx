import React from "react";
import List from "./List";

const page = () => {
  return (
    <div className="py-5 px-2 bg-white rounded-md dark:bg-[#212227] dark:text-white ">
      <div className="font-semibold">📰 All News and Transfer Today</div>
      <div className="tabs tabs-border my-5 tabs-md flex flex-row flex-nowrap">
        {["All News", "Hot News", "Transfer"].map((e) => (
          <input
            key={e}
            type="radio"
            name="my_tabs_2"
            className="tab before:text-[#5742A9] dark:before:text-[#5742A9] dark:!text-[#A4A4A4] dark:hover:!text-white dark:checked:!text-white"
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
