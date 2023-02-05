import React, { useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import StarFilter from "./StarFilter";
import SliderFilter from "./SliderFilter";
import CategoryFilter from "./CategoryFilter";

const Filter = () => {
  const [showFilters, setShowfilters] = useState(true);

  const applyFilters = (e) => {
    setCheck({
      ...check,
      Electronics: false,
      Jewelery: false,
      MensClothing: false,
      WomensClothing: false,
    });
  };

  return (
    <div className="2xl:container 2xl:mx-auto ">
      <div className=" md:py-12 lg:px-20 md:px-6 py-9 px-4">
        <div className=" flex justify-between items-center">
          <button
            onClick={() => setShowfilters(!showFilters)}
            className=" cursor-pointer sm:flex hidden hover:bg-gray-700  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-4 px-6 bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center "
          >
            <HiOutlineFilter />
            Filters
          </button>
        </div>

        <button
          onClick={() => setShowfilters(!showFilters)}
          className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center"
        >
          <HiOutlineFilter />
          Filters
        </button>
      </div>

      <div
        id="filterSection"
        className={
          "relative md:py-2 lg:px-20 md:px-6 py-9 px-4 bg-gray-50 w-full " +
          (showFilters ? "block" : "hidden")
        }
      >
        <div>
          <CategoryFilter applyFilters={applyFilters} />
        </div>

        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />

        <div>
          <SliderFilter />
        </div>

        {/* Star */}
        <StarFilter />

        <div className="px-0 pt-1 mt-3 w-full md:w-auto md:mt-0 md:py-1 lg:px-20 md:px-6">
          <button
            onClick={applyFilters}
            className="w-full hover:bg-gray-700 focus:ring focus:ring-offset-2 focus:ring-gray-800 text-base leading-4 font-medium py-4 px-10 text-white bg-gray-800"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
