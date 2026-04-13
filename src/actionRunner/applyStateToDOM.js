import { applyGroup } from "./applyGroup.js";

export function applyStateToDOM(state, groups, root) {
  if (!root || !state) return;
  
  // 🔹 collect all elements from the root not from page
  const allEls = root.querySelectorAll("[id]");

  // 🔹 collect all classes
  const allClasses = Object.values(groups).flat();

  // 🔹 CLEAN - no old histor
  for (const el of allEls) {
    for (const cls of allClasses) {
      el.classList.remove(cls);
    }
  }

  // 🔹 sets obtain hidden and removed elements ids
  const hiddenSet = new Set(state.hidden || []);
  const removedSet = new Set(state.removed || []);

  // 🔥 ORDERED APPLY
  applyGroup({
    groupName: "removed",
    ids: state.removed,
    groups,
    root,
    hiddenSet,
    removedSet
  });

  applyGroup({
    groupName: "hidden",
    ids: state.hidden,
    groups,
    root,
    hiddenSet,
    removedSet
  });

  // Object.entries(state) becomes:
  // [
  //   ["removed", ["a"]],
  //   ["hidden", ["b"]],
  //   ["focus", ["c"]],
  //   ["dim", ["d"]]
  // ]
  
  // 🔹 rest
  for (const [groupName, ids] of Object.entries(state)) {
    if (groupName === "removed" || groupName === "hidden") continue;

    applyGroup({
      groupName,
      ids,
      groups,
      root,
      hiddenSet,
      removedSet
    });
  }
}