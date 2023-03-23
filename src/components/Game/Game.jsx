import SCGame from "./Game.styled";
import Dialog from "../Dialog/Dialog";
import Start from "../Start/Start";
import Navbar from "../Navbar/Navbar";
import Board from "../Board/Board";
import Score from "../Score/Score";
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

  function set_state(number) {
    // const number = Number(settings.number);

    if (number > 1) {
      const players = new Array(number);

      players.fill(0);
      return { players, turn: 0 };
    } else return { moves: 0, time: 0 };
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
        turn: (prevState.turn + 1) % 4,
      }));

    if (result.cellsLeft === 1) {
      clearTimeout(timeRef.current);
      console.log("game over");
      console.log(gameState);
    }
  }

  useEffect(() => {
    if (Number(gameSettings.number) === 1) {
      const id = setInterval(() => {
        console.log(`in timer ${Math.random()}`);
        setGameState((prevState) => ({
          ...prevState,
          time: prevState.time + 1,
        }));
      }, 1000);

      timeRef.current = id;

      return () => {
        clearTimeout(id);
        setGameState((prevState) => ({ ...prevState, time: 0 }));
      };
    }
  }, [gameSettings]);

  return (
    <SCGame>
      <button onClick={() => console.log(gameState)}>state</button>
      <Dialog shown={isInit}>
        <Start initialSettings={gameSettings} setSettings={set_settings} />
      </Dialog>
      <p>{JSON.stringify(gameSettings)}</p>
      <Navbar />
      <Board settings={gameSettings} update_score={update_score} />
      <Score />
    </SCGame>
  );
}
