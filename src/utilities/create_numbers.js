import random from "./random";

export default function create_numbers(size) {
  const length = (size * size) / 2;
  let numbers;

  numbers = [];
  while (numbers.length < length) {
    const value = ~~random(0, 100);

    if (!numbers.find((item) => item.value === value))
      numbers.push({ value, flipped: false, id: crypto.randomUUID() });
  }

  numbers = [...numbers, ...numbers];
  numbers.sort(() => random(-1, 1));
  return numbers;
}
