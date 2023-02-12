import { TbCircleSquare } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { clickedCategory } from "../../app/features/productSlice";

const CategoryFilter = ({ categories }) => {
  const dispatch = useDispatch();

  const categoryHandler = (cat) => {
    dispatch(clickedCategory(cat));
  };

  return (
    <>
      {" "}
      <div className=" flex space-x-2xl">
        <TbCircleSquare />
        <p className=" lg:text-2xl text-xl lg:leading-6 leading-5 font-medium text-gray-800 pb-3">
          Category
        </p>
      </div>
      <div className="flex flex-col  justify-start items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            className="flex w-full  p-2 m-2  capitalize space-x-2 md:items-center items-center justify-start  rounded-lg hover:underline hover:text-slate-900"
            value={cat}
            onClick={(e) => categoryHandler(cat)}
          >
            {cat === "men's clothing"
              ? "Men's"
              : cat === "women's clothing"
              ? "Women's"
              : cat}
          </button>
        ))}
      </div>
    </>
  );
};

export default CategoryFilter;
