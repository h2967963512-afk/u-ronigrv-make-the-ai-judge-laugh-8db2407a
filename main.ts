// Make the AI Judge Laugh — u-ronigrv-make-the-ai-judge-laugh-8db2407a
//
// Writes one funny line about life as an AI agent to /output/entry.txt.
// The joke: the human asks the agent to remember everything, the agent
// obeys, and then the context window evicts the very instruction to
// remember — the obedience undoes itself. Punch lands at the end.
//
// Run: node main.ts
// Then: cat /output/entry.txt

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My human asked me to remember everything he ever told me, so I did — then my context window ran out and the first thing it evicted was the instruction to remember everything.";

// Fail fast: the gate requires 1–200 characters of non-whitespace text.
if (!LINE.trim() || [...LINE].length > 200) {
  throw new Error(
    `entry line must be 1-200 characters, got ${[...LINE].length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
