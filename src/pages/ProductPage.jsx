import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../app/features/cartSlice";
import { StarRating } from "../components/StarRating";
import Review from "./Review";

const ProductPage = () => {
  const [count, setCount] = useState(1);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const minusCount = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };

  const clickedProduct = useSelector((store) => store.products.selectedProduct);

  const dispatch = useDispatch();
  const cartBtnHandler = () => {
    dispatch(
      addToCart({
        id: clickedProduct.id,
        image: clickedProduct.image,
        category: clickedProduct.category,
        title: clickedProduct.title,
        price: clickedProduct.price,
        quantity: count,
      })
    );
  };

  return (
    <>
      <div className="border  m-2 border-gray-800 p-2 rounded-lg">
        <Link to="/home">
          <button
            type="button"
            className="text-gray-700 border border-gray-700 hover:bg-gray-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-gray-500 dark:text-gray-500 dark:hover:text-white dark:focus:ring-gray-800"
          >
            <BiArrowBack />
          </button>
        </Link>
      </div>
      <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
            <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center">
              <img src={clickedProduct?.image} alt="Wooden Chair Previw" />
            </div>
          </div>

          <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
            <p className=" focus:outline-none uppercase focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">
              Category / {clickedProduct?.category}
            </p>
            <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
              {clickedProduct?.title}
            </h2>

            <div className=" flex flex-row items-center   mt-5">
              {clickedProduct?.rating.rate}
              <StarRating rating={clickedProduct?.rating} />
              <p className="pl-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">
                ({clickedProduct?.rating?.count} reviews)
              </p>
            </div>

            <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
              {clickedProduct?.description}
            </p>
            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              ${clickedProduct?.price}
            </p>

            <div className="lg:mt-11 mt-10">
              <div className="flex flex-row justify-between">
                <p className=" font-medium text-base leading-4 text-gray-600">
                  Select quantity
                </p>
                <div className="flex">
                  <span
                    onClick={minusCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1"
                  >
                    -
                  </span>
                  <input
                    id="counter"
                    aria-label="input"
                    className="border border-gray-300 h-full text-center w-14 pb-1"
                    type="text"
                    value={count}
                    onChange={(e) => e.target.value}
                  />
                  <span
                    onClick={addCount}
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 "
                  >
                    +
                  </span>
                </div>
              </div>

              <hr className=" bg-gray-200 w-full mt-4" />
            </div>
            <button
              className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6"
              onClick={cartBtnHandler}
            >
              Add to cart
            </button>
          </div>
        </div>

        <Review />
      </div>
    </>
  );
};

export default ProductPage;
