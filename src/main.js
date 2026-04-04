
import { runActions } from "./actionRunner/runActions.js";

// 🔹 1. HTML (simple bullets)
const html = `
 <div class="slide">
  <ul>
    <li id="b1" class="hidden">First idea</li>
    <li id="b2" class="hidden">Second idea</li>
    <li id="b3" class="hidden">Third idea</li>
    <li id="b4" class="hidden">Fourth idea</li>
    <li id="b5" class="hidden">Fifth idea</li>
  </ul>
</div>
`;

document.getElementById("app").innerHTML = html;

// 🔹 2. Groups
const groups = {
  visible: [],
  hidden: ["hidden"]
};

// 🔹 3. Actions (reveal one by one)
const actions = [
  { time: 0, state: { visible: ["b1"], hidden: ["b2", "b3", "b4", "b5"] } },
  { time: 1, state: { visible: ["b1", "b2"], hidden: ["b3", "b4", "b5"] } },
  { time: 2, state: { visible: ["b1", "b2", "b3"], hidden: ["b4", "b5"] } },
  { time: 3, state: { visible: ["b1", "b2", "b3", "b4"], hidden: ["b5"] } },
  { time: 4, state: { visible: ["b1", "b2", "b3", "b4", "b5"], hidden: [] } }
];

// 🔹 4. Loop
let currentTime = 0;

setInterval(() => {
  currentTime += 0.1;

  runActions(actions, currentTime);

  document.getElementById("time").innerText = currentTime.toFixed(1) + "s";
}, 100);