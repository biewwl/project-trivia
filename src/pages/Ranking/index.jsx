import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { GameContext } from "../../context/GameContext";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext";
import { LoginContext } from "../../context/LoginContext";
import lS from "manager-local-storage";
import "./styles/Ranking.css";
import "./styles/Ranking-mobile.css";
import Quit from "./audios/UI Back.wav";
import { Howl } from "howler";

function Ranking() {
  const ordinateArray = (array) => array.sort((a, b) => b.points - a.points);
  const getTop3 = (array) => array.slice(0, 3);
  const getOthersTop = (array) => array.slice(3);

  const rankingLS = lS("g", "biewwl-trivia-ranking");
  const existRanking = rankingLS !== null;
  const ranking = existRanking ? ordinateArray(rankingLS) : [];

  const { assertions, points, resetScore, questionsAmount, sounds, language } =
    useContext(GameContext);
  const { name, avatar } = useContext(UserContext);
  const { loggedIn, setLoggedIn } = useContext(LoginContext);
  const inEnglish = language === "en";

  const playAudio = (src) => {
    const sound = new Howl({ src: [src] });
    if (sounds) sound.play();
  };

  useEffect(() => {
    if (loggedIn) {
      const playerRanking = {
        name,
        assertions,
        points,
        avatar,
        questionsAmount,
      };
      existRanking
        ? lS("s", "biewwl-trivia-ranking", [...rankingLS, playerRanking])
        : lS("s", "biewwl-trivia-ranking", [playerRanking]);
    }
    resetScore();
    setLoggedIn(false);
  }, []);

  return (
    <section className="ranking">
      <Link to="/" className="quit" onClick={() => playAudio(Quit)}>
        ✕
      </Link>
      <section className="top3">
        {existRanking
          ? getTop3(ranking).map((e, i) => (
              <section className="card-player" key={i}>
                <img src={e.avatar} alt="e.name" />
                <section className="score-player">
                  <p className="name-player">{e.name}</p>
                  <p className="points-player">
                    {e.points} {inEnglish ? "points" : "pontos"}
                  </p>
                  <p className="assertions-player">
                    {e.assertions}{" "}
                    {e.assertions === 1
                      ? inEnglish
                        ? "assertion"
                        : "acerto"
                      : inEnglish
                      ? "assertions"
                      : "acertos"}
                  </p>
                  <p className="questions-amount-player">
                    {e.questionsAmount} {inEnglish ? "questions" : "perguntas"}
                  </p>
                </section>
                {i === 0 && <Icon icon="emojione:crown" className="crown" />}
                {i === 0 && (
                  <Icon icon="emojione:1st-place-medal" className="gold" />
                )}
                {i === 1 && (
                  <Icon icon="emojione:2nd-place-medal" className="silver" />
                )}
                {i === 2 && (
                  <Icon icon="emojione:3rd-place-medal" className="bronze" />
                )}
              </section>
            ))
          : "not found"}
      </section>
      <section className="ranking-players">
        <section className="card-header">
          <abbr title="Ranking">
            <Icon icon="icon-park-outline:ranking" />
          </abbr>
          <abbr title="Avatar">
            <Icon icon="carbon:user-avatar" />
          </abbr>

          <span>{inEnglish ? "Player" : "Jogador"}</span>
          <span>{inEnglish ? "Points" : "Pontos"}</span>
          <abbr title={inEnglish ? "assertions" : "acertos"}>
            <Icon icon="fluent:target-arrow-20-regular" />
          </abbr>
          <abbr title={inEnglish ? "questions" : "perguntas"}>
            <Icon icon="eva:question-mark-fill" />
          </abbr>
        </section>
        <section className="cards-container">
          {existRanking
            ? getOthersTop(ranking).map((e, i) => (
                <section className="card-player" key={i}>
                  <span className="position-player">{i + 4}</span>
                  <img src={e.avatar} alt="e.name" />
                  <p className="name-player">{e.name}</p>
                  <p className="points-player">{e.points}</p>
                  <p className="assertions-player">{e.assertions}</p>
                  <p className="questions-amount-player">{e.questionsAmount}</p>
                </section>
              ))
            : ""}
        </section>
      </section>
    </section>
  );
}

export default Ranking;
