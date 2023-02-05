import { BsCartFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Search from "./Search";

const Nav = () => {
  const cart = useSelector((store) => store.cart.cart);

  return (
    <>
      <div className="z-50 header sticky top-0 bg-white shadow-md dark:shadow-lg flex items-center justify-between px-2 py-1 dark:bg-gray-800 dark:text-gray-100">
        <span className="w-3/12">
          <Link to="/home" className="flex items-center">
            <FiShoppingBag size={40} className="text-gray-600" />
            <p className="underline decoration-slate-500 font-extrabold">
              Small Bazzar
            </p>
          </Link>
        </span>

        <Search />
        <div className="flex justify-center items-center">
          <Link to="/cart">
            {cart.length === 0 ? (
              ""
            ) : (
              <div className="bg-red-400 rounded-full text-white w-7 px-2 m-1">
                {cart.length}
              </div>
            )}
            <div className="pr-3 text-gray-800 z-10 mt-[-8px]">
              <BsCartFill size={30} />
            </div>
          </Link>

          <Link to="/profile">
            <div className="w-10 h-10  ring-4 ring-slate-400 p-1 object-fill rounded-full text-gray-100 bg-gray-500 flex  justify-center mx-2">
              <div className="text-2xl">B</div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
