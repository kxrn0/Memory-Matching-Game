import {
  faHippo,
  faOtter,
  faDog,
  faCow,
  faDragon,
  faKiwiBird,
  faWorm,
  faSpider,
  faShrimp,
  faMosquito,
  faLocust,
  faHorse,
  faFrog,
  faFishFins,
  faDove,
  faCrow,
  faCat,
  faBugs,
  faEarthAsia,
} from "@fortawesome/free-solid-svg-icons";
import random from "./random.js";

const ICONS = [
  { name: "hippo", icon: faHippo },
  { name: "otter", icon: faOtter },
  { name: "god", icon: faDog },
  { name: "cow", icon: faCow },
  { name: "dragon", icon: faDragon },
  { name: "kiwi", icon: faKiwiBird },
  { name: "worm", icon: faWorm },
  { name: "spider", icon: faSpider },
  { name: "shrimp", icon: faShrimp },
  { name: "mosquito", icon: faMosquito },
  { name: "locust", icon: faLocust },
  { name: "horse", icon: faHorse },
  { name: "frog", icon: faFrog },
  { name: "fish", icon: faFishFins },
  { name: "dove", icon: faDove },
  { name: "crow", icon: faCrow },
  { name: "cat", icon: faCat },
  { name: "bugs", icon: faBugs },
  { name: "earth", icon: faEarthAsia },
];

export default function create_icons(size) {
  const length = (size * size) / 2;
  let icons;

  icons = [];
  while (icons.length < length) {
    const icon = ICONS[~~random(0, ICONS.length)];

    if (!icons.find((item) => item.value.name === icon.name))
      icons.push({ value: icon, flipped: false, id: crypto.randomUUID() });
  }
  icons = [...icons, ...icons];
  icons.sort(() => random(-1, 1));
  return icons;
}
