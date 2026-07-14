import { readFile } from "node:fs/promises";
import path from "node:path";

import picocolors from "picocolors";

const msgPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.resolve(".git/COMMIT_EDITMSG");
const msg = (await readFile(msgPath, "utf-8")).trim();

const types = [
  "feat",
  "fix",
  "docs",
  "style",
  "refactor",
  "perf",
  "test",
  "workflow",
  "build",
  "ci",
  "chore",
  "types",
  "release",
];

const commitRE = /^(?:revert: )?(?<type>[^(]*?)!?: .{1,50}$/u;

const match = commitRE.exec(msg);

if (!match) {
  console.error(
    `${picocolors.white(picocolors.bgRed(" ERROR "))} ${picocolors.red(
      `invalid commit message format.`,
    )}`,
  );
  process.exit(1);
}

if (!types.includes(match.groups?.type ?? "")) {
  console.error(
    `${picocolors.white(picocolors.bgRed(" ERROR "))} ${picocolors.red(
      `invalid commit message type: "${match.groups?.type}".`,
    )}`,
  );
  process.exit(1);
}
