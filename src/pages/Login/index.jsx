import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { LoginContext } from "../../context/LoginContext";
import { getToken } from "../../helpers/fetchTrivia";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "./images/logo.png";
import "./styles/Login.css";
import "./styles/Login-mobile.css";

function Login() {
  const { setLoggedIn } = useContext(LoginContext);
  const {
    name,
    setName,
    email,
    setEmail,
    setAvatar,
    setToken,
    validateNameAndEmail,
  } = useContext(UserContext);

  const login = async (e) => {
    e.preventDefault();
    const token = await getToken();
    await setToken(token);
    await setAvatar(email);
    setLoggedIn(true);
  };

  return (
    <section className="login">
      <form method="GET">
        <img src={logo} alt="logo" className="logo" />
        <section className="login-user-area">
          <section className="login-inputs">
            <input
              placeholder="Name"
              type="text"
              id="name"
              value={name}
              onChange={setName}
              spellCheck={false}
            />
            <input
              placeholder="Email"
              type="text"
              id="email"
              value={email}
              onChange={setEmail}
              spellCheck={false}
            />
            <button
              className="play"
              disabled={!validateNameAndEmail()}
              onClick={login}
            >
              <i className="ri-play-mini-fill" />
            </button>
          </section>
          <section className="login-options">
            <Link className="ranking-option" to="ranking">
              Ranking <Icon icon="icon-park-outline:ranking" />
            </Link>
            <Link className="settings-option" to="settings">
              <Icon icon="cil:settings" />
            </Link>
          </section>
        </section>
      </form>
    </section>
  );
}

export default Login;
