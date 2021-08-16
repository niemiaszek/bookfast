import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import "../styles/Login.css";
import { AuthContext } from "../helpers/AuthContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { authState, setAuthState } = useContext(AuthContext);

  let history = useHistory();

  const login = () => {
    const data = { Login: username, Hasło: password };
    axios
      .post("http://localhost:3001/client_registered/login", data)
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
          history.go(0);
        } else {
          console.log(response);
          localStorage.setItem("accessToken", response.data.token);
          setAuthState({
            Login: response.data.Login,
            id: response.data.id,
            status: true,
          });
          history.push("/");
        }
      });
  };

  return (
    <div className="Login-Container">
      <div className="Login-Box">
        <label>Login:</label>
        <input
          type="text"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <label>Hasło:</label>
        <input
          type="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <div className="Buttons">
          <button onClick={() => history.push("/register")}>Rejestracja</button>
          <button onClick={login}>Zaloguj się</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
