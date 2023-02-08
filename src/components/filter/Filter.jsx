import React, { useEffect, useState } from "react";
import { HiOutlineFilter } from "react-icons/hi";
import StarFilter from "./StarFilter";
import SliderFilter from "./SliderFilter";
import CategoryFilter from "./CategoryFilter";
import { useSelector } from "react-redux";

const Filter = () => {
  const [showFilters, setShowfilters] = useState(false);
  const [categories, setCategories] = useState([]);

  const prodCategories = useSelector((store) => store.products.productList);

  const allCategories = () => {
    let newVal = prodCategories.map((cat) => cat.category);
    newVal = ["all", ...new Set(newVal)];
    setCategories(newVal);
    return newVal;
  };

  useEffect(() => {
    allCategories();
  }, [prodCategories]);

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
          className="cursor-pointer mt-6 block sm:hidden hover:bg-gray-700  focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2 w-full bg-gray-800 flex text-base leading-4 font-normal text-white justify-center items-center p-2"
        >
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
          <CategoryFilter categories={categories} />
        </div>
        <hr className=" bg-gray-200 lg:w-6/12 w-full md:my-10 my-8" />
        <div>
          <SliderFilter />
        </div>
        <StarFilter />
      </div>
    </div>
  );
};

export default Filter;
