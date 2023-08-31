import React from "react";
import ReactDOM from "react-dom/client";
import { SWRConfig } from "swr";
import CartProvider from "./contexts/CartContext/CartContextProvider";
import App from "./components//App/App";
import "./styles.css";

const fetcher = (url) => fetch(url).then((response) => response.json());

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <CartProvider>
        <App />
      </CartProvider>
    </SWRConfig>
  </React.StrictMode>
);
