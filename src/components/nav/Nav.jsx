import { useContext } from "react";
import {
  BsFillMoonStarsFill,
  BsHeart,
  BsFillCloudSunFill,
  BsCart,
} from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import Search from "./Search";

const Nav = () => {
  const { handleThemeSwitch, theme } = useContext(ThemeContext);

  return (
    <>
      <div className="z-50 header sticky top-0 bg-white shadow-md dark:shadow-lg flex items-center justify-between px-2 py-1 dark:bg-gray-800 dark:text-gray-100">
        <span className="w-3/12 underline flex items-center">
          <Link to="/home">
            <FiShoppingBag size={40} className="text-gray-600" />
          </Link>
        </span>

        <Search />
        <div className="flex justify-center items-center">
          <Link to="/cart">
            <div className="    rounded-full p-1 w-10 h-10">
              <BsCart size={30} />
            </div>
          </Link>
          {/* <div className="m-3 rounded-full p-[5px] w-10 h-10">
            <BsHeart size={30} />
          </div> */}
          {/* <Link to="/profile"> */}
          <div className="w-10 h-10  ring-4 ring-slate-400 p-1 object-fill rounded-full text-gray-100 bg-gray-500 flex  justify-center mx-2">
            <div className="text-2xl">B</div>
          </div>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
