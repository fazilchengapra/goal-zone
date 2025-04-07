import React from "react";
import JerseyCard from "./JerseyCard";

const List = () => {
  return (
    <div className="my-5 flex flex-wrap gap-2 justify-center">
      {[...Array(10)].map((_, i) => (
        <JerseyCard key={i} />
      ))}
    </div>
  );
};

export default List;
