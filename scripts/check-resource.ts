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
  checkMapPageConfig,
  checkMarkersConfig,
  checkMusicList,
  checkPageConfig,
  checkPageIndexes,
  checkQQAccounts,
  checkWechatAccountData,
  checkWechatAccounts,
  checkYamlFiles,
} from "innenu-generator";
import type { PageConfig } from "innenu-generator/typings";

import { allowedTags } from "./config/index.js";
import { RESOURCE_FOLDERS } from "./generate/resource.js";
import { generateSettings } from "./generate/settings.js";

import "./config/env.js";

// 检查
RESOURCE_FOLDERS.forEach((folder) => {
  checkYamlFiles<PageConfig>(`./pages/${folder}`, (data, filePath) => {
    checkPageConfig(data, `${folder}/${filePath}`, {
      allowedTags,
      tagRequired: true,
    });
  });
});

// 转换账号
checkYamlFiles<WechatAccountData>("./data/account", (data, filePath) => {
  checkWechatAccountData(data, filePath);
});

// 功能大厅
checkYamlFiles("./data/function", (data, filePath) => {
  if (filePath.startsWith("map/marker/benbu")) {
    checkMarkersConfig(data as MarkersConfig, "benbu");
  } else if (filePath.startsWith("map/marker/jingyue")) {
    checkMarkersConfig(data as MarkersConfig, "jingyue");
  } else if (/map\/(benbu|jingyue)\//u.test(filePath)) {
    checkMapPageConfig(data as MapPageConfig, `function/${filePath}`);
  } else if (filePath === "account/qq") {
    checkQQAccounts(data as QQAccounts, filePath);
  } else if (filePath === "account/wx") {
    checkWechatAccounts(data as WechatAccounts, filePath);
  } else if (filePath === "music/index") {
    checkMusicList(data as MusicList, filePath);
  } else if (filePath === "search") {
    checkPageIndexes(data as PageIndexes, filePath);
  }
});

// 生成 tab 页
checkYamlFiles("./config", (data, filePath) => {
  if (filePath.endsWith("settings")) generateSettings(data);
});

console.info("All completed");
