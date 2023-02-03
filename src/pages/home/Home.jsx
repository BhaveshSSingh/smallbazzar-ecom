import { useDispatch, useSelector } from "react-redux";
import { clickedProduct } from "../../app/features/productSlice";
// import Filter from "../../components/filter/Filter";
import Product from "./Product";

const Home = () => {
  const allProducts = useSelector((store) => store.products.productList);

  const dispatch = useDispatch();

  const clickHandler = (prod) => {
    dispatch(clickedProduct(prod));
  };

  return (
    <div className="flex justify-between ">
      <div className="min-w-[25vw] border border-gray-400 h-full rounded-lg p-2">
        {/* <Filter /> */}
      </div>
      {/* product page */}
      <div className="flex flex-wrap ">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {allProducts.map((prod) => (
            <div onClick={() => clickHandler(prod)} key={prod.id}>
              <Product product={prod} key={prod.id} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
