import { useState } from "react";
import { ImPriceTag } from "react-icons/im";
import { useDispatch } from "react-redux";
import { priceRange } from "../../app/features/productSlice";

const SliderFilter = () => {
  const [value, setValue] = useState(1000);

  const dispatch = useDispatch();

  const handleSlider = (e) => {
    setValue(e.target.value);
    dispatch(priceRange(e.target.value));
  };

  return (
    <>
      <div className=" flex items-center space-x-2">
        <ImPriceTag />
        <p className="  lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
          Price
        </p>
      </div>
      <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap pb-9">
        <h1 className="font-bold text-gray-700 ">$0 - ${value}</h1>
        <input
          id="default-range"
          type="range"
          value={value}
          onChange={handleSlider}
          min={0}
          max={1000}
          className="w-full  h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />{" "}
      </div>
    </>
  );
};

export default SliderFilter;
