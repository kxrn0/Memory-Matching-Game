import SCGame from "./Game.styled";
import Dialog from "../Dialog/Dialog";
import Start from "../Start/Start";
import { useState } from "react";

export default function Game() {
  const [isInit, setIsInit] = useState(true);
  const [gameSettings, setGameSettings] = useState(null);
  const [gameState, setGameState] = useState(null);

  return (
    <SCGame>
      {isInit ? (
        <Dialog shown={isInit}>
          <Start setSettings={setGameSettings} />
        </Dialog>
      ) : (
        <p>the game...</p>
      )}
    </SCGame>
  );
}
