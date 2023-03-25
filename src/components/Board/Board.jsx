import Flipper from "../Flipper/Flipper";
import SCBoard from "./Board.styled";
import create_numbers from "../../utilities/create_numbers";
import create_icons from "../../utilities/create_icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function BoardComponent({ settings, update_score }) {
  const [state, setState] = useState(
    settings.theme === "numbers"
      ? create_numbers(Number(settings.size))
      : create_icons(settings.size)
  );
  const [first, setFirst] = useState(null);
  const [cooling, setCooling] = useState(false);

  function handle_flipping(id, index) {
    setState((preveState) =>
      preveState.map((item, otherIndex) =>
        item.id === id && otherIndex === index
          ? { ...item, flipped: true }
          : item
      )
    );

    if (first) {
      const match = first.id === id;

      if (!match) {
        setCooling(true);
        setTimeout(() => {
          setState((prevState) =>
            prevState.map((item, otherIndex) =>
              (item.id === id && otherIndex === index) ||
              (item.id === first.id && first.index === otherIndex)
                ? { ...item, flipped: false }
                : item
            )
          );
          setCooling(false);
        }, 1000);
      }

      update_score({
        match,
        cellsLeft: state.reduce((tot, curr) => tot + !curr.flipped, 0),
      });
      setFirst(null);
    } else setFirst({ id, index });
  }

  const styles = (() => {
    const style = {};

    style["--length"] = settings.size;

    if (window.innerWidth <= 500) {
      if (settings.size === "4") {
        style["--gap"] = "13px";
        style["--width"] = "73px";
        style["--size"] = "40px";
      } else {
        style["--gap"] = "9px";
        style["--width"] = "47px";
        style["--size"] = "24px";
      }
    } else {
      if (settings.size === "4") {
        style["--gap"] = "20px";
        style["--width"] = "118px";
        style["--size"] = "56px";
      } else {
        style["--gap"] = "16px";
        style["width"] = "82px";
        style["--size"] = "44px";
      }
    }
    return style;
  })();

  return (
    <SCBoard style={styles}>
      {state.map((item, index) => (
        <span
          key={index}
          onClick={() =>
            item.flipped || cooling ? null : handle_flipping(item.id, index)
          }
        >
          <Flipper
            flipped={item.flipped}
            front={null}
            back={
              settings.theme === "numbers" ? (
                item.value
              ) : (
                <FontAwesomeIcon icon={item.value.icon} />
              )
            }
          />
        </span>
      ))}
    </SCBoard>
  );
}

export default function Board({ settings, update_score }) {
  return (
    <BoardComponent
      key={JSON.stringify(settings)}
      settings={settings}
      update_score={update_score}
    />
  );
}
