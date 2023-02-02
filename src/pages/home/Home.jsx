import { useSelector } from "react-redux";
import Filter from "../../components/filter/Filter";
import Product from "./Product";

const Home = () => {
  // const allProducts = useSelector((store) => store.products);

  // if (!products?.length) {
  //   reduxDispatch(fetchAllProducts());
  // }

  return (
    <div className="flex">
      <div className="w-1/4 border border-blue-400 h-full rounded-lg p-2">
        <Filter />
      </div>

      {/* product page */}
      <div>
        <Product />
      </div>
    </div>
  );
};

export default Home;
