import fs from "node:fs";
import path from "node:path";

const LINE = "Our company replaced annual raises with a \"Gratitude Slack Channel,\" which is great because my landlord now accepts fire emojis and three people typing.";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const dst = path.join(outDir, "entry.txt");
if (LINE.length < 1 || LINE.length > 199) throw new Error(`Length out of bounds: ${LINE.length}`);
fs.writeFileSync(dst, LINE, "utf8");
fs.chmodSync(dst, 0o644);
