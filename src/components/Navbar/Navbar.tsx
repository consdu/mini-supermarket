import { NavLink } from "react-router-dom";
import useCart from "../../hooks/useCart/useCart";
import { useEffect, useState } from "react";
import Button from "../Button/Button";

const Navbar = (): React.ReactElement => {
  const [darkTheme, setDarkTheme] = useState(
    () => localStorage.getItem("theme") === "dark" || false
  );

  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("theme", darkTheme ? "dark" : "light");
  }, [darkTheme]);

  useEffect(() => {
    darkTheme
      ? document.querySelector("body")!.classList.add("dark")
      : document.querySelector("body")!.classList.remove("dark");
  });

  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-brand">
        SuperMarket
      </NavLink>
      <ul>
        <li className="nav-item">
          <Button
            className="theme-switcher"
            onClick={() => setDarkTheme(!darkTheme)}
            type="button"
          >
            {darkTheme ? "Dark" : "Light"}
          </Button>
        </li>
        <li className="nav-item">
          <NavLink
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            end
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/about"
          >
            About us
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/products"
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
            Cart ({cartCount})
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
