import { ReactComponent as Logo } from "../../assets/logo.svg";
import SCNavbar from "./Navbar.styled";

export default function Navbar({ newGame, restart }) {
  return (
    <SCNavbar>
      <Logo />
      <div className="controls">
        <button onClick={restart} className="primary-button h3">
          Restart
        </button>
        <button onClick={newGame} className="secondary-button h3">
          New Game
        </button>
      </div>
    </SCNavbar>
  );
}
