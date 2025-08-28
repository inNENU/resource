import cpx from "cpx2";
import { deleteSync } from "del";
import type {
  MapPageConfig,
  MarkersConfig,
  MusicList,
  PageIndexes,
  QQAccounts,
  WechatAccountData,
  WechatAccounts,
} from "innenu-generator";
import {
  convertYamlFilesToJson,
  generateLyrics,
  generateSvgIcons,
  getCurrentChangedFiles,
  getMapPageJSON,
  getMarkersJSON,
  getMusicListJSON,
  getPageIndexesJSON,
  getPageJSON,
  getQQAccountsJSON,
  getWechatAccountDataJSON,
  getWechatAccountsJSON,
} from "innenu-generator";
import type { PageConfig, PageData } from "innenu-generator/typings";

import { allowedTags } from "./config/index.js";
import type { Donate } from "./generate/donate.js";
import { generateDonate } from "./generate/donate.js";
import { generateLicense } from "./generate/license.js";
import type { PEConfig } from "./generate/peScore.js";
import { generatePEScore } from "./generate/peScore.js";
import { RESOURCE_FOLDERS, generateResource } from "./generate/resource.js";
import { generateSettings } from "./generate/settings.js";
import { replaceWordCount } from "./generate/wordCount.js";

import "./config/env.js";

const diffFiles = getCurrentChangedFiles();

// 删除旧的文件
deleteSync("./.resource/**");

// 生成资源
RESOURCE_FOLDERS.forEach((folder) => {
  convertYamlFilesToJson<PageConfig, PageData>(
    `./pages/${folder}`,
    `./.resource/${folder}`,
    (data, filePath) =>
      getPageJSON(data, `${folder}/${filePath}`, diffFiles, {
        allowedTags,
        removeFields: ["aiIgnore", "tags"],
      }),
    (content, filePath) => {
      if (
        [
          "about/welcome",
          "about/2025-welcome",
          "about/interview",
          "app-intro/intro",
          "app-intro/search",
        ].includes(filePath)
      ) {
        return replaceWordCount(content);
      }

      return content;
    },
  );
});

// 转换账号
convertYamlFilesToJson<WechatAccountData>(
  "./data/account",
  "./.resource/account",
  (data, filePath) => getWechatAccountDataJSON(data, filePath),
);

// 功能大厅
convertYamlFilesToJson(
  "./data/function",
  "./.resource/function",
  (data, filePath) =>
    filePath === "map/marker/benbu"
      ? getMarkersJSON(data as MarkersConfig, "benbu")
      : filePath === "map/marker/jingyue"
        ? getMarkersJSON(data as MarkersConfig, "jingyue")
        : /map\/(benbu|jingyue)\//u.test(filePath)
          ? getMapPageJSON(data as MapPageConfig, `function/${filePath}`)
          : /pe-calculator\/(male|female)-(low|high)/u.test(filePath)
            ? generatePEScore(data as PEConfig)
            : filePath === "account/wx"
              ? getWechatAccountsJSON(data as WechatAccounts, filePath)
              : filePath === "account/qq"
                ? getQQAccountsJSON(data as QQAccounts, filePath)
                : filePath === "music/index"
                  ? getMusicListJSON(data as MusicList, filePath)
                  : filePath === "search"
                    ? getPageIndexesJSON(data as PageIndexes, filePath)
                    : data,
);

// 生成协议
await generateLicense();

// 生成转码后的图标
generateSvgIcons("./data/icon", "./.resource/icon");

// 生成歌词
generateLyrics("./data/function/music", "./.resource/function/music");

// 生成捐赠
convertYamlFilesToJson<Donate, PageData>(
  "./config/donate",
  "./.resource/other/donate",
  (data, filePath) => generateDonate(data, filePath),
);

// 生成 tab 页
convertYamlFilesToJson(
  "./config",
  "./.resource/config",
  (data, filePath) => {
    if (/item$/u.exec(filePath) || /group$/u.exec(filePath)) return null;

    if (/settings$/u.exec(filePath)) return generateSettings(data);

    return data;
  },
  (content, filePath) => {
    if (/settings$/u.exec(filePath)) return replaceWordCount(content);

    return content;
  },
);

// 生成资源
generateResource(diffFiles);

// 复制图标
cpx.copySync("./data/icon/**", "./.resource/icons");
// 复制服务
cpx.copySync("./service/**", "./.resource/service");
// 复制 schema 配置
cpx.copySync("./.vscode/**", "./.resource/.vscode");
// 复制文件
cpx.copySync("./public/**", "./.resource");

console.info("All completed");
