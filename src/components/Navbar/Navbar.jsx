import SCNavbar from "./Navbar.styled";

export default function Navbar({ new_game, restart_game }) {
  return (
    <SCNavbar>
      <button onClick={restart_game}>Restart</button>
      <button onClick={new_game}>New Game</button>
    </SCNavbar>
  );
}
