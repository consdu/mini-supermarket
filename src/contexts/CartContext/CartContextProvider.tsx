import { PropsWithChildren, useState } from "react";
import CartContext from "./CartContext";
import { CartProductStructure, ProductStructure } from "../../types";

const CartProvider = ({ children }: PropsWithChildren): React.ReactElement => {
  const [cart, setCart] = useState<CartProductStructure[]>([]);

  function onProductAdd(newProduct: ProductStructure) {
    const existingProduct = cart.find(
      (product) => product.id === newProduct.id
    );

    if (existingProduct) {
      const updatedCart = cart.map((product) => {
        return product.id === newProduct.id
          ? {
              ...product,
              quantity: product.quantity + 1,
            }
          : product;
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
  }

  function onProductDelete(id: number) {
    const updatedCart = cart.filter((product) => product.id !== id);
    setCart(updatedCart);
  }

  const getCartCount = () =>
    cart.reduce((total, product) => total + product.quantity, 0);

  const getTotalPrice = () =>
    cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

  const getProductFromCart = (id: number) =>
    cart.find((product) => product.id === id);

  return (
    <CartContext.Provider
      value={{
        cart,
        onProductAdd,
        onProductDelete,
        getCartCount,
        getTotalPrice,
        getProductFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
