import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Cart from "./pages/Cart";
import ErrorMsg from "./pages/ErrorMsg";
import Home from "./pages/home/Home";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
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
    ],
  },
]);
