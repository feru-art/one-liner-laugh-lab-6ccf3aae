// One-Liner Laugh Lab — entry: the excuse a robot vacuum gives after eating a sock.
// Writes exactly one line (no trailing newline) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I ate exactly one sock, and in return I demand to be addressed as Sir Sucks-A-Lot.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
