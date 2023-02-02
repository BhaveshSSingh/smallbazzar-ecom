import React from "react";
import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./Routes";
import AppLayout from "./AppLayout";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      {/* <RouterProvider router={router}> */}
      <AppLayout />
      {/* </RouterProvider> */}
    </ThemeProvider>
  </React.StrictMode>
);
