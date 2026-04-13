export function applyGroup({
    groupName,
    ids,
    groups,
    root,
    hiddenSet,
    removedSet
  }) {
// We get the list of classes from this specific group in array    
    const classes = groups[groupName] || [];
    if (!ids || !classes.length) return;
  
    
    for (const id of ids) {
      const el = root.querySelector(`#${id}`);
      if (!el) continue;
  
      // 🚫 safeguard: skip effects on hidden/removed (Exclude removed and hidden groups)
      if (groupName !== "hidden" && groupName !== "removed") {
        // remove elements present in removed and hidden groups
        if (hiddenSet.has(id) || removedSet.has(id)) continue;
      }
  
      for (const cls of classes) {
        el.classList.add(cls);
      }
    }
  }