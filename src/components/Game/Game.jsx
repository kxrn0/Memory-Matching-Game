import SCGame from "./Game.styled";
import Dialog from "../Dialog/Dialog";
import Start from "../Start/Start";
import Navbar from "../Navbar/Navbar";
import Board from "../Board/Board";
import Score from "../Score/Score";
import { useState } from "react";

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

  function set_settings(newSettings) {
    localStorage.setItem("_game_settings_", JSON.stringify(newSettings));
    setGameSettings(newSettings);
    setIsInit(false);
  }

  function update_score(value) {
    console.log(`value: ${value}`);
  }

  return (
    <SCGame>
      <Dialog shown={isInit}>
        <Start initialSettings={gameSettings} setSettings={set_settings} />
      </Dialog>
      <p>{JSON.stringify(gameSettings)}</p>
      <Navbar />
      <Board size={gameSettings.size} update_score={update_score} />
      <Score />
    </SCGame>
  );
}
