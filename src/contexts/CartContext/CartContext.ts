import { createContext } from "react";
import { CartContextStructure } from "../../types";

const CartContext = createContext<CartContextStructure>(
  {} as CartContextStructure
);

export default CartContext;
