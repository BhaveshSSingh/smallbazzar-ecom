import { useContext } from "react";
import {
  BsFillMoonStarsFill,
  BsFillCartFill,
  BsFillCloudSunFill,
  BsFillSuitHeartFill,
} from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import Search from "./Search";

const Nav = () => {
  const { handleThemeSwitch, theme } = useContext(ThemeContext);

  return (
    <>
      <div className="z-50 header sticky top-0 bg-white shadow-md dark:shadow-lg flex items-center justify-between px-2 py-1 dark:bg-gray-800 dark:text-gray-100">
        <span className="w-3/12 underline flex items-center">
          <FiShoppingBag size={40} className="text-blue-600" />
        </span>

        <Search />
        <div className="flex justify-center items-center">
          <div className=" text-blue-600 ring-2 ring-red-400   rounded-full p-1 w-10 h-10">
            <BsFillCartFill size={30} />
          </div>
          <div className="m-3 text-red-600 ring-2 ring-red-400  rounded-full p-[5px] w-10 h-10">
            <BsFillSuitHeartFill size={30} />
          </div>
          {/* <Link to="/profile"> */}
          <div className="w-10 h-10  ring-4 ring-pink-400 p-1 object-fill rounded-full text-gray-100 bg-blue-500 flex  justify-center mx-2">
            <div className="text-2xl">B</div>
          </div>
          {/* </Link> */}
          <div className="pr-6 cursor-pointer">
            {theme === "light" ? (
              <BsFillMoonStarsFill
                size={30}
                className="ml-2 mr-[-25px] ring-4 ring-slate-400  text-slate-700  rounded-full p-1 w-10 h-10 shadow-lg shadow-gray-400"
                onClick={handleThemeSwitch}
              />
            ) : (
              <BsFillCloudSunFill
                size={30}
                className="ml-2 mr-[-25px] text-yellow-400
               ring-4 ring-orange-300 rounded-full p-1 w-10 h-10 shadow-lg shadow-slate-600
                "
                onClick={handleThemeSwitch}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
