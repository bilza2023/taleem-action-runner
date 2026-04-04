import { runActions } from "../src/index.js";

// 🔹 HTML setup
document.body.innerHTML = `
  <div class="slide">
    <ul>
      <li id="b1" class="hidden">1</li>
      <li id="b2" class="hidden">2</li>
      <li id="b3" class="hidden">3</li>
      <li id="b4" class="hidden">4</li>
      <li id="b5" class="hidden">5</li>
    </ul>
  </div>
`;

// 🔹 groups
const groups = {
  visible: [],
  hidden: ["hidden"]
};

// 🔹 actions
const actions = [
  { time: 0, state: { visible: ["b1"], hidden: ["b2","b3","b4","b5"] }},
  { time: 1, state: { visible: ["b1","b2"], hidden: ["b3","b4","b5"] }},
  { time: 2, state: { visible: ["b1","b2","b3"], hidden: ["b4","b5"] }},
];

// 🔹 helper
function hasHidden(id) {
  return document.getElementById(id).classList.contains("hidden");
}

// 🔹 TESTS

// t = 0
runActions(actions, groups, 0);

console.assert(!hasHidden("b1"), "b1 should be visible");
console.assert(hasHidden("b2"), "b2 should be hidden");

// t = 1
runActions(actions, groups, 1);

console.assert(!hasHidden("b2"), "b2 should now be visible");
console.assert(hasHidden("b3"), "b3 should still be hidden");

// t = 2
runActions(actions, groups, 2);

console.assert(!hasHidden("b3"), "b3 should now be visible");
console.assert(hasHidden("b4"), "b4 should still be hidden");

console.log("✅ bulletList test passed");