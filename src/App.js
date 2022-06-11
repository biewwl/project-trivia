import React, { useState } from "react";
import UserProvider from "./context/UserContext";
import GameProvider from "./context/GameContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Settings from "./pages/Settings";
import { LoginContext } from "./context/LoginContext";
import "./App.css";
import Ranking from "./pages/Ranking";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  
  return (
    <div className="App">
      <UserProvider>
        <GameProvider>
          <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
            <Routes>
              <Route
                path="/"
                element={loggedIn ? <Navigate replace to="/game" /> : <Login />}
              />
              <Route
                path="/game"
                element={loggedIn ? <Game /> : <Navigate replace to="/" />}
              />
              <Route exact path="/settings" element={<Settings />}></Route>
              <Route path="ranking" element={<Ranking />}></Route>
            </Routes>
          </LoginContext.Provider>
        </GameProvider>
      </UserProvider>
    </div>
  );
}

export default App;
