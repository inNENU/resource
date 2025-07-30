import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

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
    [
      "script",
      {},
      `\
window.difyChatbotConfig = {
  token: 'nsFTs8LGewxcPpgf',
  baseUrl: 'https://search-ai.cn',
}
`,
    ],
    [
      "script",
      {
        src: "https://search-ai.cn/embed.min.js",
        id: "nsFTs8LGewxcPpgf",
        defer: "",
      },
    ],
  ],

  bundler: viteBundler(),

  theme,

  extendsPage: (page) => {
    if (page.filePathRelative) {
      page.data.filePathRelative = page.filePathRelative
        .replace(/README\.md$/, "index.yml")
        .replace(/\.md$/, ".yml");
    }
  },

  shouldPrefetch: false,
  shouldPreload: false,
});
