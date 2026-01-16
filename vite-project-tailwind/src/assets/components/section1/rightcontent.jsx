import React from "react";
import RightCard from "./rightcard.jsx";

const RightContent = (props) => {
  return (
    <div className="h-full w-2/3 flex overflow-x-auto flex-nowrap bg-blue-600 p-10 gap-10">
      {props.users.map((elem, index) => (
        <RightCard key={index} img={elem.img} />
      ))}
    </div>
  );
};

export default RightContent;
