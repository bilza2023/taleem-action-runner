export const html = `
  <div class="slide">
    <div class="two-list">
      
      <ul>
        <li id="l1">Concept A builds the foundation for deeper understanding.</li>
        <li id="l2">Concept B introduces interaction between components.</li>
        <li id="l3">Concept C reveals emergent behavior.</li>
        <li id="l4">Concept D connects theory with observation.</li>
        <li id="l5">Concept E strengthens predictive ability.</li>
      </ul>

      <ul>
        <li id="r1">Step 1 begins with basic assumptions.</li>
        <li id="r2">Step 2 challenges those assumptions.</li>
        <li id="r3">Step 3 refines the understanding.</li>
        <li id="r4">Step 4 exposes limitations.</li>
        <li id="r5">Step 5 completes the reasoning loop.</li>
      </ul>

    </div>
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
      focus: ["l3", "r1"],
      dim: ["l1","l2","l4","l5","r2","r3","r4","r5"]
    }
  },

  {
    time: 1,
    state: {
      focus: ["l1", "r4"],
      dim: ["l2","l3","l4","l5","r1","r2","r3","r5"]
    }
  },

  {
    time: 2,
    state: {
      focus: ["l5", "r2"],
      dim: ["l1","l2","l3","l4","r1","r3","r4","r5"]
    }
  },

  {
    time: 3,
    state: {
      focus: ["l2", "r5"],
      dim: ["l1","l3","l4","l5","r1","r2","r3","r4"]
    }
  },

  {
    time: 4,
    state: {
      focus: ["l4", "r3"],
      dim: ["l1","l2","l3","l5","r1","r2","r4","r5"]
    }
  }

];