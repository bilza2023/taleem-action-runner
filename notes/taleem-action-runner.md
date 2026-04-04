
# 🚀 **taleem-action-runner**

## 🎯 Mission

> Convert a **time-based state snapshot** into **DOM class projection**

That’s it.
No animation logic. No decisions. Just **state → DOM**

---

## 🧠 Core Idea

> At time `t` → fetch ONE complete state → fully project it to DOM

✔ no incremental updates
✔ no dependency on past state
✔ fully deterministic
✔ scrub-safe

---

## 📦 Input (Action Shape)

```json
{
  "time": 3,
  "state": {
    "visible": ["id1", "id2"],
    "hidden": ["id3"]
  }
}
```

### Rules

* `time` → activation point
* `state` → **complete snapshot (not partial)**
* each item must belong to **exactly one group**
* groups are **semantic**, not CSS

---

## ⏱ Time Resolution

```js
getStateAtTime(actions, currentTime)
```

Returns:

> latest state where `action.time <= currentTime`

✔ actions must be sorted (or sort once before use)
✔ early exit for efficiency

---

## ⚙️ Runner Flow

```js
runActions(actions, currentTime)
```

### Steps

1. Resolve state at time `t`
2. **Clean** → remove ALL known classes (from registry)
3. **Apply** → assign classes based on state groups

---

## 🔄 Translation Layer (Schema)

> Defines meaning of groups (decouples logic from CSS)

```js
const groupRegistry = {
  visible: [],
  hidden: ["hidden"]
};
```

### Rule

> Engine never hardcodes classes — registry is the contract

---

## 🔥 Clean-before-Apply (CRITICAL)

> We do NOT add/remove incrementally
> We **clean → then apply**

* Remove **ALL known classes** (from registry)
* Then apply classes for current state

⚠️ Not “all classes in DOM” — only **all classes defined in registry**

---

## ❌ Forbidden Model

* No “addClass / removeClass” actions
* No partial updates
* No reliance on previous state

---

## 🧩 DOs (Hard Rules)

* One item → one group
* State must be complete
* Groups must be semantic
* Registry controls all CSS mapping
* Always clean-before-apply
* Actions must be time-sorted

---

## 🚫 DON’Ts

* No incremental logic
* No multi-group membership
* No CSS inside actions
* No DOM-global queries (scope to slide)
* No hidden implicit state

---

## ⚠️ Failure Modes

### 1. Expressive Failure (Design)

> State cannot describe desired visual behavior

Fix: expand **groups**, not engine

---

### 2. Translation Failure (Runtime)

> State correct, DOM incorrect

Usually:

* wrong IDs
* registry mismatch
* renderer issue

Low risk once stabilized

---

## 🧠 Mental Model

* **Actions** → timeline
* **State** → truth at time `t`
* **Registry** → meaning of groups
* **Runner** → enforces truth on DOM

---

## 🏁 Final Principle

> “At any moment, DOM must exactly match the state — nothing more, nothing less.”
