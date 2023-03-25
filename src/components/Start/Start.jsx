import SCStart from "./Start.styled";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useState } from "react";

export default function Start({ initialSettings, setSettings }) {
  const [theme, setTheme] = useState(initialSettings.theme);
  const [number, setNumber] = useState(initialSettings.number);
  const [size, setSize] = useState(initialSettings.size);
  const themes = ["numbers", "icons"];
  const numbers = ["1", "2", "3", "4"];
  const sizes = ["4", "6"];

  function handle_submission(event) {
    event.preventDefault();

    setSettings({ theme, size, number });
  }

  return (
    <SCStart onSubmit={handle_submission}>
      <Logo />
      <section>
        <fieldset>
          <legend className="h3">Select Theme</legend>
          <ul>
            {themes.map((currentTheme) => (
              <li key={currentTheme}>
                <label htmlFor={currentTheme}>
                  <input
                    type="radio"
                    id={currentTheme}
                    name="theme"
                    value={currentTheme}
                    checked={currentTheme === theme}
                    onChange={(event) => setTheme(event.target.value)}
                  />
                  <span className="prm">{currentTheme}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend className="h3">Number of Players</legend>
          <ul>
            {numbers.map((currentNumber) => (
              <li key={currentNumber}>
                <label htmlFor={currentNumber}>
                  <input
                    type="radio"
                    id={currentNumber}
                    name="players"
                    value={currentNumber}
                    checked={currentNumber === number}
                    onChange={(event) => setNumber(event.target.value)}
                  />
                  <span className="prm">{currentNumber}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <fieldset>
          <legend className="h3">Grid Size</legend>
          <ul>
            {sizes.map((currentSize) => (
              <li key={currentSize}>
                <label htmlFor={currentSize}>
                  <input
                    type="radio"
                    id={currentSize}
                    name="sizes"
                    value={currentSize}
                    checked={currentSize === size}
                    onChange={(event) => setSize(event.target.value)}
                  />
                  <span className="prm">{`${currentSize}x${currentSize}`}</span>
                </label>
              </li>
            ))}
          </ul>
        </fieldset>
        <button className="h2">Start Game</button>
      </section>
    </SCStart>
  );
}
