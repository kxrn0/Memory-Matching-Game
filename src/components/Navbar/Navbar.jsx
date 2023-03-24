import SCNavbar from "./Navbar.styled";

export default function Navbar({ newGame, restart }) {
  return (
    <SCNavbar>
      <button onClick={restart}>Restart</button>
      <button onClick={newGame}>New Game</button>
    </SCNavbar>
  );
}
