import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pgInfo = location.pathname.split("/")[2];
  const handleNyc = () => {
    navigate("/");
  };
  const handleMumbai = () => {
    navigate("/page/2");
  };
  const handleParis = () => {
    navigate("/page/3");
  };
  const handleLdn = () => {
    navigate("/page/4");
  };
  return (
    <div className=" bg-inherit">
      <section className=" flex flex-col text-center">
        <h1 className=" text-4xl font-bold my-2 text-gray-600">
          Featured Listed Property
        </h1>
        <p className=" font-semibold text-gray-800 text-sm mt-3">
          Real estate can be bought,sold,leased, or rented, and can be a
        </p>
        <p className=" font-semibold text-gray-800 mb-10 text-sm">
          valuable investment opportunity. The value of real estate can be...
        </p>
      </section>
      <section className=" flex justify-between mx-8">
        <div className=" gap-3 flex ">
          {pgInfo === undefined ? (
            <button
              onClick={handleNyc}
              className=" bg-blue-800 p-2 text-sm font-semibold px-3 rounded-3xl text-white"
            >
              New York
            </button>
          ) : (
            <button
              onClick={handleNyc}
              className=" bg-gray-200 p-2 text-gray-700  text-sm font-semibold  px-3 rounded-3xl text"
            >
              New York
            </button>
          )}
          {pgInfo == 2 ? (
            <button
              onClick={handleMumbai}
              className=" bg-blue-800 text-sm font-semibold p-2 px-3 rounded-3xl text-white"
            >
              Mumbai
            </button>
          ) : (
            <button
              onClick={handleMumbai}
              className=" bg-gray-200 text-gray-700 p-2 px-3 rounded-3xl text-sm font-semibold"
            >
              Mumbai
            </button>
          )}
          {pgInfo == 3 ? (
            <button
              onClick={handleParis}
              className=" bg-blue-800 text-sm font-semibold p-2 px-3 rounded-3xl text-white"
            >
              Paris
            </button>
          ) : (
            <button
              onClick={handleParis}
              className=" bg-gray-200 text-gray-700 text-sm font-semibold p-2 px-3 rounded-3xl text"
            >
              Paris
            </button>
          )}
          {pgInfo == 4 ? (
            <button
              onClick={handleLdn}
              className=" bg-blue-800 text-sm font-semibold p-2 px-3 rounded-3xl text-white"
            >
              London
            </button>
          ) : (
            <button
              onClick={handleLdn}
              className=" bg-gray-200 text-gray-700 text-sm font-semibold p-2 px-3 rounded-3xl text"
            >
              London
            </button>
          )}
        </div>
        <div className=" border text-sm font-semibold border-blue-600 text-blue-600 p-2  px-3 rounded-3xl text">
          View All
        </div>
      </section>
    </div>
  );
};

export default Navbar;
