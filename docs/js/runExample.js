import { runActions } from "../src/index.js";

export function startExample({ actions, groups }) {
  let currentTime = 0;

  const timeEl = document.getElementById("time");

  setInterval(() => {
    currentTime += 0.1;

    runActions(actions, groups, currentTime);

    if (timeEl) {
      timeEl.innerText = currentTime.toFixed(1) + "s";
    }
  }, 100);
}