import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { mumbaiData } from "../data";

const Mumbai = () => {
  const [toggle, setToggle] = useState(false);

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
          {mumbaiData.slice(0, 6).map((item) => (
            <Card item={item} key={item.area} />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap pb-4 justify-center gap-10 mt-3">
          {mumbaiData.map((item) => (
            <Card item={item} />
          ))}
        </div>
      )}

      <div className=" flex justify-center mb-4">
        {toggle === false ? (
          <button
            onClick={expandClick}
            className=" px-3 py-2 bg-blue-800  text-white font-semibold rounded-2xl"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={hideClick}
            className=" px-3 py-2 bg-blue-800 text-white font-semibold rounded-2xl"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Mumbai;
