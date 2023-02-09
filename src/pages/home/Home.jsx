import { useDispatch, useSelector } from "react-redux";
import { clickedProduct } from "../../app/features/productSlice";
import ProductLoading from "../../components/loading/ProductLoading";
import Filter from "../../components/filter/Filter";
import Product from "./Product";

const Home = () => {
  const allProducts = useSelector((store) => store.products.productList);

  const filteredProducts = useSelector(
    (store) => store.products.filteredProducts
  );

  const dispatch = useDispatch();

  const clickHandler = (prod) => {
    dispatch(clickedProduct(prod));
  };

  const searchQuery = useSelector((state) => state.products.searchQuery);
  const selectedCategory = useSelector((state) => state.products.category);
  const selectedPrice = useSelector((state) => state.products.price);
  const selectedStars = useSelector((state) => state.products.stars);

  const FilteredData = () => {
    const text = searchQuery;
    const category = selectedCategory;
    const price = selectedPrice;
    const star = selectedStars;

    const categoryFilter = (item) => {
      if (category !== "all") {
        return item.category === category;
      } else {
        return allProducts;
      }
    };

    return filteredProducts
      .filter((item) => item.title.toLowerCase().includes(text))
      .filter(categoryFilter)
      .filter((item) => item.price <= price)
      .filter((item) => Math.round(item.rating.rate) <= star);
  };

  return (
    <div className="flex justify-between">
      <div>
        <Filter />
      </div>

      <div className="flex flex-wrap ">
        <div className=" grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
          {allProducts.length === 0 ? (
            <ProductLoading />
          ) : (
            FilteredData().map((prod) => (
              <div onClick={() => clickHandler(prod)} key={prod.id}>
                <Product product={prod} key={prod.id} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
