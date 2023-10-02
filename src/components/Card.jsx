import { TbDimensions } from "react-icons/tb";
import { BiMap, BiBuildings, BiBed, BiBath } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Card = ({ item }) => {
  return (
    <div>
      <>
        <div className="  flex flex-col border bg-white  w-[350px] p-2 shadow rounded-xl ">
          <div className="  absolute z-20 flex justify-between w-[300px] items-center ml-4 mt-3  ">
            <button className=" shadow bg-white text-blue-800 font-semibold py-1 px-2 rounded-3xl text-sm">
              For Rent
            </button>
            <AiOutlineHeart className=" bg-white text-3xl text-blue-800 p-2 rounded-full " />
          </div>
          <div className="">
            <img
              className=" relative rounded-xl h-52 w-full  "
              src={item.image_link}
              alt=""
            />
          </div>
          {item.label === true ? (
            <div className=" z-20 absolute bg-blue-800 rounded-r-lg py-[1px] text-white font-semibold bottom-1/3 px-5">
              popular
            </div>
          ) : null}

          <section>
            <p className=" flex text-xs ml-2 mt-3 font-semibold items-center gap-1">
              <BiMap className=" text-yellow-800" />
              {item.address}
            </p>
            <div className="  my-2 mb-3 flex justify-between mx-2">
              <p className=" flex flex-wrap leading-6 text-gray-800 font-semibold text-lg max-w-[240px]">
                {item.houseInfo}
              </p>
            </div>
            <div className=" justify-between  flex mt-1 mx-4 h-14">
              <div className=" flex flex-col   gap-1  ">
                <BiBuildings className=" text-gray-600" />
                <p className=" text-gray-600 text-xs">{item.room} Room</p>
              </div>
              <div className=" flex flex-col   gap-1">
                <BiBed className="  text-gray-600" />
                <p className=" text-gray-600 text-xs ">{item.bed} Bed</p>
              </div>

              <div className=" flex flex-col   gap-1">
                <BiBath className=" text-gray-600" />

                <p className=" text-gray-600 text-xs"> {item.bath} Bath</p>
              </div>
              <div className="flex flex-col   gap-1 ">
                <TbDimensions className=" text-gray-600" />

                <p className=" text-gray-600 text-xs">{item.area} sft</p>
              </div>
            </div>
            <div className=" flex mx-1 items-center gap-1  justify-between mb-1 ">
              <p className=" text-blue-800 text-lg font-semibold">
                ${item.rent}{" "}
                <span className=" text-gray-600 text-sm">/month</span>
              </p>
              <div className=" flex items-center gap-2">
                <button className=" border border-blue-800  py-2 px-2 rounded-full text-blue-800 font-semibold text-xs ">
                  Read More
                </button>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Card;
