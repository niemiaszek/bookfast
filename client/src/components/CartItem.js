import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import "../styles/CartItem.css";
import { useHistory } from "react-router-dom";

export default function CartItem({ data }) {
  let history = useHistory();
  const { removeItem } = useContext(CartContext);
  return (
    <div className="Cart-Item">
      <button
        id="Item-Content"
        onClick={() => {
          history.push(`/publication/${data["data"].idWydanie}`);
        }}
      >
        <b>{data["data"]["Książka_idKsiążka_książka"].tytuł}</b>,{" "}
        {data["data"].papierowes.length > 0
          ? "wydanie papierowe, "
          : "e-book, "}
        {data["data"].język}, {data["data"].Cena} zł
      </button>
      <a id="Amount">ilość: {data.amount}</a>
      <button
        className="Remove"
        onClick={() => {
          removeItem(data["data"].idWydanie);
        }}
      >
        x
      </button>
    </div>
  );
}
