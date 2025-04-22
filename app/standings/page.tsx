import React from "react";
import Table from "./Table";
import FollowClub from "./FollowClub";

const page = () => {
  return (
    <div className="max-w-[18rem] min-w-full mt-2 px-3 py-3 bg-white dark:bg-[#212227] dark:text-white rounded-md">
      <Table />
      <div className="divider my-5 lg:my-3 text-[#EFEFEF]" />
      <FollowClub />
    </div>
  );
};

export default page;
