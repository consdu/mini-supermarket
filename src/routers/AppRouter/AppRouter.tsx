import { createBrowserRouter, RouteObject } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import Home from "../../pages/Home/Home";
import About from "../../pages/About/About";
import Products from "../../pages/Products/Products";
import ProductDetails from "../../pages/Product/ProductDetails/ProductDetails";
import Cart from "../../components/Cart/Cart";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "products/:id/*", element: <ProductDetails /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
