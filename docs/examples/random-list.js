export const html = `
  <div class="slide">
    <ul>
      <li id="i1">Item 1 — Introduction to structured thinking</li>
      <li id="i2">Item 2 — Breaking problems into parts</li>
      <li id="i3">Item 3 — Understanding relationships</li>
      <li id="i4">Item 4 — Observing patterns carefully</li>
      <li id="i5">Item 5 — Building mental models</li>
      <li id="i6">Item 6 — Testing assumptions</li>
      <li id="i7">Item 7 — Refining understanding</li>
      <li id="i8">Item 8 — Connecting ideas together</li>
      <li id="i9">Item 9 — Predicting outcomes</li>
      <li id="i10">Item 10 — Achieving clarity</li>
    </ul>
  </div>
`;

export const groups = {
  focus: [],
  dim: ["dim"]
};

export const actions = [

  {
    time: 0,
    state: {
      focus: ["i4"],
      dim: ["i1","i2","i3","i5","i6","i7","i8","i9","i10"]
    }
  },

  {
    time: 1,
    state: {
      focus: ["i1"],
      dim: ["i2","i3","i4","i5","i6","i7","i8","i9","i10"]
    }
  },

  {
    time: 2,
    state: {
      focus: ["i7"],
      dim: ["i1","i2","i3","i4","i5","i6","i8","i9","i10"]
    }
  },

  {
    time: 3,
    state: {
      focus: ["i2"],
      dim: ["i1","i3","i4","i5","i6","i7","i8","i9","i10"]
    }
  },

  {
    time: 4,
    state: {
      focus: ["i9"],
      dim: ["i1","i2","i3","i4","i5","i6","i7","i8","i10"]
    }
  },

  {
    time: 5,
    state: {
      focus: ["i5"],
      dim: ["i1","i2","i3","i4","i6","i7","i8","i9","i10"]
    }
  }

];