import SCGame from "./Game.styled";
import Dialog from "../Dialog/Dialog";
import Start from "../Start/Start";
import Navbar from "../Navbar/Navbar";
import Board from "../Board/Board";
import Score from "../Score/Score";
import End from "../End/End";
import { useState, useEffect, useRef } from "react";

export default function Game() {
  const [isInit, setIsInit] = useState(true);
  const [gameSettings, setGameSettings] = useState(() => {
    let settings;

    settings = localStorage.getItem("_game_settings_");

    if (settings) settings = JSON.parse(settings);
    else settings = { theme: "numbers", number: "1", size: "6" };

    return settings;
  });
  const [gameState, setGameState] = useState(null);
  const timeRef = useRef(null);
  const instanceRef = useRef(1);

  function set_state(number) {
    console.log(`number: ${number}`);

    const state = { gameOver: false };

    if (number > 1) {
      const players = new Array(number);

      state.players = players.fill(0);
      state.turn = 0;
    } else {
      state.moves = 0;
      state.time = 0;
    }
    return state;
  }

  function set_settings(newSettings) {
    localStorage.setItem("_game_settings_", JSON.stringify(newSettings));
    setGameSettings(newSettings);
    setGameState(set_state(Number(newSettings.number)));
    setIsInit(false);
  }

  function update_score(result) {
    if (Number(gameSettings.number) === 1)
      setGameState((prevState) => ({
        ...prevState,
        moves: prevState.moves + 1,
      }));
    else
      setGameState((prevState) => ({
        players: prevState.players.map(
          (score, index) => score + (index === prevState.turn) * result.match
        ),
        turn: (prevState.turn + 1) % prevState.players.length,
      }));

    if (result.cellsLeft === 1) {
      clearTimeout(timeRef.current);
      setGameState((prevState) => ({ ...prevState, gameOver: true }));
    }
  }

  function restart() {
    setGameState(set_state(Number(gameSettings.number)));
    instanceRef.current = instanceRef.current + 1;
  }

  function new_game() {
    setGameState((prevState) => ({ ...prevState, gameOver: false }));
    instanceRef.current = instanceRef.current + 1;
    setIsInit(true);
  }

  useEffect(() => {
    if (Number(gameSettings.number) === 1) {
      const id = setInterval(() => {
        console.log(`in timer ${Math.random()}`);
        setGameState((prevState) =>
          prevState
            ? {
                ...prevState,
                time: prevState.time + 1,
              }
            : { moves: 0, time: 0 }
        );
      }, 1000);

      timeRef.current = id;

      return () => {
        clearTimeout(id);
        setGameState((prevState) => ({ ...prevState, time: 0 }));
      };
    }
    setGameState(set_state(Number(gameSettings.number)));
  }, [instanceRef.current, gameSettings]);

  return (
    <SCGame>
      <Dialog
        shown={isInit || gameState?.gameOver}
        tint={isInit ? true : false}
      >
        {gameState?.gameOver ? (
          <End state={gameState} newGame={new_game} restart={restart} />
        ) : (
          <Start initialSettings={gameSettings} setSettings={set_settings} />
        )}
      </Dialog>
      <Navbar newGame={new_game} restart={restart} />
      <Board
        settings={gameSettings}
        update_score={update_score}
        key={instanceRef.current}
      />
      <Score score={gameState} />
    </SCGame>
  );
}
