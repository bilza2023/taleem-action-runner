export const html = `
  <div class="slide">
    <div class="eq">

      <ul>
        <li id="item001">Step 1 — Identify the given information clearly.</li>
        <li id="item002">Step 2 — Translate the problem into mathematical form.</li>
        <li id="item003">Step 3 — Apply the correct formula carefully.</li>
        <li id="item004">Step 4 — Simplify the expression step by step.</li>
        <li id="item005">Step 5 — Verify intermediate calculations.</li>
        <li id="item006">Step 6 — Substitute values if needed.</li>
        <li id="item007">Step 7 — Reduce to simplest form.</li>
        <li id="item008">Step 8 — Interpret the result logically.</li>
        <li id="item009">Step 9 — Validate against the question.</li>
        <li id="item010">Step 10 — State the final answer clearly.</li>
      </ul>

      <div class="side-panel">

        <div id="item001-sp" class="remove">
          STEP 1:==> Before doing anything else, carefully read the question and extract all the known values. 
          Identify what is given, what is unknown, and what is being asked. This step builds the 
          foundation of the entire solution and prevents confusion later in the process.
        </div>

        <div id="item002-sp" class="remove">
          STEP 2:==> Convert the words of the problem into mathematical expressions. Replace verbal descriptions 
          with symbols, variables, and equations. This translation step is critical because mathematics 
          operates on structured expressions, not natural language.
        </div>

        <div id="item003-sp" class="remove">
          STEP 3:==> Choose the correct formula or principle that applies to the situation. This requires conceptual 
          understanding rather than memorization. Make sure the formula actually fits the structure of 
          the problem before applying it.
        </div>

        <div id="item004-sp" class="remove">
          STEP 4:==> Simplify the expression step by step, carefully handling each operation. Avoid skipping steps, 
          as small mistakes in simplification can lead to completely incorrect answers later on.
        </div>

        <div id="item005-sp" class="remove">
          STEP 5:==> At this stage, verify your intermediate calculations. Double-check arithmetic operations and 
          ensure that no terms were lost or incorrectly manipulated during simplification.
        </div>

        <div id="item006-sp" class="remove">
          STEP 6:==> Substitute numerical values only after the expression has been simplified as much as possible. 
          This reduces complexity and minimizes the chance of calculation errors.
        </div>

        <div id="item007-sp" class="remove">
          STEP 7:==> Continue reducing the expression to its simplest possible form. Remove unnecessary complexity 
          and present the result in a clean and understandable structure.
        </div>

        <div id="item008-sp" class="remove">
          STEP 8:==> Interpret the result in the context of the problem. Ask yourself what the answer actually 
          means and whether it makes logical sense within the given scenario.
        </div>

        <div id="item009-sp" class="remove">
          STEP 9:==> Validate the result by comparing it with the original question. Ensure that the solution 
          answers what was asked and satisfies all given conditions.
        </div>

        <div id="item010-sp" class="remove">
          STEP 10:==> Finally, present the answer clearly and concisely. Include units if required and write the 
          conclusion in a way that directly addresses the question.
        </div>

      </div>

    </div>
  </div>
`;

export const groups = {
  focus: [],
  dim: ["dim"],
  show: [],
  remove: ["remove"]
};

export const actions = [

    {
      time: 0,
      state: {
        focus: ["item001"],
        dim: ["item002","item003","item004","item005","item006","item007","item008","item009","item010"],
        show: ["item001-sp"],
        remove: ["item002-sp","item003-sp","item004-sp","item005-sp","item006-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 2,
      state: {
        focus: ["item002"],
        dim: ["item001","item003","item004","item005","item006","item007","item008","item009","item010"],
        show: ["item002-sp"],
        remove: ["item001-sp","item003-sp","item004-sp","item005-sp","item006-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 4,
      state: {
        focus: ["item003"],
        dim: ["item001","item002","item004","item005","item006","item007","item008","item009","item010"],
        show: ["item003-sp"],
        remove: ["item001-sp","item002-sp","item004-sp","item005-sp","item006-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 6,
      state: {
        focus: ["item004"],
        dim: ["item001","item002","item003","item005","item006","item007","item008","item009","item010"],
        show: ["item004-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item005-sp","item006-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 8,
      state: {
        focus: ["item005"],
        dim: ["item001","item002","item003","item004","item006","item007","item008","item009","item010"],
        show: ["item005-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item006-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 10,
      state: {
        focus: ["item006"],
        dim: ["item001","item002","item003","item004","item005","item007","item008","item009","item010"],
        show: ["item006-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item005-sp","item007-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 12,
      state: {
        focus: ["item007"],
        dim: ["item001","item002","item003","item004","item005","item006","item008","item009","item010"],
        show: ["item007-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item005-sp","item006-sp","item008-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 14,
      state: {
        focus: ["item008"],
        dim: ["item001","item002","item003","item004","item005","item006","item007","item009","item010"],
        show: ["item008-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item005-sp","item006-sp","item007-sp","item009-sp","item010-sp"]
      }
    },
  
    {
      time: 16,
      state: {
        focus: ["item009"],
        dim: ["item001","item002","item003","item004","item005","item006","item007","item008","item010"],
        show: ["item009-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item005-sp","item006-sp","item007-sp","item008-sp","item010-sp"]
      }
    },
  
    {
      time: 18,
      state: {
        focus: ["item010"],
        dim: ["item001","item002","item003","item004","item005","item006","item007","item008","item009"],
        show: ["item010-sp"],
        remove: ["item001-sp","item002-sp","item003-sp","item004-sp","item005-sp","item006-sp","item007-sp","item008-sp","item009-sp"]
      }
    }
  
  ];