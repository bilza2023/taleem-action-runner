export const html = `
  <div class="slide">
    <div class="image-list">
      <img id="i1" class="hidden" src="./images/box.webp" />
      <img id="i2" class="hidden" src="./images/image.png" />
      <img id="i3" class="hidden" src="./images/traversal.webp" />
      <img id="i4" class="hidden" src="./images/whatisforce.webp" />
    </div>
  </div>
`;

export const groups = {
  visible: [],
  hidden: ["hidden"]
};

export const actions = [
  { time: 0, state: { visible: ["i1"], hidden: ["i2","i3","i4"] }},
  { time: 1, state: { visible: ["i1","i2"], hidden: ["i3","i4"] }},
  { time: 2, state: { visible: ["i1","i2","i3"], hidden: ["i4"] }},
  { time: 3, state: { visible: ["i1","i2","i3","i4"], hidden: [] }}
];