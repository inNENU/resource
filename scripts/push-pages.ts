import { getFileList } from "innenu-generator";

import { appIdInfo } from "./config/index.js";

const appIdList = Object.keys(appIdInfo);

export const pushPages = async (): Promise<void> => {
  const fileList = [
    ...getFileList("./pages/guide", "yml").map(
      (filePath) => `G${filePath.replace(/\.yml$/u, "").replace(/\/index$/u, "/")}`,
    ),
    ...getFileList("./pages/intro", "yml").map(
      (filePath) => `I${filePath.replace(/\.yml$/u, "").replace(/\/index$/u, "/")}`,
    ),
  ];

  const pageLists = fileList.map((filePath) => ({
    page: "pages/info/info",
    query: `path=${filePath}`,
  }));

  const pushPagesForApp = async (appId: string): Promise<void> => {
    if (Number.isNaN(Number(appId))) {
      const tokenRes = await fetch(
        `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appIdInfo[appId]}`,
      );
      const { access_token } = (await tokenRes.json()) as {
        access_token: string;
      };

      const publishRes = await fetch(
        `https://api.weixin.qq.com/wxa/search/wxaapi_submitpages?access_token=${access_token}`,
        { method: "post", body: JSON.stringify({ pages: pageLists }) },
      );
      const data = (await publishRes.json()) as unknown;
      console.log(data);
    }
  };

  await Promise.all(appIdList.map((appId) => pushPagesForApp(appId)));
  console.info("All pages are published");
};

await pushPages();
