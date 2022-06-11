/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import { UserContext } from "../../context/UserContext";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import tF from "../../helpers/textFormat";
import { getQuestions } from "../../helpers/fetchTrivia";
import "./styles/Game.css";
import "./styles/Game-mobile.css";

function Game() {
  const [results, setResults] = useState({
    questions: [],
    index: 0,
  });
  const [statusAssertion, setStatusAssertion] = useState({
    chosenAnswer: false,
    isCorrect: false,
  });

  const [timer, setTimer] = useState(30);
  const { index, questions } = results;
  const { questionsAmount, assertions, setAssertions, points, resetScore } =
    useContext(GameContext);
  const { token } = useContext(UserContext);
  const navigate = useNavigate();

  const setQuestions = (array) => setResults({ ...results, questions: array });
  const setIndex = (number) => setResults({ ...results, index: number });

  const { chosenAnswer, isCorrect } = statusAssertion;
  const setChosenAnswer = (bool) =>
    setStatusAssertion({ ...statusAssertion, chosenAnswer: bool });
  const setIsCorrect = (bool) =>
    setStatusAssertion({ chosenAnswer: true, isCorrect: bool });

  const createAnswers = (cA, iA) => {
    const answersArray = [cA, ...iA].sort(() => Math.random() - 0.5);
    return answersArray;
  };

  useEffect(() => {
    resetScore();
    async function getResults() {
      const questionsArray = await getQuestions(token, questionsAmount);
      const customQuestions = questionsArray.map((e) => ({
        ...e,
        answers: createAnswers(e.correct_answer, e.incorrect_answers),
      }));
      setQuestions(customQuestions);
    }
    getResults();
  }, []);

  useEffect(() => {
    let intervalId;

    if (timer !== 0) {
      intervalId = setInterval(() => {
        setTimer(timer - 1);
      }, 2000);
    } else if (index < questions.length - 1) {
      setChosenAnswer(true);
      showCorrectAnswer();
      setTimeout(() => {
        setIndex(index + 1);
        setTimer(30);
        setChosenAnswer(false);
      }, 2000);
    } else {
      setChosenAnswer(true);
      showCorrectAnswer();
      setTimeout(() => {
        navigate("/ranking");
      }, 2000);
    }
    return () => clearInterval(intervalId);
  }, [timer]);

  const showCorrectAnswer = () => {
    const answersElements = [...document.querySelectorAll(".answer")];
    const elementCorrect = answersElements.find(
      (e) => e.textContent === tF(questions[index].correct_answer)
    );
    elementCorrect.className = "answer c-answer";
    setTimeout(() => {
      elementCorrect.className = "answer";
    }, 2000);
  };

  const setClass = (target) => {
    const { difficulty, correct_answer } = questions[index];
    if (target.textContent !== tF(correct_answer)) {
      target.className = "answer i-answer";
    } else {
      setAssertions(assertions + 1, timer, difficulty);
      setIsCorrect(true);
    }
    setTimeout(() => {
      target.className = "answer";
    }, 2000);
  };

  const handleAnswer = () => {
    setChosenAnswer(true);
    showCorrectAnswer();
    setTimeout(() => {
      if (index < questions.length - 1) {
        setIndex(index + 1);
      } else {
        navigate("/ranking");
      }
      setIsCorrect(false);
      setTimer(30);
      setChosenAnswer(false);
    }, 2000);
  };

  const changeColor = (timer) => {
    const n = { five: 5, ten: 10 };
    if (timer <= n.five) return "timerRed";
    if (timer <= n.ten) return "timerYellow";
    return "timerGreen";
  };

  const feedbackAssertion = () => (isCorrect ? "Correct" : "Incorrect");

  return (
    <section className="game">
      <Header />
      {questions.length === 0 ? (
        <Loading />
      ) : (
        <section className="game-section">
          <section
            className={`timer-container-background  ${changeColor(timer)}`}
          ></section>
          {!chosenAnswer && timer > 0 && (
            <section
              className={`timer-container  ${changeColor(timer)}`}
            ></section>
          )}
          <span className="timer">{timer}'</span>
          <span className="position-question">{index + 1}/{questions.length}</span>
          <section className="quiz">
            {chosenAnswer && (
              <span className={`f-${feedbackAssertion()}`}>
                {feedbackAssertion()}!
              </span>
            )}
            <section className="points-container">
              <p className="points">{points}</p>
            </section>
            <section className="question-container">
              <div
                className={`question-detail-1 d1-${questions[index].difficulty}`}
              ></div>
              <div
                className={`question-detail-2 d2-${questions[index].difficulty}`}
              ></div>
              <h3 className="question">{tF(questions[index].question)}</h3>
            </section>
            <section className="answer-options">
              {questions[index].answers.map((answer) => (
                <button
                  className="answer"
                  disabled={chosenAnswer}
                  onClick={({ target }) => {
                    handleAnswer(answer);
                    setClass(target);
                  }}
                  key={tF(answer)}
                >
                  {tF(answer)}
                </button>
              ))}
            </section>
          </section>
        </section>
      )}
    </section>
  );
}

export default Game;
