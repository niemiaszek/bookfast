import React, { useContext } from "react";
import "../styles/Cart-Page.css";
import Cart from "../components/Cart";
import { CartContext } from "../components/CartContext";
import { AuthContext } from "../helpers/AuthContext";

function CartPage() {
  const { authState } = useContext(AuthContext);
  const { cart, total, order } = useContext(CartContext);

  return (
    <div className="Cart-Page">
      <div className="Cart-Content">
        <div className="Cart-Header">
          <h1>Koszyk</h1>
        </div>
        <div className="Cart-Container">
          <Cart />
        </div>
        <div className="Cart-Info">Wartość przedmiotów: {total} zł</div>
        <button
          onClick={() => {
            order(authState.id);
          }}
        >
          Zamów
        </button>
      </div>
    </div>
  );
}

export default CartPage;
