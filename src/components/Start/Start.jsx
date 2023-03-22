import SCStart from "./Start.styled";
import { useRef } from "react";

export default function Start(setSettings) {
  function handle_submission(event) {
    event.preventDefault();

    const form = event.target;

    console.log(form["theme"]);
    console.log(form["number-of-players"]);
    console.log(form["grid-size"]);
  }

  return (
    <SCStart onSubmit={handle_submission}>
      <fieldset>
        <legend>Select Theme</legend>
        <label htmlFor="numbers-theme">
          <input type="radio" id="numbers-theme" name="theme" />
          <span>Numbers</span>
        </label>
        <label htmlFor="icons-theme">
          <input type="radio" id="icons-theme" name="theme" />
          <span>Icons</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Number of PLayers</legend>
        <label htmlFor="players-1">
          <input type="radio" id="players-1" name="number-of-players" />
          <span>1</span>
        </label>
        <label htmlFor="players-2">
          <input type="radio" id="players-2" name="number-of-players" />
          <span>2</span>
        </label>
        <label htmlFor="players-3">
          <input type="radio" id="players-3" name="number-of-players" />
          <span>3</span>
        </label>
        <label htmlFor="players-4">
          <input type="radio" id="players-4" name="number-of-players" />
          <span>4</span>
        </label>
      </fieldset>
      <fieldset>
        <legend>Grid Size</legend>
        <label htmlFor="4x4">
          <input type="radio" name="grid-size" id="4x4" />
          <span>4x4</span>
        </label>
        <label htmlFor="6x6">
          <input type="radio" name="grid-size" id="6x6" />
          <span>6x6</span>
        </label>
      </fieldset>
      <button>Start Game</button>
    </SCStart>
  );
}
