import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Policy from "./pages/Policy";
import Contact from "./pages/Contact";
import Book from "./pages/Book";
import Profile from "./pages/Profile";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./components/CartContext";

import Header from "./components/Header";
import { AuthContext } from "./helpers/AuthContext";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    Login: "",
    id: 0,
    status: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/client_registered/auth", {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        if (response.data.error) {
          console.log(response.data.error);
          setAuthState({ ...authState, status: false });
        } else {
          console.log(response);
          setAuthState({
            Login: response.data.Login,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/register" exact component={Register} />
            <Route path="/login" exact component={Login} />
            <Route path="/policy" exact component={Policy} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/publication/:id" exact component={Book} />
            <Route path="/profile/:login" exact component={Profile} />
            <Route path="/cart" exact component={CartPage} />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
