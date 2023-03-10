import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchAllProducts } from "./app/features/productSlice";
import { loginReducer } from "./app/features/userSlice";
import Nav from "./components/nav/Nav";
import { auth } from "./firebase";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  const user = useSelector((store) => store.user.user);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          loginReducer({
            displayName: user.displayName,
            email: user.email,
            photo: user.photoURL,
            userID: user.uid,
          })
        );
      }
    });
  }, []);
  return (
    <>
      {/* {!user ? ( */}
      {/* <Login /> */}
      {/* ) : ( */}
      <>
        <Nav />
        <Outlet />
      </>
      {/* )} */}
      <ToastContainer />
    </>
  );
}

export default App;
