import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { image, title, price, id } = product;

  return (
    <div className=" 2xl:container 2xl:mx-auto">
      <hr className=" w-full  my-6" />
      <div className=" relative ">
        <div className=" relative group">
          <Link to={`/product/${id}`}>
            <img
              className="w-full bg-white aspect-square object-contain "
              src={image}
              alt="Img"
            />
          </Link>
        </div>
        <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4 line__clamp">
          {title}
        </p>
        <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">
          ${price}
        </p>
      </div>
    </div>
  );
};

export default Product;
