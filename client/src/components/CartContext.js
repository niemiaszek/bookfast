import React, { useContext } from "react";
import axios from "axios";

function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = React.createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getCartFromLocalStorage());
  const [total, setTotal] = React.useState(0);
  const [cartItems, setCartItems] = React.useState(0);

  function onUpdate() {
    localStorage.setItem("cart", JSON.stringify(cart));

    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem["data"].Cena);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);

    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
  }
  React.useEffect(onUpdate, [cart]);

  const removeItem = (key) => {
    let item = cart.find((item) => item["data"].idWydanie === key);
    let new_amount = item.amount + item["data"].ilość;
    axios.put(`http://localhost:3001/publication/added`, {
      amount: new_amount,
      idWydanie: key,
    });
    setCart([...cart].filter((item) => item["data"].idWydanie !== key));
  };
  const order = (id) => {
    console.log(id);
    axios.post(`http://localhost:3001/order`, { id: id }).then((res) => {
      axios
        .post(`http://localhost:3001/order/history`, {
          idZamówienie: res.data.idZamówienie,
        })
        .then((response) => {
          console.log(response.data["idHistoria_zakupów"]);
          cart.map((item, key) => {
            console.log(item);
            const idHistoria = response.data["idHistoria_zakupów"];
            const wydanie_idWydanie = item.data.idWydanie;
            axios.post(`http://localhost:3001/order/history_publication`, {
              idHistoria: idHistoria,
              wydanie_idWydanie: wydanie_idWydanie,
              ilość: item.amount,
            });
          });
        });
    });
    //cart.map((item, key) => {});
    clearCart();
  };
  const addToCart = (book) => {
    const key = book["data"].idWydanie;
    let item = cart.find((item) => item["data"].idWydanie === key);
    if (item) {
      if (item["data"].ebooks.length == 0 && item["data"].ilość > 0) {
        item.amount++;
        let remaining = item["data"].ilość - 1;
        item["data"].ilość -= 1;
        console.log(remaining);
        axios.put(`http://localhost:3001/publication/added`, {
          amount: remaining,
          idWydanie: key,
        });
        onUpdate();
      }
    } else if (book["data"].ilość > 0) {
      if (book["data"].ebooks.length == 0) {
        let remaining = book["data"].ilość - 1;
        book["data"].ilość -= 1;
        console.log(remaining);
        axios.put(`http://localhost:3001/publication/added`, {
          amount: remaining,
          idWydanie: book["data"].idWydanie,
        });
      }

      setCart(
        cart.concat({
          amount: 1,
          price: book["data"].Cena,
          // add other cartItem attributes.
          ...book,
        })
      );
    }
  };

  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        cartItems,
        total,
        removeItem,
        addToCart,
        clearCart,
        order,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
