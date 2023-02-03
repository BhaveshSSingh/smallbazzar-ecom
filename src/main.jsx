import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import AppLayout from "./AppLayout";
import "./index.css";
import { ThemeProvider } from "./context/ThemeContext";
import { Provider } from "react-redux";
import store from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router}>
          <AppLayout />
        </RouterProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
