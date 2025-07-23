import { checkAssets } from "innenu-generator";

checkAssets(
  ["config", "data", "pages"],
  ["file", "img"],
  [
    /.DS_Store$/,
    /.drawio$/,
    /^img\/tab\//,
    /^img\/weather\//,
    /^img\/inNENU/,
    /^img\/weNENU/,
    /original/,
    /\b20\d{2}\b/,
    "img/donate/Alipay.jpg",
    "img/donate/Wechat.jpg",
    "img/map/benbuMap.jpg",
    "img/map/jingyueMap.jpg",
  ],
);
