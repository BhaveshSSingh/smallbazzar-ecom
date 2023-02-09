import React, { useState } from "react";
import { BsFillStarFill } from "react-icons/bs";
import { TbStars } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { starRange } from "../../app/features/productSlice";

const StarFilter = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const dispatch = useDispatch();

  const starFilter = (ratingValue) => {
    setRating(ratingValue);
    dispatch(starRange(ratingValue));
  };
  return (
    <>
      <div>
        <div className=" flex items-center space-x-2 pb-8">
          <TbStars size={20} />
          <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
            Stars
          </p>
        </div>
        <div className="flex items-center mb-5 cursor-pointer">
          {Array.from({ length: 5 }, (ele, index) => {
            const ratingValue = index + 1;

            return (
              <label className="m-1">
                <input
                  type="radio"
                  value={ratingValue}
                  className="hidden"
                  onClick={() => starFilter(ratingValue)}
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
          })}
        </div>
      </div>
    </>
  );
};

export default StarFilter;
