import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  addToOrders,
  emptyCart,
  removeFromCart,
} from "../app/features/cartSlice";

const Cart = () => {
  const user = useSelector((store) => store.user.user);

  const cartItems = useSelector((store) => store.cart.cart);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const TotalPrice = () => {
    let total = 0;
    cartItems.forEach((item) => (total += item.quantity * item.price));
    return Math.round(total);
  };

  const shipping = Math.round(TotalPrice() / 15);
  const tax = Math.round(TotalPrice() / 18);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  const displayRazorpay = async () => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      console.error("Payment SDK failed, check your Internet connection");
      return;
    }

    const options = {
      key: "rzp_test_VdGdvprTKB8u1w",
      amount: (TotalPrice() + shipping + tax) * 100,
      currency: "INR",
      name: "Small Bazzar",
      description: "Thank you for shopping with us",
      image:
        "https://e7.pngegg.com/pngimages/15/271/png-clipart-computer-icons-online-shopping-shopping-cart-service-shopping-cart-icon-text-service.png",
      handler: function (response) {
        // clear cart items
        dispatch(addToOrders(cartItems));
        toast("Payment Successful");
        dispatch(emptyCart());
        navigate("/profile");
      },
      prefill: {
        name: `${user.displayName}`,
        email: `${user.email}`,

        contact: "9999994444",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  return (
    <>
      <div>
        <div
          className="pt-20 w-full h-full bg-black bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0"
          id="chec-div"
        >
          <div
            className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700"
            id="checkout"
          >
            <div className="flex md:flex-row flex-col justify-end" id="cart">
              <div
                className="lg:w-1/2 w-full md:pl-10 pl-4 pr-10 md:pr-4 md:py-12 py-8 bg-white overflow-y-auto overflow-x-hidden h-screen"
                id="scroll"
              >
                <Link
                  to="/home"
                  className="flex items-center text-gray-500 hover:text-gray-600 cursor-pointer"
                >
                  <BiArrowBack />
                  <p className="text-sm pl-2 leading-none">Back</p>
                </Link>
                <p className="text-5xl font-black leading-10 text-gray-800 pt-3">
                  Cart
                </p>

                {cartItems.length === 0 ? (
                  <div>Nothing in Cart</div>
                ) : (
                  cartItems.map((prod) => (
                    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
                      <div className="w-1/4">
                        <img
                          src={prod.image}
                          alt="cart img"
                          className="w-full h-full object-center object-cover"
                        />
                      </div>
                      <div className="md:pl-3 md:w-3/4">
                        <p className="text-xs uppercase leading-3 text-gray-800 md:pt-0 pt-4">
                          {prod.category}
                        </p>
                        <div className="flex items-center justify-between w-full pt-1">
                          <p className="text-base font-black leading-none text-gray-800">
                            {prod.title}
                          </p>
                        </div>

                        <p className="pt-2 font-medium text-base leading-4 text-gray-600">
                          Quantity {prod.quantity}
                        </p>
                        <div className="flex items-center justify-between pt-5 pr-6">
                          <button
                            className="flex items-center"
                            onClick={() => dispatch(removeFromCart(prod.id))}
                          >
                            <p className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">
                              Remove
                            </p>
                          </button>
                          <p className="text-base font-black leading-none text-gray-800">
                            Item Price ${Math.round(prod.price)}
                          </p>
                          <p className="text-base font-black leading-none text-gray-800">
                            Total Price $
                            {Math.round(prod.price * prod.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className=" md:w-1/3 xl:w-1/4 w-full bg-gray-100 h-full">
                <div className="flex flex-col md:h-screen px-14 py-20 justify-between overflow-y-auto">
                  <div>
                    <p className="text-4xl font-black leading-9 text-gray-800">
                      Summary
                    </p>
                    <div className="flex items-center justify-between pt-16">
                      <p className="text-base leading-none text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ${TotalPrice()}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ${cartItems.length === 0 ? "0" : shipping}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                      <p className="text-base leading-none text-gray-800">
                        Tax
                      </p>
                      <p className="text-base leading-none text-gray-800">
                        ${cartItems.length === 0 ? "0" : tax}
                      </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
                      <p className="text-2xl leading-normal text-gray-800">
                        Total
                      </p>
                      <p className="text-2xl font-bold leading-normal text-right text-gray-800">
                        $
                        {cartItems.length === 0
                          ? "0"
                          : TotalPrice() + (shipping + tax)}
                      </p>
                    </div>
                    <button
                      onClick={displayRazorpay}
                      className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {` /* width */
                #scroll::-webkit-scrollbar {
                    width: 1px;
                }

                /* Track */
                #scroll::-webkit-scrollbar-track {
                    background: #f1f1f1;
                }

                /* Handle */
                #scroll::-webkit-scrollbar-thumb {
                    background: rgb(133, 132, 132);
                }
`}
      </style>
    </>
  );
};

export default Cart;
