import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { londonData } from "../data";

const London = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  const expandClick = () => {
    setToggle(true);
  };
  const hideClick = () => {
    setToggle(false);
  };
  return (
    <div className=" bg-[#f4f4fd] h-[100%] px-20">
      <Navbar />
      {toggle === false ? (
        <div className="flex flex-wrap pb-4 justify-center gap-10 mt-3">
          {londonData.slice(0, 6).map((item) => (
            <Card item={item} key={item.area} />
          ))}
          <button
            onClick={expandClick}
            className=" px-3 py-2 bg-blue-800 text-white font-semibold rounded-2xl"
          >
            Show More
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap pb-4 justify-center gap-10 mt-3">
          {londonData.map((item) => (
            <Card item={item} />
          ))}
          <button
            onClick={hideClick}
            className=" px-3 py-2 bg-blue-800 text-white font-semibold rounded-2xl"
          >
            Show Less
          </button>
        </div>
      )}

      <div></div>
    </div>
  );
};

export default London;
