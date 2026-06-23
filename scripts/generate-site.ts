import { copy } from "cpx2";
import { deleteSync } from "del";
import { convertYamlFilesToMarkdown, getPageMarkdown } from "innenu-generator";
import type { PageConfig } from "innenu-generator/typings";

import { RESOURCE_FOLDERS } from "./generate/resource.js";
import "./config/env.js";

// 删除旧的文件
deleteSync(".site/**");

await copy("./site/**", "./.site/");
await copy("./site/.vuepress/**", "./.site/.vuepress");

// 生成对应的 Markdown
RESOURCE_FOLDERS.forEach((folder) => {
  convertYamlFilesToMarkdown(
    `./pages/${folder}`,
    (data: PageConfig, filepath: string) => getPageMarkdown(data, filepath),
    `./.site/${folder}`,
  );
});
