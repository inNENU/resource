import { getFileList } from "innenu-generator";

import { appIdInfo } from "./config/index.js";

const appIdList = Object.keys(appIdInfo);

export const pushPages = (): Promise<void> => {
  const fileList = [
    ...getFileList("./pages/guide", "yml").map(
      (filePath) =>
        `G${filePath.replace(/\.yml$/u, "").replace(/\/index$/, "/")}`,
    ),
    ...getFileList("./pages/intro", "yml").map(
      (filePath) =>
        `I${filePath.replace(/\.yml$/u, "").replace(/\/index$/, "/")}`,
    ),
  ];

  const pageLists = fileList.map((filePath) => ({
    page: "pages/info/info",
    query: `path=${filePath}`,
  }));

  const promises = appIdList.map((appId) =>
    Number.isNaN(Number(appId))
      ? fetch(
          `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appIdInfo[appId]}`,
        )
          // eslint-disable-next-line @typescript-eslint/naming-convention
          .then((res) => res.json() as Promise<{ access_token: string }>)
          .then((data) =>
            fetch(
              `https://api.weixin.qq.com/wxa/search/wxaapi_submitpages?access_token=${data.access_token}`,
              { method: "post", body: JSON.stringify({ pages: pageLists }) },
            ),
          )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          })
      : Promise.resolve(),
  );

  return Promise.all(promises).then(() => {
    console.info("All pages are published");
  });
};

await pushPages();
