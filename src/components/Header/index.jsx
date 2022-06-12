import React, { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { UserContext } from "../../context/UserContext";
import { Icon } from '@iconify/react';
import './styles/Header.css';
import logo from './images/logo.png';
import './styles/Header-mobile.css';
import Click from "./audios/Click.wav";
import { Howl } from "howler";

function Header() {
  const { setLoggedIn } = useContext(LoginContext);
  const { name, avatar } = useContext(UserContext);

  const playAudio = (src) => {
    const sound = new Howl({ src: [src] });
    sound.play();
  }
  
  return (
    <header>
      <button
        onClick={() => {
          setLoggedIn(false);
          playAudio(Click);
        }}
        className="logout"
      >
        <Icon icon="fa:power-off" />
      </button>
      <section className="container-logo">
        <img src={logo} alt="logo" className="logo" />
      </section>
      <section className="player-info-header">
        <span data-testid="header-player-name">{name}</span>
        <img
          src={avatar}
          alt={name}
          className="profile-picture-header"
        />
      </section>
      <div className="header-detail">
        <div className="detail-pink" />
        <div className="detail-yellow" />
        <div className="detail-blue" />
        <div className="detail-green" />
        <div className="detail-red" />
        <div className="detail-purple" />
      </div>
    </header>
  );
}

export default Header;
