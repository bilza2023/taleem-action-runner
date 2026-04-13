import { describe, it, expect, beforeEach } from "vitest";
import { runActions } from "../src/index.js";

describe("Bullet List — Hidden Reveal", () => {
  let root;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="slide" id="root">
        <ul>
          <li id="b1">1</li>
          <li id="b2">2</li>
          <li id="b3">3</li>
          <li id="b4">4</li>
          <li id="b5">5</li>
        </ul>
      </div>
    `;

    root = document.getElementById("root");
  });

  const groups = {
    hidden: ["hidden"]
  };

  const actions = [
    {
      time: 0,
      state: {
        hidden: ["b2","b3","b4","b5"]
      }
    },
    {
      time: 1,
      state: {
        hidden: ["b3","b4","b5"]
      }
    },
    {
      time: 2,
      state: {
        hidden: ["b4","b5"]
      }
    }
  ];

  function isHidden(id) {
    return document.getElementById(id).classList.contains("hidden");
  }

  it("t=0 → only b1 visible", () => {
    runActions(actions, groups, 0, root);

    expect(isHidden("b1")).toBe(false);
    expect(isHidden("b2")).toBe(true);
  });

  it("t=1 → b2 becomes visible", () => {
    runActions(actions, groups, 1, root);

    expect(isHidden("b2")).toBe(false);
    expect(isHidden("b3")).toBe(true);
  });

  it("t=2 → b3 becomes visible", () => {
    runActions(actions, groups, 2, root);

    expect(isHidden("b3")).toBe(false);
    expect(isHidden("b4")).toBe(true);
  });
});