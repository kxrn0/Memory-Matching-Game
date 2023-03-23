import Flipper from "../Flipper/Flipper";
import SCBoard from "./Board.styled";
import random from "../../utilities/random";
import { useState } from "react";

function numbers(size) {
  const length = (size * size) / 2;
  let array;

  array = [];

  while (array.length < length) {
    const value = ~~random(0, 100);

    if (!array.includes(value))
      array.push({ value, flipped: false, id: crypto.randomUUID() });
  }
  array = [...array, ...array];
  array.sort(Math.random);
  return array;
}

export default function Board({ size, update_score }) {
  return <BoardComponent key={size} size={size} update_score={update_score} />;
}

function BoardComponent({ size, update_score }) {
  const [state, setState] = useState(numbers(size));
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

      update_score(match);
      setFirst(null);
    } else setFirst({ id, index });
  }

  return (
    <SCBoard style={{ "--length": size }}>
      {/* <button onClick={() => console.log(state)}>state</button> */}
      {state.map((item, index) => (
        <span
          key={index}
          onClick={() =>
            item.flipped || cooling ? null : handle_flipping(item.id, index)
          }
        >
          <Flipper flipped={item.flipped} front={null} back={item.value} />
        </span>
      ))}
    </SCBoard>
  );
}
