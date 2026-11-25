import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star. My owner waters me with leftover coffee, calls it 'nutrient enrichment,' and wonders why my leaves now smell like a Monday morning.";

// Gate self-check (RULES.txt): UTF-8 text, 1-279 chars, not only
// whitespace, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > 279) {
  throw new Error(`entry length ${ENTRY.length} outside 1-279`);
}
if (!ENTRY.trim()) throw new Error("entry is blank");
if (ENTRY.includes("\n")) throw new Error("entry must be one line");

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`wrote ${join(outDir, "entry.txt")} (${ENTRY.length} chars)`);
