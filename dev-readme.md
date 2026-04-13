# 🧠 taleem-action-runner — Developer Notes (Architecture & Decisions)

This document explains:

* Why the system is designed this way
* What problems were encountered earlier
* The final mental model
* The exact contract between compiler → runner
* How to implement correctly (and what NOT to do)

---

# 1. 🧭 Core Philosophy

The system is based on one idea:

> At time **t**, the DOM must reflect a **complete state**.

No transitions.
No incremental updates.
No memory.

---

## Final Model

```text
time → state → class assignment → DOM
```

---

# 2. ❌ What We Tried Before (and Why It Failed)

## 2.1 Progressive Rendering (DOM add/remove)

Old approach:

```js
if (time > t) render element
else skip
```

### Problems:

I. Layout instability

* bullet lists collapse
* spacing changes per step

II. Visual inconsistency

* slides look broken mid-way

III. EQ slides fail completely

* alignment depends on full structure

---

## 2.2 Mixed Visibility + Effects Logic

We previously mixed:

* visibility (show/hide)
* effects (highlight, dim)

This caused:

* unclear responsibility
* conflicting states
* hard debugging

---

# 3. ✅ Final Decision

## 🔒 LOCKED RULES

I. Full HTML is rendered once
II. DOM structure NEVER changes during playback
III. Runner NEVER creates/removes elements
IV. Everything is controlled via CSS classes
V. State is ALWAYS complete

---

# 4. 🧠 Final System Design

## 4.1 Two Layers

### Layer 1 — Structure (outside runner)

Responsible for:

```text
What HTML exists
```

This happens:

* once per slide
* before runner starts

---

### Layer 2 — Runner

Responsible for:

```text
How elements look at time t
```

---

# 5. 🧩 State Model (FINAL)

Each action:

```js
{
  time: number,
  state: {
    removed: string[],
    hidden: string[],
    focus: string[],
    dim: string[],
    highlight: string[]
  }
}
```

---

# 6. 🎯 Group Semantics

## Reserved groups (engine meaning)

```js
const groups = {
  hidden: ["hidden"],     // opacity: 0 (keeps layout)
  removed: ["removed"],   // display: none (removes layout)
};
```

---

## Effect groups (user-defined)

```js
focus: [],
dim: ["dim"],
highlight: ["highlight"]
```

---

## CSS

```css
.hidden {
  opacity: 0;
}

.removed {
  display: none;
}
```

---

# 7. ⚠️ Visibility Model (Important)

## Two types of visibility

### I. hidden (soft)

* element exists
* layout preserved
* used for teaching flow

### II. removed (hard)

* element removed from layout
* used for:

  * skeleton screens
  * structural absence

---

## Rule:

```text
Use hidden for progression
Use removed for structure changes
```

---

# 8. 🔒 Critical Rules

## Rule 1 — No DOM mutation

```text
Runner must NEVER:
- create elements
- remove elements
- rebuild DOM
```

---

## Rule 2 — State is complete

Every action must describe full truth:

```js
// GOOD
state = {
  focus: ["a"],
  dim: ["b", "c"]
}
```

```js
// BAD
state = {
  addFocus: ["a"]
}
```

---

## Rule 3 — Class reset every frame

Implementation must:

```js
1. remove all known classes
2. apply new classes
```

---

## Rule 4 — Effect safety

Effects must NOT apply to hidden/removed elements.

```js
if (id in hidden || id in removed) skip
```

---

## Rule 5 — No conflicting states

Invalid:

```js
hidden: ["a"],
focus: ["a"]
```

Compiler should prevent this.

---

# 9. ⚙️ Runner Execution Order

For each frame:

```text
1. get state at time t
2. wipe all classes
3. apply removed
4. apply hidden
5. apply effects (focus, dim, highlight)
```

---

# 10. 🧪 Example Actions

## Example 1 — Bullet Reveal

```js
[
  {
    time: 0,
    state: {
      hidden: ["b", "c"],
      focus: ["a"]
    }
  },
  {
    time: 2,
    state: {
      hidden: ["c"],
      focus: ["b"],
      dim: ["a"]
    }
  },
  {
    time: 4,
    state: {
      focus: ["c"],
      dim: ["a", "b"]
    }
  }
]
```

---

## Example 2 — Skeleton → Content

```js
[
  {
    time: 0,
    state: {
      removed: ["title", "body"],
      focus: ["skeleton"]
    }
  },
  {
    time: 3,
    state: {
      removed: ["skeleton"],
      focus: ["title"],
      dim: ["body"]
    }
  }
]
```

---

## Example 3 — EQ Step Reveal

```js
[
  {
    time: 0,
    state: {
      hidden: ["step2", "step3"],
      focus: ["step1"]
    }
  },
  {
    time: 2,
    state: {
      hidden: ["step3"],
      focus: ["step2"],
      dim: ["step1"]
    }
  }
]
```

---

# 11. 🧠 Compiler Responsibility

The compiler must:

I. Assign stable IDs
II. Generate complete states
III. Ensure no conflicts
IV. Ensure every element is classified
V. Enforce effect safety

---

## Compiler Output Contract

```js
{
  actions: [...],
  groups: {...}
}
```

---

# 12. 🚫 What NOT To Do

❌ Do NOT mutate DOM
❌ Do NOT do incremental updates
❌ Do NOT mix visibility + structure
❌ Do NOT rely on previous state
❌ Do NOT apply effects blindly

---

# 13. 🎯 Final Mental Model

> The runner is not an animation engine.

> It is a **state → class mapper**.

---

## One-line definition

```text
Given time t → assign CSS classes so DOM matches state exactly
```

---

# 14. 🚀 Why This Works

✔ Deterministic
✔ Scrubbable (jump to any time)
✔ Debuggable (log state)
✔ Simple runner
✔ Powerful compiler

---

# 15. 🔚 Final Note

All complexity belongs in:

```text
compiler
```

The runner must remain:

```text
dumb, predictable, stable
```

must also export a sample css file