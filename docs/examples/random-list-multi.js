export const html = `
  <div class="slide">
    <ul>
      <li id="i1">Statement 1 — This is a possible interpretation of the concept.</li>
      <li id="i2">Statement 2 — This option looks correct at first glance.</li>
      <li id="i3">Statement 3 — This introduces a subtle misconception.</li>
      <li id="i4">Statement 4 — This aligns with the correct reasoning.</li>
      <li id="i5">Statement 5 — This mixes two ideas incorrectly.</li>
      <li id="i6">Statement 6 — This follows the proper logical structure.</li>
      <li id="i7">Statement 7 — This is a common mistake students make.</li>
      <li id="i8">Statement 8 — This reflects a deeper understanding.</li>
      <li id="i9">Statement 9 — This is partially correct but incomplete.</li>
      <li id="i10">Statement 10 — This is fully correct and justified.</li>
    </ul>
  </div>
`;

export const groups = {
  correct: ["correct"],
  wrong: ["wrong"],
  dim: ["dim"]
};

export const actions = [

  {
    time: 0,
    state: {
      correct: ["i4"],
      wrong: ["i3"],
      dim: ["i1","i2","i5","i6","i7","i8","i9","i10"]
    }
  },

  {
    time: 1,
    state: {
      correct: ["i6"],
      wrong: ["i2"],
      dim: ["i1","i3","i4","i5","i7","i8","i9","i10"]
    }
  },

  {
    time: 2,
    state: {
      correct: ["i8"],
      wrong: ["i5"],
      dim: ["i1","i2","i3","i4","i6","i7","i9","i10"]
    }
  },

  {
    time: 3,
    state: {
      correct: ["i10"],
      wrong: ["i7"],
      dim: ["i1","i2","i3","i4","i5","i6","i8","i9"]
    }
  },

  {
    time: 4,
    state: {
      correct: ["i1"],
      wrong: ["i9"],
      dim: ["i2","i3","i4","i5","i6","i7","i8","i10"]
    }
  }

];