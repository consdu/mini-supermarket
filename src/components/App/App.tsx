import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Products from "../../pages/Products/Products";
import ProductDetails from "../../pages/Product/ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";
import Layout from "../Layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id/*" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
