import { createContext, useState } from "react";
import lS from "../helpers/localStorageManager";

export const GameContext = createContext();

export default function GameProvider({ children }) {
  const questionsAmountLS = lS("g", "biewwl-trivia-questions-amount");
  const existQuestionsAmount = questionsAmountLS !== null;
  const soundsLS = lS("g", "biewwl-trivia-sounds");
  const existSounds = soundsLS !== null;

  const [game, setGame] = useState({
    questionsAmount: existQuestionsAmount ? questionsAmountLS : 5,
    assertions: 0,
    points: 0,
    sounds: existSounds ? soundsLS : true,
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

  const resetScore = () => setGame({ ...game, assertions: 0, points: 0 });

  const { questionsAmount, assertions, points, sounds } = game;

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
        resetScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
