export const html = `
  <div class="slide">
    <ul>
      <li id="b1" class="hidden">Clarity comes from structure</li>
      <li id="b2" class="hidden">State defines everything</li>
      <li id="b3" class="hidden">No incremental logic</li>
      <li id="b4" class="hidden">Clean → then apply</li>
      <li id="b5" class="hidden">Deterministic behavior</li>
      <li id="b6" class="hidden">Scrubbing is safe</li>
      <li id="b7" class="hidden">Groups define meaning</li>
      <li id="b8" class="hidden">Registry maps styles</li>
      <li id="b9" class="hidden">Engine stays dumb</li>
      <li id="b10" class="hidden">State is the intelligence</li>
    </ul>
  </div>
`;

export const groups = {
  visible: [],
  hidden: ["hidden"]
};

export 
const actions = [
  { time: 0, state: { visible: ["b1"], hidden: ["b2","b3","b4","b5","b6","b7","b8","b9","b10"] }},
  { time: 1, state: { visible: ["b1","b2"], hidden: ["b3","b4","b5","b6","b7","b8","b9","b10"] }},
  { time: 2, state: { visible: ["b1","b2","b3"], hidden: ["b4","b5","b6","b7","b8","b9","b10"] }},
  { time: 3, state: { visible: ["b1","b2","b3","b4"], hidden: ["b5","b6","b7","b8","b9","b10"] }},
  { time: 4, state: { visible: ["b1","b2","b3","b4","b5"], hidden: ["b6","b7","b8","b9","b10"] }},
  { time: 5, state: { visible: ["b1","b2","b3","b4","b5","b6"], hidden: ["b7","b8","b9","b10"] }},
  { time: 6, state: { visible: ["b1","b2","b3","b4","b5","b6","b7"], hidden: ["b8","b9","b10"] }},
  { time: 7, state: { visible: ["b1","b2","b3","b4","b5","b6","b7","b8"], hidden: ["b9","b10"] }},
  { time: 8, state: { visible: ["b1","b2","b3","b4","b5","b6","b7","b8","b9"], hidden: ["b10"] }},
  { time: 9, state: { visible: ["b1","b2","b3","b4","b5","b6","b7","b8","b9","b10"], hidden: [] }}
];
///////////////////////////////////////////////////////////