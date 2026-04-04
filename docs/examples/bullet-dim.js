
export const html = `
  <div class="slide">
    <ul>
      <li id="b1">Clarity comes from structure</li>
      <li id="b2">State defines everything</li>
      <li id="b3">No incremental logic</li>
      <li id="b4">Clean → then apply</li>
      <li id="b5">Deterministic behavior</li>
      <li id="b6">Scrubbing is safe</li>
      <li id="b7">Groups define meaning</li>
      <li id="b8">Registry maps styles</li>
      <li id="b9">Engine stays dumb</li>
      <li id="b10">State is the intelligence</li>
    </ul>
  </div>
`;

export const groups = {
  focus: [],          // normal (no class)
  dim: ["dim"]        // dim others
};

export const actions = [
  {
    time: 0,
    state: {
      focus: ["b1"],
      dim: ["b2","b3","b4","b5","b6","b7","b8","b9","b10"]
    }
  },
  {
    time: 1,
    state: {
      focus: ["b2"],
      dim: ["b1","b3","b4","b5","b6","b7","b8","b9","b10"]
    }
  },
  {
    time: 2,
    state: {
      focus: ["b3"],
      dim: ["b1","b2","b4","b5","b6","b7","b8","b9","b10"]
    }
  },
  {
    time: 3,
    state: {
      focus: ["b4"],
      dim: ["b1","b2","b3","b5","b6","b7","b8","b9","b10"]
    }
  },
  {
    time: 4,
    state: {
      focus: ["b5"],
      dim: ["b1","b2","b3","b4","b6","b7","b8","b9","b10"]
    }
  },
  {
    time: 5,
    state: {
      focus: ["b6"],
      dim: ["b1","b2","b3","b4","b5","b7","b8","b9","b10"]
    }
  },
  {
    time: 6,
    state: {
      focus: ["b7"],
      dim: ["b1","b2","b3","b4","b5","b6","b8","b9","b10"]
    }
  },
  {
    time: 7,
    state: {
      focus: ["b8"],
      dim: ["b1","b2","b3","b4","b5","b6","b7","b9","b10"]
    }
  },
  {
    time: 8,
    state: {
      focus: ["b9"],
      dim: ["b1","b2","b3","b4","b5","b6","b7","b8","b10"]
    }
  },
  {
    time: 9,
    state: {
      focus: ["b10"],
      dim: ["b1","b2","b3","b4","b5","b6","b7","b8","b9"]
    }
  }
];