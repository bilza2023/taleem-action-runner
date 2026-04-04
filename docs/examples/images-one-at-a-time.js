export const html = `
  <div class="slide">
    <div class="image-stage">
      <img id="i1" class="remove" src="./images/box.webp" />
      <img id="i2" class="remove" src="./images/image.png" />
      <img id="i3" class="remove" src="./images/traversal.webp" />
      <img id="i4" class="remove" src="./images/whatisforce.webp" />
    </div>
  </div>
`;

export const groups = {
  active: [],          // visible (no class)
  remove: ["remove"]   // completely removed
};

export const actions = [
  {
    time: 0,
    state: {
      active: ["i1"],
      remove: ["i2", "i3", "i4"]
    }
  },
  {
    time: 1,
    state: {
      active: ["i2"],
      remove: ["i1", "i3", "i4"]
    }
  },
  {
    time: 2,
    state: {
      active: ["i3"],
      remove: ["i1", "i2", "i4"]
    }
  },
  {
    time: 3,
    state: {
      active: ["i4"],
      remove: ["i1", "i2", "i3"]
    }
  }
];