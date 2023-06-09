import SCGame from "./Game.styled";
import Dialog from "../Dialog/Dialog";
import Start from "../Start/Start";
import Navbar from "../Navbar/Navbar";
import Board from "../Board/Board";
import Score from "../Score/Score";
import End from "../End/End";
import Options from "../Options/Options";
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
  const [showOptions, setShowOptions] = useState(false);
  const [gameState, setGameState] = useState(null);
  const timeRef = useRef(null);
  const instanceRef = useRef(1);

  function set_state(number) {
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
    setShowOptions(false);
  }

  function new_game() {
    setGameState((prevState) => ({ ...prevState, gameOver: false }));
    instanceRef.current = instanceRef.current + 1;
    setIsInit(true);
    setShowOptions(false);
  }

  useEffect(() => {
    if (Number(gameSettings.number) === 1) {
      const id = setInterval(() => {
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
        shown={isInit || gameState?.gameOver || showOptions}
        tint={isInit ? true : false}
      >
        {isInit ? (
          <Start initialSettings={gameSettings} setSettings={set_settings} />
        ) : showOptions ? (
          <Options
            new_game={new_game}
            restart={restart}
            close={() => setShowOptions(false)}
          />
        ) : (
          <End state={gameState} newGame={new_game} restart={restart} />
        )}
      </Dialog>
      <Navbar
        newGame={new_game}
        restart={restart}
        open_options={() => setShowOptions(true)}
      />
      <Board
        settings={gameSettings}
        update_score={update_score}
        key={instanceRef.current}
      />
      <Score score={gameState} />
    </SCGame>
  );
}
