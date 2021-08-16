import React, { useContext, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import logo from "../assets/bookfast_logo.png";
import "../styles/Header.css";
import { AuthContext } from "../helpers/AuthContext";
import { CartContext } from "./CartContext";

function Header(Page) {
  let history = useHistory();
  const { authState } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);
  return (
    <div className="Header">
      <img
        src={logo}
        className="Logo "
        alt="Logo"
        onClick={() => history.push(`/`)}
      />
      <h1 className="Page-Name">Księgarnia internetowa</h1>
      <div className="Current-Header-Content"></div>
      <div className="Navbar">
        {!authState.status ? (
          <NavLink to="/login" className="Normal" activeClassName="Active">
            Zaloguj się
          </NavLink>
        ) : (
          <NavLink
            to={`/profile/${authState.Login}`}
            className="Normal"
            activeClassName="Active"
          >
            {authState.Login}
          </NavLink>
        )}
        <NavLink to="/policy" className="Normal" activeClassName="Active">
          Regulamin
        </NavLink>
        <NavLink to="/contact" className="Normal" activeClassName="Active">
          Kontakt
        </NavLink>
        <NavLink to="/cart" className="Normal" activeClassName="Active">
          Koszyk ({cartItems})
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
