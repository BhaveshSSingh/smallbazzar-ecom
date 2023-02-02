import { BsCartPlus } from "react-icons/bs";

const Product = () => {
  return (
    <div className="product ">
      {/* <img src={image} alt={title} loading="lazy" /> */}

      <div className="product__info">
        {/* <h3 className="product__title line__clamp__title">{title}</h3> */}
        {/* <h5 className="line__clamp">{description}</h5> */}
        <h5>{/* <StarRating rating={rating} /> */}</h5>
        {/* <strong>${price}</strong> */}
        <p
          className="product__add flex-row
        "
          //   onClick={addProductToCart}
        >
          <button className="bg-blue-500 rounded-lg mt-5 ">
            <BsCartPlus color="white" />
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
