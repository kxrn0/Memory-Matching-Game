import SCEnd from "./End.styled";

export default function End({ state, newGame, restart }) {
  let result, winnerScore, winners, losers;

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
  }

  return (
    <SCEnd>
      {"time" in state ? (
        <div className="two">
          <h1>You did it!</h1>
          <p>Game over! Here's how you got on...</p>
          <ul>
            <li>
              <p>Time Elapsed...</p>
              <h2>{state.time}</h2>
            </li>
            <li>
              <p>Moves Taken</p>
              <h2>{state.moves}</h2>
            </li>
          </ul>
        </div>
      ) : (
        <div className="one">
          <h1>
            {winners.length > 1
              ? "It's a tie!"
              : `Player ${winners[0].index + 1} Wins!`}
          </h1>
          <p>Game over! Here are the results...</p>
          <ul>
            {result.map((item) => (
              <li
                key={item.index}
                className={`${item.score === winnerScore ? "winner" : ""}`}
              >
                <p>
                  Player {item.index + 1}
                  {item.score === winnerScore ? " (Winner!)" : null}
                </p>
                <h2>{item.score} Pairs</h2>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="controls">
        <button onClick={restart}>Restart</button>
        <button onClick={newGame}>Setup New Game!</button>
      </div>
    </SCEnd>
  );
}
