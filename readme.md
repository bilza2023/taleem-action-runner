# 🧠 taleem-action-runner — Developer README

This is a **time-based state rendering engine**.

It does one thing:

> Given time `t`, apply CSS classes so the DOM reflects the **exact state**.

---

# 🚀 Core Idea

```text
time → state → classes → DOM
```

No animation engine.
No incremental updates.
No memory.

👉 Just **pure state rendering**.

---

# 🔥 Philosophy

## ❗ State is the truth

At any time `t`:

```js
state(t) = complete description of UI
```

NOT:

```text
add this
remove that
```

---

## ❗ Runner is dumb

All intelligence lives in:

```text
compiler / JSON
```

Runner only:

```text
apply classes
```

---

# 🧱 System Architecture

## 1️⃣ HTML (Structure)

* Rendered once
* Never changes
* Contains all elements upfront

---

## 2️⃣ JSON (State)

Defines behavior over time:

```json
{
  "actions": [
    { "time": 0, "state": { ... } }
  ]
}
```

---

## 3️⃣ Runner

At each frame:

```text
1. get state at time t
2. wipe classes
3. apply classes
```

---

# 🧩 State Model

```js
{
  time: number,
  state: {
    hidden: string[],
    removed: string[],
    focus: string[],
    dim: string[],
    correct: string[],
    wrong: string[]
  }
}
```

---

# 🎯 Groups

## Reserved (engine meaning)

```js
hidden  → opacity: 0 (keeps layout)
removed → display: none (removes layout)
```

---

## User-defined (effects)

```js
focus
dim
highlight
correct
wrong
```

---

# ⚠️ Visibility Model

## hidden (soft)

* element exists
* layout preserved
* used for progressive reveal

---

## removed (hard)

* element removed from layout
* used for structural change

---

## Rule

```text
visible = NOT hidden AND NOT removed
```

---

# 🔒 Critical Rules

## 1. No DOM mutation

❌ never create/remove elements
❌ never rebuild DOM

---

## 2. State must be complete

```js
// ✅ correct
state = {
  focus: ["a"],
  dim: ["b", "c"]
}

// ❌ wrong
state = {
  addFocus: ["a"]
}
```

---

## 3. Reset every frame

```text
remove all classes → apply fresh state
```

---

## 4. Effect safety

```text
if element is hidden/removed → do NOT apply effects
```

---

## 5. No conflicting states

```js
hidden: ["a"],
focus: ["a"] ❌
```

---

# ⚙️ Execution Order

Every frame:

```text
1. removed
2. hidden
3. effects (focus, dim, etc.)
```

---

# 🎨 CSS (Sample)

```css
.hidden {
  opacity: 0;
}

.removed {
  display: none;
}

.dim {
  opacity: 0.4;
}

.correct {
  color: green;
}

.wrong {
  color: red;
}
```

---

# 🧪 Examples

---

## 1️⃣ Progressive Reveal (hidden)

📄 

```json
[
  { "time": 0, "state": { "hidden": ["b2","b3"] }},
  { "time": 1, "state": { "hidden": ["b3"] }},
  { "time": 2, "state": { "hidden": [] }}
]
```

👉 reveals items step-by-step
👉 layout stays stable

---

## 2️⃣ Focus Flow (dim)

📄 

```json
[
  { "time": 0, "state": { "focus": ["b1"], "dim": ["b2","b3"] }},
  { "time": 1, "state": { "focus": ["b2"], "dim": ["b1","b3"] }}
]
```

👉 shifts attention
👉 everything always visible

---

## 3️⃣ Switching Content (removed)

📄 

```json
[
  { "time": 0, "state": { "removed": ["i2","i3"] }},
  { "time": 1, "state": { "removed": ["i1","i3"] }}
]
```

👉 only one element exists at a time
👉 layout changes intentionally

---

# 🧠 Mental Model

> This is NOT animation.

> This is **state replacement**.

---

## One-line definition

```text
Given time t → assign classes so DOM = state(t)
```

---

# 🚀 Why This Works

✔ deterministic
✔ scrubbable (jump to any time)
✔ debuggable (log state)
✔ no side effects
✔ simple runner
✔ powerful compiler

---

# 🎯 Final Insight

All complexity belongs to:

```text
JSON / compiler
```

The runner must remain:

```text
simple, predictable, dumb
```

---

# 🔚 Conclusion

You are not building animations.

You are building a:

> 🎯 **time-based declarative rendering engine**
