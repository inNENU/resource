import { viteBundler } from "@vuepress/bundler-vite";
import { meilisearchPlugin } from "@vuepress/plugin-meilisearch";
import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";

import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  title: "inNENU",
  description: "在东师，就用 inNENU",

  lang: "zh-CN",

  head: [
    ["link", { rel: "icon", href: "/logo.svg" }],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/android-chrome-512x512.png`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        href: `/assets/icon/android-chrome-192x192.png`,
        type: "image/png",
        sizes: "192x192",
      },
    ],
    ["meta", { name: "theme-color", content: "#41c98b" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: `/assets/icon/apple-touch-icon.png`,
      },
    ],
    [
      "meta",
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "black",
      },
    ],
  ],

  bundler: viteBundler(),

  plugins: [
    meilisearchPlugin({
      host: "https://meilisearch.innenu.com",
      apiKey:
        "fcd7566e2896d1155fa9a614f9f3ec6f5bf1a33cd93a7f568c372f92ac0d1727",
      indexUid: "innenu",
    }),
  ],

  theme,

  alias: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "@theme-hope/components/NormalPage": path.resolve(
      __dirname,
      "components/NormalPage.vue",
    ),
    // eslint-disable-next-line @typescript-eslint/naming-convention
    "@theme-hope/modules/info/components/PageMeta": path.resolve(
      __dirname,
      "components/PageMeta.ts",
    ),
  },

  shouldPrefetch: false,
  shouldPreload: false,
});
