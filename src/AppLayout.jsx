import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { fetchAllProducts } from "./app/features/productSlice";
import Nav from "./components/nav/Nav";

function AppLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/home");
  }, []);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default AppLayout;
