

# 🚀 taleem-action-runner

A small engine that maps **time → state → DOM**.

No animation logic.
No incremental updates.
Just **define what should be true at time *t*** and the DOM reflects it.

---

## What it does

Given a timeline of states, the runner:

* picks the correct state for the current time
* clears previously applied classes
* applies the new state to the DOM

The result is fully deterministic and scrub-safe.

---
> <a href="https://bilza2023.github.io/taleem-action-runner/">Examples</a>
---

## Core Idea

At any time `t`, there is exactly **one valid state**.

The DOM is always forced to match that state.

No transitions. No memory. No side effects.

---

## Basic Example

```js
export const html = `
  <ul>
    <li id="a">A</li>
    <li id="b">B</li>
    <li id="c">C</li>
  </ul>
`;

export const groups = {
  focus: [],
  dim: ["dim"]
};

export const actions = [
  {
    time: 0,
    state: {
      focus: ["a"],
      dim: ["b", "c"]
    }
  },
  {
    time: 1,
    state: {
      focus: ["b"],
      dim: ["a", "c"]
    }
  }
];
```

---

## How it works

1. Find the latest action where `time <= currentTime`
2. Remove all known classes (from `groups`)
3. Apply classes based on the current state

This happens on every update.

---

## Concepts

### Actions

A timeline of states.

Each action defines:

* when it becomes active (`time`)
* what the full state is (`state`)

State must always be complete.

---

### State

A mapping of groups → element IDs.

Each element must belong to exactly one group.

---

### Groups

Groups define meaning, not style.

```js
const groups = {
  focus: [],
  dim: ["dim"],
  hidden: ["hidden"]
};
```

The engine does not know CSS.
It only applies classes defined here.

---

## Rules

* State is always complete (not partial)
* One element → one group
* No incremental updates
* No add/remove logic
* All behavior comes from state
* Classes are controlled only through `groups`

---

## Why this model

* deterministic behavior
* safe scrubbing (jump to any time)
* no hidden state bugs
* simple mental model

---

## Scope

This is a **low-level engine**.

It does not define:

* slide types
* layouts
* content structure

It only enforces state on the DOM.

---

## Principle

> The DOM must exactly match the state at time *t* — nothing more, nothing less.
