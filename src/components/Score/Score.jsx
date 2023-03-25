import Pad from "../Pad/Pad";
import SCScore from "./Score.styled";

export default function Score({ score }) {
  return (
    <SCScore>
      {score ? (
        "time" in score ? (
          <ul>
            <li>
              <Pad label={"Time"} value={score.time} />
            </li>
            <li>
              <Pad label={"Moves"} value={score.moves} />
            </li>
          </ul>
        ) : (
          <ul>
            {score.players.map((player, index) => (
              <li key={index}>
                <Pad
                  label={`${window.innerWidth <= 500 ? "P" : "Player "}${
                    index + 1
                  }`}
                  turn={score.turn === index}
                  value={player}
                />
              </li>
            ))}
          </ul>
        )
      ) : (
        <p>no score...</p>
      )}
    </SCScore>
  );
}
