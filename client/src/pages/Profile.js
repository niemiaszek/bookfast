import React, { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import "../styles/Profile.css";
import { AuthContext } from "../helpers/AuthContext";

function Profile() {
  let { login } = useParams();
  let history = useHistory();
  const { setAuthState } = useContext(AuthContext);
  const logout = () => {
    localStorage.removeItem("accessToken");
    setAuthState({ Login: "", id: 0, status: false });
    history.push("/");
  };

  return (
    <div className="Profile-Page">
      <div className="Profile-Content">
        <div className="Profile-Info">
          <h1>{login}</h1>
        </div>
        <button onClick={logout}>Wyloguj się</button>
        <button>Lista życzeń</button>
        <button>Historia zakupów</button>
        <button>Punkty</button>
      </div>
    </div>
  );
}

export default Profile;
