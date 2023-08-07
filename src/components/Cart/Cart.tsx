import React, { ChangeEvent, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { ProductStructure } from "../../types";

const stripeLoadedPromise = loadStripe(import.meta.env.VITE_STRIPE_KEY!);

interface CartProps {
  cart: ProductStructure[];
}

const Cart = ({ cart }: CartProps): React.ReactElement => {
  const [email, setEmail] = useState<string>("");

  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const handleFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const lineItems = cart.map((product) => {
      return { price: product.price_id, quantity: product.quantity };
    });

    stripeLoadedPromise.then((stripe) => {
      stripe!
        .redirectToCheckout({
          lineItems: lineItems,
          mode: "payment",
          successUrl: "https://superm.react-tutorial.app/",
          cancelUrl: "https://superm.react-tutorial.app/",
          customerEmail: email,
        })
        .then((response) => {
          // this will only log if the redirect did not work
          console.log(response.error);
        })
        .catch((error) => {
          // wrong API key? you will see the error message here
          console.log(error);
        });
    });
  };

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <p>You have not added any product to your cart yet.</p>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <td width="25%" className="th-product">
                    Product
                  </td>
                  <td width="20%">Unit price</td>
                  <td width="10%">Quanity</td>
                  <td width="25%">Total</td>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan={2}></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
              </p>
              <Input
                placeholder="Email"
                autoComplete="email"
                onChange={(event: ChangeEvent<HTMLInputElement>) =>
                  setEmail(event.target.value)
                }
                value={email}
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
