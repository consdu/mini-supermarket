import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import { RouterProvider } from "react-router-dom";
import CartProvider from "./contexts/CartContext/CartContextProvider";
import router from "./routers/appRouter/appRouter";
import "./styles.css";

const fetcher = (url) => fetch(url).then((response) => response.json());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </SWRConfig>
  </React.StrictMode>
);
