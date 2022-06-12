import React, { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { LoginContext } from "../../context/LoginContext";
import { GameContext } from "../../context/GameContext";
import { getToken } from "../../helpers/fetchTrivia";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import logo from "./images/logo.png";
import "./styles/Login.css";
import "./styles/Login-mobile.css";
import { Howl } from "howler";
import Play from "./audios/Play.wav";
import Click from "./audios/Click.wav";

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
  const { sounds, language } = useContext(GameContext);

  const login = async (e) => {
    e.preventDefault();
    playAudio(Play);
    const token = await getToken();
    await setToken(token);
    await setAvatar(email);
    setLoggedIn(true);
  };

  const playAudio = (src) => {
    const sound = new Howl({ src: [src] });
    if (sounds) sound.play();
  };
  const inEnglish = language === "en";

  return (
    <section className="login">
      <form method="GET">
        <img src={logo} alt="logo" className="logo" />
        <section className="login-user-area">
          <section className="login-inputs">
            <input
              placeholder={inEnglish ? "Name" : "Nome"}
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
            <Link
              className="ranking-option"
              to="ranking"
              onClick={() => playAudio(Click)}
            >
              Ranking <Icon icon="icon-park-outline:ranking" />
            </Link>
            <Link
              className="settings-option"
              to="settings"
              onClick={() => playAudio(Click)}
            >
              <Icon icon="cil:settings" />
            </Link>
          </section>
        </section>
      </form>
    </section>
  );
}

export default Login;
