import SCOptions from "./Options.styled";

export default function Options({ new_game, restart, close }) {
  return (
    <SCOptions>
      <button className="primary-button h3" onClick={restart}>
        Restart
      </button>
      <button className="secondary-button h3" onClick={new_game}>
        New Game!
      </button>
      <button className="secondary-button h3" onClick={close}>
        Resume Game
      </button>
    </SCOptions>
  );
}
