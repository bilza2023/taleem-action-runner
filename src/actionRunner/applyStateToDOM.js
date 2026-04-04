export function applyStateToDOM(state, groups) {
  const slide = document.querySelector(".slide");
  if (!slide) return;

  const allEls = slide.querySelectorAll("[id]");

  // 🔹 1. collect all classes from groups
  const allClasses = Object.values(groups).flat();

  // 🔹 2. CLEAN
  for (const el of allEls) {
    for (const cls of allClasses) {
      el.classList.remove(cls);
    }
  }

  // 🔹 3. APPLY
  for (const [groupName, ids] of Object.entries(state)) {
    const classes = groups[groupName] || [];

    for (const id of ids) {
      const el = slide.querySelector(`#${id}`);
      if (!el) continue;

      for (const cls of classes) {
        el.classList.add(cls);
      }
    }
  }
}