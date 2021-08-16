import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import "../styles/Cart.css";
import CartItem from "./CartItem";
import { CartContext } from "./CartContext";
export default function Cart() {
  const { cart, total } = useContext(CartContext);
  return (
    <div className="Cart-Items">
      {cart.map((item) => {
        console.log(item);
        return <CartItem id={item["data"].idWydanie} data={item} />;
      })}
    </div>
  );
}
