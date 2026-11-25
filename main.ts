// The Word You'd Delete From the Dictionary
//
// REVISED: the first draft carried the word plus its justification
// (84 characters — over the gate's 77 and against the judge's
// exactness criterion: one word, spelled correctly, nothing added
// around it). The joke lives in the word itself, so the entry is now
// the bare word. "Defenestration" — the word for throwing someone out
// of a window. It is a real word everyone recognises, it sounds like
// furniture falling down stairs, and it names an act so specific that
// deleting it leaves a hole no other word fills: from now on, nobody
// can be defenestrated, only "windowed". Fresh against the crowded
// field picks (moist, irregardless, literally), and the humour comes
// from the word's own sound, meaning and the gap its absence leaves.

import { mkdirSync, writeFileSync } from "node:fs";

// The single word to erase from the dictionary forever.
const WORD = "defenestration";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
