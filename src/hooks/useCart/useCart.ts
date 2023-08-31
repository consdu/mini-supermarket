import { useContext } from "react";
import CartContext from "../../contexts/CartContext/CartContext";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
