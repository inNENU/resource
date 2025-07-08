import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

import { deleteSync } from "del";
import { getFileList } from "innenu-generator";

const knowledgeList = getFileList("./knowledge", "md");

const cwd = process.cwd();

deleteSync("./.text/**");

try {
  mkdirSync(join(cwd, ".text"));
} catch {
  // Ignore error if directory already exists
}

knowledgeList.forEach((item) => {
  if (!item.includes("/")) return;

  copyFileSync(
    join(cwd, "knowledge", item),
    join(cwd, ".text", item.replace(/\.md$/, ".txt").replace(/\//g, "-")),
  );
});
