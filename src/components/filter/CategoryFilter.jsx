import React, { useState } from "react";
import { TbCircleSquare } from "react-icons/tb";

const CategoryFilter = ({ applyFilters }) => {
  const [check, setCheck] = useState({
    Electronics: false,
    Jewelery: false,
    MensClothing: false,
    WomensClothing: false,
  });

  const { Electronics, Jewelery, MensClothing, WomensClothing } = check;

  const changeHandler = (e) => {
    setCheck({
      ...check,
      [e.target.name]: e.target.checked,
    });
  };

  return (
    <>
      {" "}
      <div className=" flex space-x-2">
        <TbCircleSquare />
        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 ">
          Category
        </p>
      </div>
      <div className=" md:flex md:space-x-6 mt-8 grid grid-cols-3 gap-y-8 flex-wrap">
        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
          <input
            className="w-4 h-4 mr-2"
            type="checkbox"
            id="Electronics"
            name="Electronics"
            value="Electronics"
            checked={Electronics}
            onChange={changeHandler}
          />
          <div className=" inline-block">
            <div className=" flex space-x-6 justify-center items-center">
              <label
                className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                htmlFor="Electronics"
              >
                Electronics
              </label>
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <input
            className="w-4 h-4 mr-2"
            type="checkbox"
            id="Jewelery"
            name="Jewelery"
            value="Jewelery"
            checked={Jewelery}
            onChange={changeHandler}
          />
          <div className=" inline-block">
            <div className=" flex space-x-6 justify-center items-center">
              <label
                className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                htmlFor="Jewelery"
              >
                Jewelery
              </label>
            </div>
          </div>
        </div>
        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-end">
          <input
            className="w-4 h-4 mr-2"
            type="checkbox"
            id="MensClothing"
            name="MensClothing"
            value="MensClothing"
            checked={MensClothing}
            onChange={changeHandler}
          />
          <div className=" inline-block">
            <div className=" flex space-x-6 justify-center items-center">
              <label
                className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                htmlFor="MensClothing"
              >
                Men's Clothing
              </label>
            </div>
          </div>
        </div>
        <div className=" flex space-x-2 md:justify-center md:items-center items-center justify-start">
          <input
            className="w-4 h-4 mr-2"
            type="checkbox"
            id="WomensClothing
"
            name="WomensClothing
"
            value="WomensClothing
"
            checked={WomensClothing}
            onChange={changeHandler}
          />
          <div className=" inline-block">
            <div className=" flex space-x-6 justify-center items-center">
              <label
                className=" mr-2 text-sm leading-3 font-normal text-gray-600"
                htmlFor="WomensClothing
"
              >
                Women's Clothing
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
