import lS from "manager-local-storage";
import { createContext, useState } from "react";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  const questionsAmountLS = lS("g", "biewwl-trivia-questions-amount");
  const existQuestionsAmount = questionsAmountLS !== null;
  const soundsLS = lS("g", "biewwl-trivia-sounds");
  const existSounds = soundsLS !== null;
  const languageLS = lS("g", "biewwl-trivia-language");
  const existLanguage = languageLS !== null;

  const [game, setGame] = useState({
    questionsAmount: existQuestionsAmount ? questionsAmountLS : 5,
    assertions: 0,
    points: 0,
    sounds: existSounds ? soundsLS : true,
    language: existLanguage ? languageLS : 'en',
  });

  const setQuestionsAmount = (number) => {
    setGame({ ...game, questionsAmount: number });
    lS("s", "biewwl-trivia-questions-amount", number);
  };
  const setAssertions = (number, timer, difficulty) => {
    let sumPoints = 0;
    if (difficulty === "easy") sumPoints = 10 + timer * 1;
    if (difficulty === "medium") sumPoints = 10 + timer * 2;
    if (difficulty === "hard") sumPoints = 10 + timer * 3;
    setGame({ ...game, assertions: number, points: points + sumPoints });
  };

  const setSounds = (bool) => {
    setGame({ ...game, sounds: bool });
    lS("s", "biewwl-trivia-sounds", bool);
  };

  const setLanguage = (abbr) => {
    setGame({ ...game, language: abbr });
    lS("s", "biewwl-trivia-language", abbr);
  };

  const resetScore = () => setGame({ ...game, assertions: 0, points: 0 });

  const { questionsAmount, assertions, points, sounds, language } = game;

  return (
    <GameContext.Provider
      value={{
        questionsAmount,
        setQuestionsAmount,
        assertions,
        setAssertions,
        points,
        sounds,
        setSounds,
        language,
        setLanguage,
        resetScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
