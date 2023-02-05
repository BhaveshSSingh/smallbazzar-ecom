import React from "react";
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { TbStars } from "react-icons/tb";

const StarFilter = () => {
  return (
    <>
      <div>
        <div className=" flex items-center space-x-2 pb-8">
          <TbStars size={20} />
          <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
            Stars
          </p>
        </div>
        <div class="flex items-center mb-5 cursor-pointer">
          <BsStar className="m-1" />
          <BsFillStarFill className="m-1" />

          <BsFillStarFill className="m-1" />
          <BsFillStarFill className="m-1" />
          <BsFillStarFill className="m-1" />
          <BsFillStarFill className="m-1" />
        </div>
      </div>
    </>
  );
};

export default StarFilter;
