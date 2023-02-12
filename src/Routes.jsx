import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cart from "./pages/Cart";
import ErrorMsg from "./pages/ErrorMsg";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    baseName: "smallbazzar-ecom.vercel.app/home",
    errorElement: <ErrorMsg />,
    children: [
      { path: "/home", element: <Home /> },
      {
        path: "/product/:id",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
