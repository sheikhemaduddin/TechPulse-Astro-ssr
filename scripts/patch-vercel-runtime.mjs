/**
 * @astrojs/vercel v7 only maps Node 18/20; patch function runtime to 22.x
 * so Vercel and Cloudways both target the same Node major version.
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = ".vercel/output/functions";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) {
      walk(path);
      continue;
    }
    if (name !== ".vc-config.json") continue;

    const config = JSON.parse(readFileSync(path, "utf8"));
    if (config.runtime?.startsWith("nodejs")) {
      config.runtime = "nodejs22.x";
      writeFileSync(path, `${JSON.stringify(config, null, "\t")}\n`);
      console.log(`[patch-vercel-runtime] ${path} → nodejs22.x`);
    }
  }
}

try {
  statSync(ROOT);
} catch {
  process.exit(0);
}

walk(ROOT);
