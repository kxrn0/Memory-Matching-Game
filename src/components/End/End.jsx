import format_time from "../../utilities/format_time";
import SCEnd from "./End.styled";

export default function End({ state, newGame, restart }) {
  let result, winnerScore, winners, losers, time;

  if ("turn" in state) {
    const scores = state.players;

    winnerScore = scores.reduce((max, curr) => (max < curr ? curr : max), 0);

    winners = scores
      .map((score, index) => (score === winnerScore ? { score, index } : null))
      .filter((score) => score);
    losers = scores
      .map((score, index) => (score !== winnerScore ? { score, index } : null))
      .filter((score) => score)
      .sort((a, b) => b.score - a.score);

    result = [...winners, ...losers];
  } else {
    time = format_time(state.time);
    time = `${time[0] ? `${time[0]}:` : ""}${time[1] ? `${time[1]}:` : ""}${
      time[2]
    }`;
  }

  return (
    <SCEnd>
      {"time" in state ? (
        <div className="results">
          <h1 className="h1">You did it!</h1>
          <p className="body title">Game over! Here's how you got on...</p>
          <ul>
            <li>
              <p className="body">Time Elapsed...</p>
              <h2 className="h2">{time}</h2>
            </li>
            <li>
              <p className="body">Moves Taken</p>
              <h2 className="h2">{state.moves}</h2>
            </li>
          </ul>
        </div>
      ) : (
        <div className="results">
          <h1 className="h1">
            {winners.length > 1
              ? "It's a tie!"
              : `Player ${winners[0].index + 1} Wins!`}
          </h1>
          <p className="body title">Game over! Here are the results...</p>
          <ul>
            {result.map((item) => (
              <li
                key={item.index}
                className={`${item.score === winnerScore ? "winner" : ""}`}
              >
                <p className="body">
                  Player {item.index + 1}
                  {item.score === winnerScore ? " (Winner!)" : null}
                </p>
                <h2 className="h2">{item.score} Pairs</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="controls">
        <button onClick={restart} className="primary-button h3">
          Restart
        </button>
        <button onClick={newGame} className="secondary-button h3">
          Setup New Game!
        </button>
      </div>
    </SCEnd>
  );
}
