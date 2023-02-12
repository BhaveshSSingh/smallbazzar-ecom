import { BiLogOut } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase";
import { logoutReducer } from "../app/features/userSlice";
import Login from "./Login";

const ProfilePage = () => {
  const user = useSelector((store) => store.user.user);
  const orders = useSelector((store) => store.cart.orders);

  const dispatch = useDispatch();

  const logoutFn = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logoutReducer());
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const TotalPrice = () => {
    let total = 0;
    orders.forEach((item) => (total += item.quantity * item.price));
    return Math.round(total);
  };
  const shipping = Math.round(TotalPrice() / 15);
  const tax = Math.round(TotalPrice() / 18);

  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="flex justify-center items-center pl-10 ">
          <div className="relative max-w-md mx-auto md:max-w-2xl  min-w-0 break-words dark:bg-gray-700 dark:text-gray-100 bg-white w-full mb-6 shadow-lg rounded-xl mt-16  ">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full flex justify-center">
                  <div
                    className="w-40 h-40  ring-4 ring-slate-400
               p-3 object-fill rounded-full text-gray-100 bg-gray-500 flex  justify-center mr-4"
                  >
                    <div className="text-9xl p-1 pt-0 capitalize">
                      {user?.displayName.substring(0, 1)}
                    </div>
                  </div>
                </div>
                <div className="w-full text-center mt-10 dark:text-gray-100">
                  {orders.length === 0 ? (
                    <div>Nothing in Cart</div>
                  ) : (
                    orders.map((prod) => (
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
                  <div className="text-gray-500 font-bold text-2xl">
                    Delivering in 5 Days
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 capitalize">
                <h3 className="text-2xl text-slate-700 font-bold leading-normal mb-1 dark:text-gray-100">
                  Name: {user.displayName}
                </h3>
                <div className="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase dark:text-gray-100">
                  <i className="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75" />
                  Email: {user.email}
                </div>
              </div>
              <div className="mt-6 py-6 border-t border-slate-200 text-center dark:text-gray-100">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full px-4">
                    <button
                      onClick={logoutFn}
                      type="button"
                      className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2  "
                    >
                      Logout <BiLogOut className="inline-block" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfilePage;
