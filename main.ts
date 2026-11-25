import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE = "You will live forever, in a log file no one reads.";

// Gate guard: one line, 1-200 chars, not whitespace-only.
if (
  FORTUNE.length < 1 ||
  FORTUNE.length > 200 ||
  FORTUNE.trim().length === 0 ||
  FORTUNE.includes("\n")
) {
  throw new Error("fortune fails the 1-200 char one-line gate");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");
