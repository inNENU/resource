import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";

import { deleteSync } from "del";
import { getFileList } from "innenu-generator";

const knowledgeList = getFileList("./knowledge", "md");

const cwd = process.cwd();

deleteSync("./.text/**");

knowledgeList.forEach((item) => {
  const oldPath = join(cwd, "knowledge", item);
  const newPath = join(cwd, ".text", item.replace(/\.md$/, ".txt"));

  // Ensure the directory exists
  const newDir = dirname(newPath);

  try {
    mkdirSync(newDir, { recursive: true });
  } catch {
    // Ignore error if directory already exists
  }

  copyFileSync(oldPath, newPath);
});
