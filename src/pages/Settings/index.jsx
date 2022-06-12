import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import "./styles/Settings.css";
import "./styles/Settings-mobile.css";
import Quit from "./audios/UI Back.wav";
import Click from "./audios/Click.wav";
import { Howl } from "howler";
import { Icon } from "@iconify/react";

function Settings() {
  const {
    questionsAmount,
    setQuestionsAmount,
    sounds,
    setSounds,
    language,
    setLanguage,
  } = useContext(GameContext);

  const playAudio = (src) => {
    const sound = new Howl({ src: [src] });
    if (sounds) sound.play();
  };

  const forcePlayAudio = (src) => {
    const sound = new Howl({ src: [src] });
    sound.play();
  };

  const inEnglish = language === "en";

  return (
    <section className="settings">
      <Link to="/" className="quit" onClick={() => playAudio(Quit)}>
        ✕
      </Link>
      <section className="settings-control">
        <section className="amount-control">
          <span>{inEnglish ? "Questions" : "Perguntas"}</span>
          <input
            type="range"
            id="amount"
            min={5}
            max={10}
            value={questionsAmount}
            onChange={({ target }) => {
              playAudio(Click);
              setQuestionsAmount(Number(target.value));
            }}
            className="input-amount"
          />
          <span>{questionsAmount}</span>
        </section>
        <section className="sounds-control">
          <span>{inEnglish ? "Sounds" : "Sons"}</span>
          <button
            className={`sounds-on${sounds ? "" : " s-on-disabled"}`}
            onClick={() => {
              setSounds(true);
              forcePlayAudio(Click);
            }}
          >
            {inEnglish ? "Yes" : "Sim"}
          </button>
          <button
            className={`sounds-off${!sounds ? "" : " s-off-disabled"}`}
            onClick={() => {
              setSounds(false);
            }}
          >
            {inEnglish ? "No" : "Não"}
          </button>
        </section>
        <section className="language-control">
          <span>{inEnglish ? "Language" : "Idioma"}</span>
          <button
            className={`language-en${inEnglish ? "" : " l-en-disabled"}`}
            onClick={() => {
              setLanguage("en");
              playAudio(Click);
            }}
          >
            <span>{inEnglish ? "English" : "Inglês"}</span>
            <Icon icon="emojione:flag-for-united-states" />
          </button>
          <button
            className={`language-en${!inEnglish ? "" : " l-pt-br-disabled"}`}
            onClick={() => {
              setLanguage("pt-br");
              playAudio(Click);
            }}
          >
            <span>{inEnglish ? "Portuguese" : "Português"}</span>
            <Icon icon="emojione:flag-for-brazil" />
          </button>
        </section>
      </section>
    </section>
  );
}

export default Settings;
