import { checkAssets } from "innenu-generator";

checkAssets(
  ["config", "data", "pages"],
  ["file", "img"],
  [
    /.DS_Store$/u,
    /.drawio$/u,
    /^img\/tab\//u,
    /^img\/weather\//u,
    /^img\/inNENU/u,
    /^img\/weNENU/u,
    /original/u,
    /\b20\d{2}\b/u,
    "img/donate/Alipay.jpg",
    "img/donate/Wechat.jpg",
    "img/map/benbuMap.jpg",
    "img/map/jingyueMap.jpg",
  ],
);
