import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { TbStars } from "react-icons/tb";
import { StarRating } from "../StarRating";

const StarFilter = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const ratingFilter = Array.from({ length: 5 }, (ele, index) => {
    const ratingValue = index + 1;

    return (
      <label className="m-1">
        <input
          type="radio"
          value={ratingValue}
          className="hidden"
          onClick={() => setRating(ratingValue)}
        />
        <BsFillStarFill
          onMouseEnter={() => setHover(ratingValue)}
          onMouseLeave={() => setHover(null)}
          className={`inline cursor-pointer ${
            ratingValue <= (hover || rating)
              ? "text-orange-400"
              : "text-gray-400"
          } `}
        />
      </label>
    );
  });

  return (
    <>
      <div>
        <div className=" flex items-center space-x-2 pb-8">
          <TbStars size={20} />
          <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
            Stars
          </p>
        </div>
        <div class="flex items-center mb-5 cursor-pointer">{ratingFilter}</div>
      </div>
    </>
  );
};

export default StarFilter;
