import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Products from "../../pages/Products/Products";
import ProductDetails from "../../pages/Product/ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:id/*" element={<ProductDetails />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
