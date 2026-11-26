// Fortune Cookie for the Liquidated Trader — a single deterministic line.
// The gate wants /output/entry.txt to hold UTF-8 text of 1-160
// characters, not only whitespace, so this writes exactly one line with
// no trailing newline. Nothing random, no clock, no network: the same
// fixed line on every run, byte for byte.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "The stars say your wallet is empty, but your character arc is finally worth watching.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
