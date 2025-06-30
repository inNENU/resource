import type {
  MapPageConfig,
  MarkersConfig,
  MusicList,
  QQAccounts,
  WechatAccountData,
  WechatAccounts,
} from "innenu-generator";
import {
  checkMapPageConfig,
  checkMarkersConfig,
  checkMusicList,
  checkPageConfig,
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
  if (/map\/marker\/benbu/u.exec(filePath)) {
    checkMarkersConfig(data as MarkersConfig, "benbu");
  } else if (/map\/marker\/jingyue/u.exec(filePath)) {
    checkMarkersConfig(data as MarkersConfig, "jingyue");
  } else if (/map\/(benbu|jingyue)\//u.exec(filePath)) {
    checkMapPageConfig(data as MapPageConfig, `function/${filePath}`);
  } else if (/account\/qq/u.exec(filePath)) {
    checkQQAccounts(data as QQAccounts, filePath);
  } else if (/account\/wx/u.exec(filePath)) {
    checkWechatAccounts(data as WechatAccounts, filePath);
  } else if (/music\/index/u.exec(filePath)) {
    checkMusicList(data as MusicList, filePath);
  }
});

// 生成 tab 页
checkYamlFiles("./config", (data, filePath) => {
  if (/settings$/u.exec(filePath)) generateSettings(data);
});

console.info("All completed");
