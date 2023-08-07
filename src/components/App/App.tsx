import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Products from "../Products/Products";
import ProductDetails from "../ProductDetails/ProductDetails";
import Cart from "../Cart/Cart";
import { ProductStructure } from "../../types";

const App = () => {
  const [cart, setCart] = useState<ProductStructure[]>(() => {
    let savedCart: ProductStructure[] = [];
    try {
      savedCart = JSON.parse(localStorage.getItem("cart") as string) || [];
    } catch (error) {
      savedCart = [];
    }
    return savedCart;
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleProductDelete = (id: number): void => {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  };

  const handleProductAdd = (newProduct: ProductStructure): void => {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        if (product.id === newProduct.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }

        return product;
      });

      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  };

  return (
    <BrowserRouter>
      <Navbar cart={cart} />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/products"
            element={
              <Products
                cart={cart}
                onProductAdd={handleProductAdd}
                onProductDelete={handleProductDelete}
              />
            }
          ></Route>
          <Route
            path="/products/:id/*"
            element={<ProductDetails onProductAdd={handleProductAdd} />}
          ></Route>
          <Route path="/cart" element={<Cart cart={cart} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
