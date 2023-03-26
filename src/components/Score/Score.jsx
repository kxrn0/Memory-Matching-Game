import format_time from "../../utilities/format_time";
import Pad from "../Pad/Pad";
import SCScore from "./Score.styled";

export default function Score({ score }) {
  let time;

  if (score && "time" in score) {
    time = format_time(score.time);
    time = `${time[0] ? `${time[0]}:` : ""}${time[1] ? `${time[1]}:` : ""}${
      time[2]
    }`;
  }

  return (
    <SCScore>
      {score ? (
        "time" in score ? (
          <ul>
            <li>
              <Pad label={"Time"} value={time} />
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
