import React from "react";
import RightCard from "./rightcard.jsx";

const RightContent = (props) => {
  return (
    <div id='right' className="h-full flex rounded-4xl overflow-x-auto flex-nowrap p-6 gap-10 w-2/3">
      {props.users.map(function(elem, index) {
        return <RightCard key={index} id={index} img={elem.img} tag={elem.tag} color={elem.color}/>
     })}
    </div>
  )
}

export default RightContent;
