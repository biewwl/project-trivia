import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "../../context/GameContext";
import lS from "../../helpers/localStorageManager";
import "./styles/Settings.css";
import "./styles/Settings-mobile.css";

function Settings() {
  const questionsAmountLS = lS("g", "biewwl-trivia-questions-amount");
  const existQuestionsAmount = questionsAmountLS !== null;
  const { setQuestionsAmount } = useContext(GameContext);

  const [amount, setAmount] = useState(
    existQuestionsAmount ? questionsAmountLS : 5
  );
  const [alert, setAlert] = useState(false);

  return (
    <section className="settings">
      {alert && <span className="alert-save">Saved Preferences!</span>}
      <Link to="/" className="quit">
        ✕
      </Link>
      <section className="settings-control">
        <section className="amount-control">
          <span>Questions amount:</span>
          <input
            type="range"
            id="amount"
            min={5}
            max={10}
            value={amount}
            onChange={({ target }) => setAmount(Number(target.value))}
            className="input-amount"
          />
          <span>{amount}</span>
        </section>
        <button
          type="button"
          onClick={() => {
            setQuestionsAmount(amount);
            setAlert(true);
            setTimeout(() => setAlert(false), 3000);
          }}
          className="save"
        >
          Save
        </button>
      </section>
    </section>
  );
}

export default Settings;
