import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The vow: a robot's wedding promise, spoken in its own language.
// The joke is the situation itself -- a machine swearing uptime like a
// service contract -- and the tenderness is the choice it keeps making.
const vow =
  "I promise you 99.9% uptime till firmware do us part, and the other 0.1% is for recharging beside you, so I can wake each morning and choose you again.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), vow, "utf8");
