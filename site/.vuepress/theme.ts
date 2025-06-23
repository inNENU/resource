import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  favicon: "/favicon.ico",
  logo: "/logo.svg",
  hostname: "https://innenu.com",
  repo: "inNENU/resource",

  docsDir: "pages",
  editLinkPattern: ":repo/edit/:branch/:path",

  footer: "在东师，就用 inNENU",
  copyright: `使用 <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/deed.zh-hans">CC BY-NC-ND 4.0</a> 协议`,
  displayFooter: true,

  navbar: [
    "/",
    "/newcomer/",
    "/guide/",
    "/intro/",
    "/school/",
    "/apartment/",
    "/contributing/",
  ],

  sidebar: {
    "/": false,
    "/contributing/": "structure",
    "/apartment/": "structure",
    "/guide/": "structure",
    "/intro/": "structure",
    "/other/": "structure",
    "/newcomer/": "structure",
    "/school/": "structure",
  },

  pageInfo: ["Author", "Original", "Date", "PageView", "ReadingTime", "Word"],

  pure: true,

  metaLocales: {
    date: "更新日期",
  },

  markdown: {
    align: true,
    attrs: true,
    figure: true,
    linksCheck: false,
  },

  plugins: {
    copyright: {
      disableCopy: process.env.NODE_ENV !== "development",
      disableSelection: process.env.NODE_ENV !== "development",
      global: true,
      author: "Mr.Hope",
      license: "CC BY-NC-ND 4.0",
    },

    components: {
      components: ["VidStack"],
    },

    icon: {
      assets: "fontawesome",
    },

    meilisearch: {
      host: "https://meilisearch.innenu.com",
      apiKey:
        "35f2107c9146d9f57fa00454252dce5d40c87c16ee60de6d1ef3f5095c318b50",
      indexUid: "innenu",
    },
  },
});
